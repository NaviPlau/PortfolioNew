import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { TextFooterService } from '../../services/text-data/text-footer.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  lightmodus = inject(LightDarkService);
  text = inject(TextFooterService);
}
