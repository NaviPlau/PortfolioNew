import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {
  lightmodus = inject(LightDarkService)
}
