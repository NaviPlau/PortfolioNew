import { AfterViewInit, Component, computed, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { LightDarkService } from '../../../shared/services/lightmodus/light-dark.service';
import { LangService } from '../../../shared/services/language/lang.service';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../shared/directives/click-outside.directive';
import { VideoService } from '../../../shared/services/video-service/video.service';
import { TextAboutService } from '../../../shared/services/text-data/text-about.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements AfterViewInit, OnInit {
  lightmodus = inject(LightDarkService)
  text = inject(TextAboutService)
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
