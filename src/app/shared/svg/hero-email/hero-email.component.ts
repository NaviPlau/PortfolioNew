import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';

@Component({
  selector: 'app-hero-email',
  standalone: true,
  imports: [],
  templateUrl: './hero-email.component.html',
  styleUrl: './hero-email.component.scss'
})
export class HeroEmailComponent {
  lightmodus = inject(LightDarkService);
}
