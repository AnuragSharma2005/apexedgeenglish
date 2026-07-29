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
    experience: "10+ Years",
    specialization: "Communication Skills",
    bio: "Ashish is passionate about breaking the barriers of communication. His interactive teaching style ensures that students gain confidence in speaking English fluently.",
    skills: ["Conversational English", "Accent Neutralization", "Personality Development", "Corporate Training"],
    achievements: ["Top Voice on LinkedIn 2021", "Keynote Speaker", "Corporate Communication Expert"]
  },
  {
    id: "Deepika",
    name: "Deepika Chawla",
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
    name: "Shikha Chawla",
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
