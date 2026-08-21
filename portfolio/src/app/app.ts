import { Component } from '@angular/core';

import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { ExperienceComponent } from './components/experience/experience';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './components/hero/hero';
import { NavbarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
