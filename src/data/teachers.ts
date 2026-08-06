export interface Teacher {
  id: string;
  name: string;
  qualification: string;
  image: string;
  experience: string;
  specialization: string;
  bio: string;
  skills: string[];
  achievements: string[];
}

export const teachers: Teacher[] = [
  {
    id: "Ashish",
    name: "Ashish Rawat",
    qualification: "Business Communication Expert",
    image: "/teachers/ashish.png",
    experience: "8+ Years",
    specialization: "Business Communication",
    bio: "With over 8 years of experience in Business Communication and Professional English training, I am passionate about helping students and professionals develop the communication skills essential for success in today's global environment.\n\nAs the Business Communication Expert at Apex Edge, I specialize in professional communication, workplace etiquette, presentation skills, interview preparation, and interpersonal effectiveness.\n\nCommunicate with confidence. Lead with impact. Succeed without limits.",
    skills: ["Professional Communication", "Presentation Skills", "Interview Preparation", "Workplace Etiquette", "Interpersonal Effectiveness", "Business English"],
    achievements: ["8+ Years of Business Communication Training", "Practical Learning & Personalized Mentoring", "Empowering Professionals for Global Success"]
  },
  {
    id: "Deepika",
    name: "Deepika Chawla",
    qualification: "Founder & Lead Trainer",
    image: "/teachers/deepika_chawla.png",
    experience: "8+ Years",
    specialization: "IELTS & CELPIP",
    bio: "With over 8 years of experience in English language training, I specialize in preparing students for the IELTS and CELPIP examinations through personalized, strategic, and results-driven coaching.\n\nMy teaching approach combines structured learning, practical exam techniques, and individual mentorship to help learners improve their English proficiency and achieve their target scores with confidence. Every training program at Apex Edge is designed to provide focused guidance, continuous feedback, and proven strategies that prepare students for success in international education, immigration, and career opportunities.\n\nAt Apex Edge, I don't just prepare students for an exam—I empower them to achieve their global aspirations with confidence and excellence.",
    skills: ["IELTS Preparation", "CELPIP Training", "Structured Learning", "Individual Mentorship", "Exam Techniques", "English Proficiency"],
    achievements: ["Founder of Apex Edge", "8+ Years of Expert Training", "Empowering Global Aspirations"]
  },
  {
    id: "shikha",
    name: "Ms. Shikha",
    qualification: "Senior IELTS Expert",
    image: "/teachers/shikha.png",
    experience: "5+ Years",
    specialization: "IELTS & Band Enhancement",
    bio: "With 5+ years of dedicated IELTS training experience, Ms. Shikha has empowered hundreds of aspirants to achieve their target band scores for higher education, professional registration, and global immigration.\n\nRenowned for her result-oriented mentoring, she combines proven exam strategies with personalized coaching to help students excel in all four IELTS modules.\n\nHer structured teaching methodology, in-depth exam expertise, and commitment to student success have made her a trusted mentor at Apex Edge English.",
    skills: ["IELTS Academic & General Training", "Writing & Speaking Excellence", "Band Score Enhancement", "Personalized Mentoring", "Mock Test Analysis"],
    achievements: ["5+ Years of IELTS Training", "Result-Oriented Mentoring", "Trusted Mentor at Apex Edge"]
  },
  {
    id: "deepika",
    name: "Deepika Arya",
    qualification: "PTE Specialist",
    image: "/teachers/deepika.jpeg",
    experience: "8+ Years",
    specialization: "PTE & CELPIP",
    bio: "Deepika holds a PhD in English Literature and is a certified PTE trainer. Her analytical approach to language testing makes her one of the most sought-after trainers.",
    skills: ["PTE Academic", "CELPIP-General", "English Literature", "Grammar Mastery"],
    achievements: ["Highest Student Success Rate 2023", "Published Author", "IDP Certified Trainer"]
  }
];
