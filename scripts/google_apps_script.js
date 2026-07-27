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
 *    - Description: Apex Edge Integration V2
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

  // 3. Auto-email Responder Logic
  var studentName = data.Name || data.name || "Student";
  var studentEmail = data.Email || data.email;
  var formType = data.form_type || data.form_Type || "enroll";

  if (studentEmail) {
    var subject = "";
    var htmlBody = "";

    if (formType === "contact") {
      var inquirySubject = data.Subject || data.subject || "General Inquiry";
      subject = "We have received your message - Apex Edge English";
      htmlBody = 
        "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f3dde2; border-radius: 12px; background-color: #ffffff; color: #1a1a1a;'>" +
          "<div style='text-align: center; border-bottom: 2px solid #d90f40; padding-bottom: 15px; margin-bottom: 20px;'>" +
            "<h2 style='color: #d90f40; margin: 0; font-size: 24px; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;'>Apex Edge English</h2>" +
            "<span style='font-size: 11px; color: #666; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;'>Inquiry Received</span>" +
          "</div>" +
          "<p style='font-size: 15px; line-height: 1.6;'>Hi <strong>" + studentName + "</strong>,</p>" +
          "<p style='font-size: 15px; line-height: 1.6;'>Thank you for reaching out to us. We have successfully received your message regarding: <strong>" + inquirySubject + "</strong>.</p>" +
          "<div style='background-color: #fcf6f6; border-left: 4px solid #d90f40; padding: 15px; margin: 20px 0; border-radius: 4px;'>" +
            "<p style='margin: 0; font-size: 13px; line-height: 1.5; color: #555;'>\"" + (data.Message || data.message || "No message content details") + "\"</p>" +
          "</div>" +
          "<p style='font-size: 15px; line-height: 1.6;'>Our head counselor will review your inquiry details and connect with you shortly via your preferred contact method (<strong>" + (data.Contact_Method || data.method || "WhatsApp/Phone") + "</strong>).</p>" +
          "<p style='font-size: 15px; line-height: 1.6; margin-top: 30px;'>Warm regards,<br/>" +
          "<strong style='color: #d90f40;'>Apex Edge English Team</strong></p>" +
          "<div style='margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; font-size: 11px; color: #666;'>" +
            "<strong>Apex Edge English</strong><br/>" +
            "Email: hello@apexedgeenglish.com<br/>" +
            "Web: <a href='https://www.apexedgeenglish.com' style='color: #d90f40; text-decoration: none;'>www.apexedgeenglish.com</a>" +
          "</div>" +
        "</div>";
    } else {
      // Default: Enroll Page
      var selectedCourse = data["Selected Course"] || data["selected course"] || "English Exam Prep";
      subject = "Your Enrollment is Confirmed! Next Steps - Apex Edge English";
      htmlBody = 
        "<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f3dde2; border-radius: 12px; background-color: #ffffff; color: #1a1a1a;'>" +
          "<div style='text-align: center; border-bottom: 2px solid #d90f40; padding-bottom: 15px; margin-bottom: 20px;'>" +
            "<h2 style='color: #d90f40; margin: 0; font-size: 24px; text-transform: uppercase; font-weight: 800; letter-spacing: 1px;'>Apex Edge English</h2>" +
            "<span style='font-size: 11px; color: #666; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;'>Registration Pass Confirmed</span>" +
          "</div>" +
          "<p style='font-size: 15px; line-height: 1.6;'>Hi <strong>" + studentName + "</strong>,</p>" +
          "<p style='font-size: 15px; line-height: 1.6;'>Thank you for enrolling in our <strong>" + selectedCourse + "</strong> program! Your registration pass has been successfully generated.</p>" +
          "<div style='background-color: #fcf6f6; border-left: 4px solid #d90f40; padding: 15px; margin: 20px 0; border-radius: 4px;'>" +
            "<h4 style='margin: 0 0 10px 0; color: #d90f40; text-transform: uppercase; font-size: 12px;'>Your Booking Details:</h4>" +
            "<table style='width: 100%; font-size: 13px; line-height: 1.5; border-collapse: collapse;'>" +
              "<tr><td style='width: 120px; font-weight: bold; color: #666; padding: 4px 0;'>Course:</td><td style='padding: 4px 0;'>" + selectedCourse + "</td></tr>" +
              "<tr><td style='font-weight: bold; color: #666; padding: 4px 0;'>Start Date:</td><td style='padding: 4px 0;'>" + (data.Date || data.date || "Immediate") + "</td></tr>" +
              "<tr><td style='font-weight: bold; color: #666; padding: 4px 0;'>Destination:</td><td style='padding: 4px 0;'>" + (data.Country || data.country || "Not Specified") + "</td></tr>" +
              "<tr><td style='font-weight: bold; color: #666; padding: 4px 0;'>City:</td><td style='padding: 4px 0;'>" + (data.city || data.City || "Not Specified") + "</td></tr>" +
            "</table>" +
          "</div>" +
          "<p style='font-size: 15px; line-height: 1.6;'>I see you're preparing to achieve your target score — well done on taking the first step. A short 15-minute diagnostic strategy call will help us understand your current level and outline a custom study blueprint for you.</p>" +
          "<p style='font-size: 15px; line-height: 1.6;'>Our counseling team will connect with you on WhatsApp (<strong>" + (data["Phone no"] || data.phone || "your registered number") + "</strong>) within the next 2 hours. If this isn't your preferred contact number, please reply to this email directly.</p>" +
          "<p style='font-size: 15px; line-height: 1.6; margin-top: 30px;'>Warm regards,<br/>" +
          "<strong style='color: #d90f40;'>Apex Edge English Team</strong></p>" +
          "<div style='margin-top: 30px; border-top: 1px solid #eee; padding-top: 15px; font-size: 11px; color: #666;'>" +
            "<strong>Apex Edge English</strong><br/>" +
            "Email: hello@apexedgeenglish.com<br/>" +
            "Web: <a href='https://www.apexedgeenglish.com' style='color: #d90f40; text-decoration: none;'>www.apexedgeenglish.com</a>" +
          "</div>" +
        "</div>";
    }

    try {
      MailApp.sendEmail({
        to: studentEmail.toString().trim(),
        subject: subject,
        htmlBody: htmlBody
      });
    } catch(err) {
      Logger.log("Failed to send email: " + err.toString());
    }
  }

  return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
}
