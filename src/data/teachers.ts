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
    name: "Deepika ",
    qualification: "IELTS & CELPIP Specialist",
    image: "/teachers/deepika_chawla.png",
    experience: "7+ Years",
    specialization: "CELPIP & Soft Skills",
    bio: "Deepika Chawla is a specialist in IELTS and CELPIP training. Her attention to detail and personalized feedback have consistently led to high success rates for her students.",
    skills: ["IELTS", "CELPIP-LS", "Soft Skills Training", "Interview Preparation"],
    achievements: ["Community Leader Award", "Student Choice Award 2024", "Certified Trainer"]
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
    name: "Deepika",
    qualification: "PTE Specialist",
    image: "/teachers/deepika.jpeg",
    experience: "8+ Years",
    specialization: "PTE & CELPIP",
    bio: "Deepika holds a PhD in English Literature and is a certified PTE trainer. Her analytical approach to language testing makes her one of the most sought-after trainers.",
    skills: ["PTE Academic", "CELPIP-General", "English Literature", "Grammar Mastery"],
    achievements: ["Highest Student Success Rate 2023", "Published Author", "IDP Certified Trainer"]
  }
];
