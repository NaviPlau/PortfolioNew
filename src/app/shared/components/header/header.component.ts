import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeroGithubComponent } from "../../svg/hero-github/hero-github.component";
import { HeroEmailComponent } from "../../svg/hero-email/hero-email.component";
import { HeroLinkedComponent } from "../../svg/hero-linked/hero-linked.component";
import { MatIcon } from '@angular/material/icon';
import { LightDarkService } from '../../services/lightmodus/light-dark.service';
import { LgButtonComponent } from "../language-button/lg-button/lg-button.component";
import { MatTooltipModule } from '@angular/material/tooltip';
import { LangService } from '../../services/language/lang.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HeroGithubComponent, HeroEmailComponent, HeroLinkedComponent, MatIcon, LgButtonComponent, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
  
export class HeaderComponent {
  lightmodus = inject(LightDarkService)
  lang = inject(LangService)
  
}




