import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { TextPrivacyService } from '../shared/services/text-data/text-privacy.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  lightmodus = inject(LightDarkService);
  text = inject(TextPrivacyService);

}
