import { Component, inject } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { TextLegalService } from '../shared/services/text-data/text-legal.service';
import { NavigatorService } from '../shared/services/navigation/navigator.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  text = inject(TextLegalService);
  lightmodus = inject(LightDarkService);
  navigator = inject(NavigatorService);
}
