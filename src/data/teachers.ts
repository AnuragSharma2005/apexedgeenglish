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
    id: "anurag",
    name: "Anurag Sharma",
    qualification: "Senior IELTS Expert",
    image: "/teachers/anurag.png",
    experience: "12+ Years",
    specialization: "IELTS & Business English",
    bio: "Anurag is a veteran in the field of English language training. With over a decade of experience, he has helped thousands of students achieve their dream band scores in IELTS. His methodology focuses on practical usage rather than just rote learning.",
    skills: ["IELTS Academic", "IELTS General", "Public Speaking", "Curriculum Design"],
    achievements: ["Best Educator Award 2022", "Trained 5000+ Students", "British Council Certified"]
  },
  {
    id: "priya",
    name: "Priya Verma",
    qualification: "PTE Specialist",
    image: "/teachers/priya.png",
    experience: "8+ Years",
    specialization: "PTE & CELPIP",
    bio: "Priya holds a PhD in English Literature and is a certified PTE trainer. Her analytical approach to language testing makes her one of the most sought-after trainers. She specializes in identifying student weaknesses and providing targeted solutions.",
    skills: ["PTE Academic", "CELPIP-General", "English Literature", "Grammar Mastery"],
    achievements: ["Highest Student Success Rate 2023", "Published Author", "IDP Certified Trainer"]
  },
  {
    id: "vikram",
    name: "Vikram Singh",
    qualification: "Spoken English Coach",
    image: "/teachers/vikram.png",
    experience: "10+ Years",
    specialization: "Communication Skills",
    bio: "Vikram is passionate about breaking the barriers of communication. His interactive teaching style ensures that students gain confidence in speaking English fluently. He believes that confidence is the key to mastering any language.",
    skills: ["Conversational English", "Accent Neutralization", "Personality Development", "Corporate Training"],
    achievements: ["Top Voice on LinkedIn 2021", "Keynote Speaker", "Corporate Communication Expert"]
  },
  {
    id: "sneha",
    name: "Sneha Kapoor",
    qualification: "CELPIP Specialist",
    image: "/teachers/sneha.png",
    experience: "7+ Years",
    specialization: "CELPIP & Soft Skills",
    bio: "Sneha specializes in CELPIP training. Her attention to detail and personalized feedback have consistently led to high success rates for her students. She focuses on the nuances of the CELPIP exam to ensure students are fully prepared.",
    skills: ["CELPIP-LS", "Soft Skills Training", "Interview Preparation", "Academic Writing"],
    achievements: ["Community Leader Award", "Student Choice Award 2024", "Certified Career Counselor"]
  }
];
