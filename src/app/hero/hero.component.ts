import { Component, computed, inject, signal } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { LangService } from '../shared/services/language/lang.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  lightmodus = inject(LightDarkService)
  lang = inject(LangService)

  title = signal("Hi, I'm Paul Ivan");
  subtitle = signal("Fullstack Developer");

  titleChars = computed(() => [...this.title()]);
  subtitleChars = computed(() => [...this.subtitle()]);
}
