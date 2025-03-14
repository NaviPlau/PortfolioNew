import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { BurgerMenuComponent } from "./shared/components/burger-menu/burger-menu.component";
import { Platform } from '@angular/cdk/platform';
import { FooterComponent } from "./shared/components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BurgerMenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'portfolio';
  isMobile: boolean;

  constructor(private platform: Platform) {
    this.isMobile = this.platform.ANDROID || this.platform.IOS;
    if (this.isMobile) {
      document.documentElement.classList.add('disable-tooltips');
    }

    
  }
}
