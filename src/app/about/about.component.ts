import { Component, computed, ElementRef, inject, Renderer2, viewChild, ViewChild } from '@angular/core';
import { LangService } from '../shared/services/language/lang.service';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';
import { LocationComponent } from "../shared/svg/location/location.component";
import { HeadComponent } from "../shared/svg/head/head.component";
import { CheckmarkComponent } from "../shared/svg/checkmark/checkmark.component";
import { VideoComponent } from "./videoplayer/video/video.component";
import { VideoService } from '../shared/services/video-service/video.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LocationComponent, HeadComponent, CheckmarkComponent, VideoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  lang = inject(LangService);
  lightmodus = inject(LightDarkService);
  videoService = inject(VideoService);
  renderer = inject(Renderer2);
  scrollService = inject(ScrollIntoService);
  buttonText = computed(() => this.lang.language() === 'de' ? 'Video über mich' : 'About me video');
  @ViewChild('about', { static: true }) about!: ElementRef;
  @ViewChild('text', { static: true }) text!: ElementRef;
  
  aboutSection = computed(() => ( this.lang.language() === 'de' ? {
    subtitle: "Wer ich bin",
    title: "Über mich",
    paragraphs: {
      about: "Hallo, ich bin Paul Ivan. Ich bin ein Fullstack Entwickler mit Sitz in Madaras, Ungarn. ",
      location: "Aufgrund meines Standorts arbeite ich remote, aber ich nutze aktiv Online-Plattformen, um informiert zu bleiben, effizient zusammenzuarbeiten und den Erfolg des Teams mitzugestalten.",
      challenge: "Ich betrachte jede Herausforderung als eine Chance zu lernen und arbeite gewissenhaft daran, mein technisches Wissen und meine Flexibilität in der IT-Umgebung zu verbessern.",
      checkmark: "Ich genieße es, komplexe Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln, um Ihnen zu helfen, Ihre Ziele zu erreichen."
    }
  } : {
    subtitle: "Who I am",
    title: "About me",
    paragraphs: {
      about: "Hi, I'm Paul Ivan. I'm a Fullstack Developer based in Madaras, Hungary. ",
      location: "Due to my location, I work remotely, but I actively use online platforms to stay informed, collaborate efficiently, and help shape the success of the team.",
      challenge: "I view each challenge as an opportunity to learn and work diligently to improve my technical knowledge and flexibility in the IT environment.",
      checkmark: "I enjoy turning complex challenges into easy, user-friendly solutions to help you achieve your goals."
    }
  }))

  ngAfterViewInit() {
    this.scrollService.observeElement(this.about, this.renderer, 'animate-fade-in');
    this.scrollService.observeElement(this.text, this.renderer, 'animate-fade-from-right');
  }

  openVideo() {
    
  }
}
