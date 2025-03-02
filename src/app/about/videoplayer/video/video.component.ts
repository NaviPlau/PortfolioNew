import { AfterViewInit, Component, computed, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { LightDarkService } from '../../../shared/services/lightmodus/light-dark.service';
import { LangService } from '../../../shared/services/language/lang.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { VideoService } from '../../../shared/services/video-service/video.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements AfterViewInit, OnInit {
  lightmodus = inject(LightDarkService)
  lang = inject(LangService)
  videoService = inject(VideoService)
  overlayOpen = signal(true)
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>

  eventActions: Record<string, boolean> = {
    'pause': true,
    'ended': true,
    'play': false,
    'seeked': false,
    'seeking': false
  };

  ngOnInit() {
    document.body.classList.add('noScroll')
  }

  ngAfterViewInit() {
    if (this.video && this.video.nativeElement) {
      const videoElement = this.video.nativeElement;
      Object.keys(this.eventActions).forEach(event => {
        videoElement.addEventListener(event, () => {
          this.overlayOpen.set(this.eventActions[event]);
        });
      });
    } else {
      console.error("Video element is not yet initialized.");
    }
  }

  videoData = computed(() => this.lang.language() === 'de' ? 'assets/videos/paul.mp4' : 'assets/videos/paul-en.mp4')
  videoInfo = computed(() => this.lang.language() === 'de' ? {
    title: "Das bin ich",
    subtitle: "Paul Ivan",
    description: "Hier können sie mich besser  kennenlernen und ein rundgang ein Paar meiner Projekte",
    controls: ['Abspielen', 'Schließen']
  } : {
    title: "Meet me",
    subtitle: "Paul Ivan",
    description: "Here you get a peek at who i am and a few of my projects",
    controls: ['Play', 'Close']
  }
  )


  closeVideo = () => {
    this.videoService.videoOpen.set(false);
    document.body.classList.remove('noScroll')
  };

  playVideo() {
    if (this.video && this.video.nativeElement) {
      this.video.nativeElement.play();
      this.overlayOpen.set(false);
    } else {
      console.error("Video element is not yet initialized.");
    }
  }

}
