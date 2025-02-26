import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';

@Component({
  selector: 'app-hero-linked',
  imports: [],
  templateUrl: './hero-linked.component.html',
  styleUrl: './hero-linked.component.scss'
})
export class HeroLinkedComponent {
  lightmodus = inject(LightDarkService)
}
