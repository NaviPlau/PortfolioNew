import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { TextContactService } from '../shared/services/text-data/text-contact.service';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';
import { FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  lightmodus = inject(LightDarkService);
  text = inject(TextContactService);
  renderer = inject(Renderer2);
  scrollService = inject(ScrollIntoService);
  @ViewChild('contactTitle', { static: true }) contactTitle!: ElementRef

  contactForm = new FormBuilder().group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
  

  ngAfterViewInit() {
    this.scrollService.observeElement(this.contactTitle, this.renderer, 'animated-title');
  }
}
