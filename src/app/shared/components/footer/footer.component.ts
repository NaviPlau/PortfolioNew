import { Component, inject } from '@angular/core';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { TextFooterService } from '../../services/text-data/text-footer.service';
import { RouterLink } from '@angular/router';
import { NavigatorService } from '../../services/navigation/navigator.service';
import { ScrollIntoService } from '../../services/scroll-view/scroll-into.service';


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
  navigator = inject(NavigatorService);
  scrollService = inject(ScrollIntoService);
}
