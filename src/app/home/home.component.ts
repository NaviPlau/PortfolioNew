import { Component } from '@angular/core';
import { HeroComponent } from "../hero/hero.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ReferencesComponent } from "../references/references.component";
import { ContactComponent } from "../contact/contact.component";
import { LazyloadDirective } from '../shared/directives/lazyload/lazyload.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactComponent,
    LazyloadDirective,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  heroVisible = true;
  aboutVisible = true;
  skillsVisible = false;
  projectsVisible = false;
  referencesVisible = false;
  contactVisible = false;
}
