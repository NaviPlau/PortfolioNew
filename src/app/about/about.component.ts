import { Component, computed, ElementRef, inject, Renderer2, viewChild, ViewChild } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';
import { LocationComponent } from "../shared/svg/location/location.component";
import { HeadComponent } from "../shared/svg/head/head.component";
import { CheckmarkComponent } from "../shared/svg/checkmark/checkmark.component";
import { VideoService } from '../shared/services/video-service/video.service';
import { TextAboutService } from '../shared/services/text-data/text-about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LocationComponent, HeadComponent, CheckmarkComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  lightmodus = inject(LightDarkService);
  videoService = inject(VideoService);
  text = inject(TextAboutService);
  renderer = inject(Renderer2);
  scrollService = inject(ScrollIntoService);
  
  @ViewChild('about', { static: true }) about!: ElementRef;
  @ViewChild('texts', { static: true }) texts!: ElementRef;

  ngAfterViewInit() {
    this.scrollService.observeElement(this.about, this.renderer, 'animate-fade-in');
    this.scrollService.observeElement(this.texts, this.renderer, 'animate-fade-from-right');
  }
  
  openVideo() {
    
  }
}
