import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';

@Component({
  selector: 'app-hero-github',
  standalone: true,
  imports: [],
  templateUrl: './hero-github.component.html',
  styleUrl: './hero-github.component.scss'
})
export class HeroGithubComponent {
  lightmodus = inject(LightDarkService)
}
