import { Component } from '@angular/core';

type Experience = {
  role: string;
  company: string;
  date: string;
  responsibilities: string[];
};

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent {
  protected readonly experiences: Experience[] = [
    {
      role: 'Software Engineer Intern',
      company: 'Nexus Elixir Solutions Corp.',
      date: 'February 2026 – May 2026',
      responsibilities: [
        'Translated Figma UI/UX designs into responsive Angular components while maintaining consistency with design specifications.',
        'Integrated Angular frontend features with Spring Boot backend microservices.',
        'Participated in code reviews, sprint activities, and application development.',
        'Worked with Angular, Spring Boot, MongoDB, and MySQL across multiple application features.',
      ],
    },
  ];
}
