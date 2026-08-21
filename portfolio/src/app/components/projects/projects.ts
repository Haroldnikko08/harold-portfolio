import { Component } from '@angular/core';

type Project = {
  featured: boolean;
  title: string;
  description: string;
  image?: string;
  logoText?: string;
  technologies: string[];
  github?: string;
  githubLabel?: string;
  private?: boolean;
};

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  protected readonly projects: Project[] = [
    {
      featured: true,
      title: 'ElevateEd',
      description:
        'A web-based platform designed to digitize and streamline the teacher promotion and position reclassification process for DepEd through digital requirements submission, online evaluation, automated scoring, applicant ranking, and transparent access to results.',
      image: '/Elevated%20Logo.png',
      technologies: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
      github: 'YOUR_ELEVATEED_GITHUB_LINK',
      githubLabel: 'GitHub',
    },
    {
      featured: false,
      title: 'AI Chatbot',
      description:
        'A full-stack AI chatbot application built with Angular and Spring Boot, integrating Ollama for local AI model processing and intelligent conversational interactions.',
      image: '/ROBOT.png',
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'Ollama'],
      github: 'https://github.com/jztntmps/chatbot',
      githubLabel: 'Frontend',
    },
    {
      featured: false,
      title: 'Human Resources System',
      description:
        'A full-stack human resources management system designed to streamline and digitize HR processes through a centralized web-based platform and integrated backend services.',
      logoText: 'HRS',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'MongoDB'],
      private: true,
    },
    {
      featured: false,
      title: 'Petcare',
      description:
        'An RFID-integrated veterinary management system designed to identify and track pets while maintaining centralized pet records and information.',
      image: '/petcare.png',
      technologies: ['PHP', 'JavaScript', 'HTML', 'MySQL', 'RFID'],
      github: 'YOUR_PETCARE_GITHUB_LINK',
      githubLabel: 'GitHub',
    },
  ];
}