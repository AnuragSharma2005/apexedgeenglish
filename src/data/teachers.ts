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
    name: "Shikha",
    qualification: "Senior IELTS Expert",
    image: "/teachers/shikha.png",
    experience: "8+ Years",
    specialization: "IELTS & Business English",
    bio: "Shikha Chawla is a veteran in the field of English language training. With over a decade of experience, she has helped thousands of students achieve their dream band scores in IELTS.",
    skills: ["IELTS Academic", "IELTS General", "Public Speaking", "Curriculum Design"],
    achievements: ["Best Educator Award 2022", "Trained 5000+ Students", "British Council Certified"]
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
