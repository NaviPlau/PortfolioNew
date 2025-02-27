import { Component, inject } from '@angular/core';
import { LangService } from '../../../services/language/lang.service';
import { LightDarkService } from '../../../services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lg-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lg-button.component.html',
  styleUrl: './lg-button.component.scss'
})
export class LgButtonComponent {
  lang = inject(LangService);
  lightmodus = inject(LightDarkService);

  get language() { return this.lang.language(); }
}
