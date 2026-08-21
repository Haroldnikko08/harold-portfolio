import { Component } from '@angular/core';

type Skill = {
  name: string;
  category: string;
  icon: string;
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class SkillsComponent {
  protected readonly skills: Skill[] = [
  { name: 'Angular', category: 'Framework', icon: 'angular/angular-original.svg' },
  { name: 'TypeScript', category: 'Language', icon: 'typescript/typescript-original.svg' },
  { name: 'Java', category: 'Language', icon: 'java/java-original.svg' },
  { name: 'Spring Boot', category: 'Framework', icon: 'spring/spring-original.svg' },
  { name: 'Laravel', category: 'Framework', icon: 'laravel/laravel-original.svg' },
  { name: 'PHP', category: 'Language', icon: 'php/php-original.svg' },
  { name: 'HTML5', category: 'Markup', icon: 'html5/html5-original.svg' },
  { name: 'CSS3', category: 'Styling', icon: 'css3/css3-original.svg' },
  { name: 'SCSS', category: 'Styling', icon: 'sass/sass-original.svg' },
  { name: 'JavaScript', category: 'Language', icon: 'javascript/javascript-original.svg' },
  { name: 'MongoDB', category: 'Database', icon: 'mongodb/mongodb-original.svg' },
  { name: 'MySQL', category: 'Database', icon: 'mysql/mysql-original.svg' },
  { name: 'Docker', category: 'Tooling', icon: 'docker/docker-original.svg' },
  { name: 'Git', category: 'Tooling', icon: 'git/git-original.svg' },
  { name: 'GitHub', category: 'Collaboration', icon: 'github/github-original.svg' },
  { name: 'Canva', category: 'Design', icon: 'canva/canva-original.svg' },
];
  protected unavailableIcons = new Set<string>();

  protected iconUrl(icon: string): string {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}`;
  }

  protected markIconUnavailable(name: string): void {
    this.unavailableIcons.add(name);
  }

  protected isIconAvailable(name: string): boolean {
    return !this.unavailableIcons.has(name);
  }
}
