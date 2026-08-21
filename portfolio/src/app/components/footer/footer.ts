import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  protected readonly links = {
    github: 'https://github.com/Haroldnikko08',
    linkedin: '#',
    email: 'mailto:haroldnikko.salanguit.9@gmail.com',
  };
}
