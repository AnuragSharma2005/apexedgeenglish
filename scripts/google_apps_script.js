/**
 * Apex Edge English - Google Sheets Integration & Auto-Email Responder
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet linked to the forms.
 * 2. Click Extensions -> Apps Script.
 * 3. Replace all existing script code with this code.
 * 4. Click Save (Disk Icon).
 * 5. Click "Deploy" (top right) -> "New deployment".
 * 6. Select Type: "Web app".
 * 7. Configure:
 *    - Description: Apex Edge Integration V6
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (Crucial for receiving form submissions).
 * 8. Click Deploy. Authorize any required permissions.
 * 9. Copy the new Web App URL and ensure it matches the URL inside ContactUsPage.tsx and EnrollNowPage.tsx.
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var json = [];
  for (var i = 1; i < data.length; i++) {
    var obj = { rowId: i + 1 };
    for (var j = 0; j < headers.length; j++) { 
      var key = headers[j].toString().trim();
      if (key) obj[key] = data[i][j]; 
    }
    json.push(obj);
  }
  return ContentService.createTextOutput(JSON.stringify(json)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // 1. Status Update Logic (From Dashboard)
  if (data.action === "updateStatus") {
    var statusCol = -1;
    for(var i=0; i<headers.length; i++) {
      if(headers[i].toString().toLowerCase().trim() === "status") { statusCol = i + 1; break; }
    }
    if (statusCol === -1) { statusCol = headers.length + 1; sheet.getRange(1, statusCol).setValue("Status"); }
    sheet.getRange(parseInt(data.rowId), statusCol).setValue(data.status);
    return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
  }

  // 2. Dynamic Row Insertion (Matches form keys to ANY sheet header)
  var newRow = headers.map(function(h) {
    var header = h.toString().trim();
    var headerLower = header.toLowerCase();

    if (headerLower === "timestamp") return new Date();
    if (headerLower === "status") return "New";
    
    // Check all incoming data for a matching header name
    for (var key in data) {
      if (key.toLowerCase().trim() === headerLower) {
        return data[key];
      }
    }
    return ""; // Empty if no match
  });
  
  sheet.appendRow(newRow);

  // 3. Auto-email Responder Logic with Inline Logo & Pinkish Professional Theme
  var studentName = data.Name || data.name || "Student";
  var studentEmail = data.Email || data.email;
  var formType = data.form_type || data.form_Type || "enroll";

  if (studentEmail) {
    var subject = "";
    var htmlBody = "";
    
    // Generate a unique transaction Reference ID to prevent Gmail from grouping and folding the email
    var uniqueRef = "Ref: APEX-" + new Date().getTime().toString(36).toUpperCase() + "-" + Math.floor(1000 + Math.random() * 9000);
    
    // Fetch brand logo dynamically from Github public assets
    var logoUrl = "https://raw.githubusercontent.com/AnuragSharma2005/apexedgeenglish/main/public/logo.png";
    var logoBlob;
    try {
      logoBlob = UrlFetchApp.fetch(logoUrl).getBlob().setName("logo.png");
    } catch(e) {
      Logger.log("Could not fetch logo: " + e.toString());
    }

    if (formType === "contact") {
      var inquirySubject = data.Subject || data.subject || "General Inquiry";
      subject = "We have received your message - Apex Edge English";
      htmlBody = 
        "<div style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6e8eb; padding: 40px 20px; margin: 0; min-height: 100%; text-align: center;\">" +
          "<div style='max-width: 680px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 15px 40px rgba(217, 15, 64, 0.06); border: 1px solid #eecad1; text-align: left;'>" +
            
            "<div style='background-color: #fbe6e9; padding: 30px 20px; text-align: center; border-bottom: 3px double #d90f40;'>" +
              (logoBlob ? "<img src='cid:logo' alt='Apex Edge English' style='height: 90px; width: auto; display: block; margin: 0 auto;' />" : "<h2 style='color: #d90f40; margin: 0;'>Apex Edge English</h2>") +
            "</div>" +

            "<div style='padding: 40px 35px; color: #2d3748;'>" +
              "<p style='font-size: 16px; font-weight: bold; margin-top: 0; color: #1a1a1a;'>Hi " + studentName + ",</p>" +
              "<p style='font-size: 15px; line-height: 1.6; color: #4a5568;'>Thank you for reaching out to Apex Edge English. We have successfully received your inquiry regarding <strong>" + inquirySubject + "</strong>.</p>" +
              
              "<div style='background-color: #fffafb; border-left: 4px solid #d90f40; border-radius: 4px; padding: 15px; margin: 25px 0; font-style: italic; color: #4a5568; font-size: 14px;'>" +
                "\"" + (data.Message || data.message || "No inquiry text details provided.") + "\"" +
              "</div>" +

              "<p style='font-size: 15px; line-height: 1.6; color: #4a5568;'>Our head counselor will review your inquiry details and get back to you <strong>within 24 hours</strong> via your preferred contact channel (<strong>" + (data.Contact_Method || data.method || "WhatsApp/Phone") + "</strong>).</p>" +
              "<p style='font-size: 15px; line-height: 1.6; color: #4a5568; margin-bottom: 0;'>Have a wonderful day!</p>" +
              
              "<div style='font-size: 10px; color: #cbd5e0; text-align: center; margin-top: 35px; border-top: 1px solid #f7fafc; padding-top: 15px; font-family: monospace;'>" + uniqueRef + " | Sent: " + new Date().toUTCString() + "</div>" +
            "</div>" +

            "<div style='background-color: #faf5f6; padding: 30px 20px; border-top: 1px solid #f6e8eb; font-size: 13px; color: #718096; line-height: 1.8; text-align: center;'>" +
              "<strong style='color: #d90f40; font-size: 14px; display: block; margin-bottom: 4px;'>Apex Edge English</strong>" +
              "<div style='font-size: 11px; color: #a0aec0; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;'>Your Path to Global Success</div>" +
              
              "<div style='margin: 15px 0 20px 0; text-align: center;'>" +
                "<a href='https://www.instagram.com/apex_.edge?igsh=MXN5MXd5NzgwdDd0eA==' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/instagram-new--v1.png' alt='Instagram' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
                "<a href='https://www.linkedin.com/in/apexedge-english-a85a4840a/' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/linkedin.png' alt='LinkedIn' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
                "<a href='https://wa.me/918360079077' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/whatsapp.png' alt='WhatsApp' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
                "<a href='tel:+918360079077' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/phone.png' alt='Call' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
              "</div>" +

              "<div style='font-size: 12px; color: #718096; border-top: 1px dashed #eecad1; padding-top: 15px;'>" +
                "<a href='https://www.apexedgeenglish.com' style='color: #d90f40; text-decoration: none; font-weight: bold; font-size: 13px;'>www.apexedgeenglish.com</a>" +
              "</div>" +
            "</div>" +

          "</div>" +
        "</div>";
    } else {
      // Default: Enroll Page
      var selectedCourse = data["Selected Course"] || data["selected course"] || "English Exam Prep";
      var selectedDate = data.Date || data.date || "Immediate";
      var preferredContact = data.Contact_Method || data.Contact_method || data.method || "WhatsApp";
      var isEmailPreferred = preferredContact.toString().toLowerCase().trim() === "email";

      var contactInfoInstruction = "";
      if (isEmailPreferred) {
        contactInfoInstruction = "reach out to you via <strong>Email</strong> (at your registered address: <strong>" + studentEmail + "</strong>)";
      } else {
        contactInfoInstruction = "connect with you via <strong>" + preferredContact + "</strong> (at your registered contact number: <strong>" + (data["Phone no"] || data.phone || "+91 83600 79077") + "</strong>)";
      }

      subject = "Your Enrollment is Confirmed! Next Steps - Apex Edge English";
      htmlBody = 
        "<div style=\"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6e8eb; padding: 40px 20px; margin: 0; min-height: 100%; text-align: center;\">" +
          "<div style='max-width: 680px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 15px 40px rgba(217, 15, 64, 0.06); border: 1px solid #eecad1; text-align: left;'>" +
            
            "<div style='background-color: #fbe6e9; padding: 30px 20px; text-align: center; border-bottom: 3px double #d90f40;'>" +
              (logoBlob ? "<img src='cid:logo' alt='Apex Edge English' style='height: 90px; width: auto; display: block; margin: 0 auto;' />" : "<h2 style='color: #d90f40; margin: 0;'>Apex Edge English</h2>") +
            "</div>" +

            "<div style='padding: 40px 35px; color: #2d3748;'>" +
              "<p style='font-size: 16px; font-weight: bold; margin-top: 0; color: #1a1a1a;'>Hi " + studentName + ",</p>" +
              "<p style='font-size: 15px; line-height: 1.6; color: #4a5568;'>Thank you for enrolling in our <strong>" + selectedCourse + "</strong> program! Your registration pass has been successfully confirmed.</p>" +
              
              "<div style='margin: 25px 0; font-size: 15px; line-height: 1.8; color: #2d3748; padding-left: 15px; border-left: 3px solid #d90f40;'>" +
                "<div style='font-size: 12px; font-weight: 800; color: #d90f40; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;'>Your Enrollment Pass</div>" +
                "<em>Course:</em> <strong>" + selectedCourse + "</strong><br/>" +
                "<em>Appointment Date:</em> <strong>" + selectedDate + "</strong><br/>" +
                "<em>Target Country:</em> <strong>" + (data.Country || data.country || "Not Specified") + "</strong><br/>" +
                "<em>Registered City:</em> <strong>" + (data.city || data.City || "Not Specified") + "</strong>" +
              "</div>" +

              "<p style='font-size: 15px; line-height: 1.6; color: #4a5568;'>On your chosen appointment date (<strong>" + selectedDate + "</strong>), our support counselor team will " + contactInfoInstruction + " <strong>within 24 hours</strong> to align your modules and assign your batch timing.</p>" +
              "<p style='font-size: 15px; line-height: 1.6; color: #4a5568;'>If you would like to reschedule or have questions beforehand, feel free to reply directly to this email.</p>" +
              "<p style='font-size: 15px; line-height: 1.6; color: #4a5568; margin-bottom: 0;'>We look forward to helping you achieve your global target score!</p>" +
              
              "<div style='font-size: 10px; color: #cbd5e0; text-align: center; margin-top: 35px; border-top: 1px solid #f7fafc; padding-top: 15px; font-family: monospace;'>" + uniqueRef + " | Sent: " + new Date().toUTCString() + "</div>" +
            "</div>" +

            "<div style='background-color: #faf5f6; padding: 30px 20px; border-top: 1px solid #f6e8eb; font-size: 13px; color: #718096; line-height: 1.8; text-align: center;'>" +
              "<strong style='color: #d90f40; font-size: 14px; display: block; margin-bottom: 4px;'>Apex Edge English</strong>" +
              "<div style='font-size: 11px; color: #a0aec0; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;'>Your Path to Global Success</div>" +
              
              "<div style='margin: 15px 0 20px 0; text-align: center;'>" +
                "<a href='https://www.instagram.com/apex_.edge?igsh=MXN5MXd5NzgwdDd0eA==' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/instagram-new--v1.png' alt='Instagram' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
                "<a href='https://www.linkedin.com/in/apexedge-english-a85a4840a/' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/linkedin.png' alt='LinkedIn' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
                "<a href='https://wa.me/918360079077' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/whatsapp.png' alt='WhatsApp' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
                "<a href='tel:+918360079077' target='_blank' style='display: inline-block; margin: 0 12px; text-decoration: none;'>" +
                  "<img src='https://img.icons8.com/color/48/phone.png' alt='Call' style='width: 32px; height: 32px; display: block; border: 0;' />" +
                "</a>" +
              "</div>" +

              "<div style='font-size: 12px; color: #718096; border-top: 1px dashed #eecad1; padding-top: 15px;'>" +
                "<a href='https://www.apexedgeenglish.com' style='color: #d90f40; text-decoration: none; font-weight: bold; font-size: 13px;'>www.apexedgeenglish.com</a>" +
              "</div>" +
            "</div>" +

          "</div>" +
        "</div>";
    }

    try {
      var emailOptions = {
        to: studentEmail.toString().trim(),
        subject: subject,
        htmlBody: htmlBody
      };
      if (logoBlob) {
        emailOptions.inlineImages = {
          logo: logoBlob
        };
      }
      MailApp.sendEmail(emailOptions);
    } catch(err) {
      Logger.log("Failed to send email: " + err.toString());
    }
  }

  return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
}
