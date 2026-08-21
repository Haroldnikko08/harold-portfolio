import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  protected readonly links = {
    github: 'https://github.com/Haroldnikko08',
    linkedin: 'https://linkedin.com/in/harold-salanguit',
    email: 'mailto:haroldnikko.salanguit.9@gmail.com',
    resume: 'Resume/HAROLD SALANGUIT - RESUME.pdf',
  };
}
