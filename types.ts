
export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  photoUrl?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  type: 'Technical' | 'Soft';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  technologies: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url: string;
}

export interface Language {
  id: string;
  name: string;
  proficiency: 'Basic' | 'Conversational' | 'Professional' | 'Native';
}

export interface SocialLink {
  id: string;
  platform: 'LinkedIn' | 'GitHub' | 'Portfolio' | 'Twitter' | 'Behance' | 'Other';
  url: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
  languages: Language[];
  socialLinks: SocialLink[];
  templateId: string;
  font?: 'sans' | 'serif' | 'mono';
}

export const initialResumeState: ResumeData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    photoUrl: ''
  },
  summary: '',
  education: [],
  experience: [],
  skills: [],
  projects: [],
  certifications: [],
  languages: [],
  socialLinks: [],
  templateId: 'modern',
  font: 'sans',
};

export const demoResumeData: ResumeData = {
  personalInfo: {
    fullName: 'Alex Morgan',
    jobTitle: 'Senior Software Engineer',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 123-4567',
    city: 'San Francisco',
    country: 'USA',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  summary: 'Experienced software engineer with over 8 years of expertise in building scalable web applications. Proven track record in full-stack development, cloud architecture, and team leadership. Passionate about clean code, performance optimization, and mentoring junior developers to achieve engineering excellence.',
  education: [
    {
      id: '1',
      school: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      location: 'Stanford, CA',
      startDate: '2014',
      endDate: '2016',
      grade: '3.9 GPA'
    },
    {
      id: '2',
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Engineering',
      location: 'Berkeley, CA',
      startDate: '2010',
      endDate: '2014',
      grade: '3.8 GPA'
    }
  ],
  experience: [
    {
      id: '1',
      company: 'TechFlow Solutions',
      position: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2020',
      endDate: 'Present',
      current: true,
      description: '• Led the migration of a legacy monolith to microservices architecture, improving system scalability by 40%.\n• Mentored a team of 5 junior developers, conducting code reviews and technical workshops.\n• Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%.'
    },
    {
      id: '2',
      company: 'Innovate Corp',
      position: 'Software Developer',
      location: 'San Jose, CA',
      startDate: 'Jun 2016',
      endDate: 'Dec 2019',
      current: false,
      description: '• Developed and maintained high-traffic e-commerce web applications using React and Node.js.\n• Collaborated with product managers and designers to deliver user-centric features.\n• Optimized database queries, resulting in a 25% reduction in page load times.'
    }
  ],
  skills: [
    { id: '1', name: 'JavaScript', level: 'Expert', type: 'Technical' },
    { id: '2', name: 'React', level: 'Expert', type: 'Technical' },
    { id: '3', name: 'Node.js', level: 'Advanced', type: 'Technical' },
    { id: '4', name: 'Python', level: 'Intermediate', type: 'Technical' },
    { id: '5', name: 'AWS', level: 'Advanced', type: 'Technical' },
    { id: '6', name: 'Team Leadership', level: 'Expert', type: 'Soft' }
  ],
  projects: [
    {
      id: '1',
      name: 'E-commerce Analytics Dashboard',
      description: 'A real-time analytics dashboard for e-commerce merchants to track sales and user behavior.',
      link: 'github.com/alexmorgan/analytics',
      technologies: 'React, D3.js, Firebase'
    },
    {
      id: '2',
      name: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates and team features.',
      link: 'taskapp.demo.com',
      technologies: 'Vue.js, Django, PostgreSQL'
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022',
      url: 'aws.amazon.com/verify'
    }
  ],
  languages: [
    { id: '1', name: 'English', proficiency: 'Native' },
    { id: '2', name: 'Spanish', proficiency: 'Conversational' }
  ],
  socialLinks: [
    { id: '1', platform: 'LinkedIn', url: 'linkedin.com/in/alexmorgan' },
    { id: '2', platform: 'GitHub', url: 'github.com/alexmorgan' }
  ],
  templateId: 'modern',
  font: 'sans'
};
