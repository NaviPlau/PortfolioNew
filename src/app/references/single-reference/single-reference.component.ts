import { Component, inject, Input } from '@angular/core';
import { LightDarkService } from '../../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { TextReferencesService } from '../../shared/services/text-data/text-references.service';

@Component({
  selector: 'app-single-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-reference.component.html',
  styleUrl: './single-reference.component.scss'
})
export class SingleReferenceComponent {
  @Input () reference: any
  lightmodus = inject(LightDarkService)
  text = inject(TextReferencesService)
}
