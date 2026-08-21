import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {
  protected readonly profileImage = 'GRADPIC.JPG';
  protected imageAvailable = true;

  protected hideBrokenImage(): void {
    this.imageAvailable = false;
  }
}
