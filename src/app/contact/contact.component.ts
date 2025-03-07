import { Component, inject } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  lightmodus = inject(LightDarkService);
}
