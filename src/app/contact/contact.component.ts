import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { CommonModule } from '@angular/common';
import { TextContactService } from '../shared/services/text-data/text-contact.service';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  lightmodus = inject(LightDarkService);
  text = inject(TextContactService);
  renderer = inject(Renderer2);
  scrollService = inject(ScrollIntoService);
  @ViewChild('contactTitle', { static: true }) contactTitle!: ElementRef

  contactForm!: any;
  fb = inject(FormBuilder);
  

  constructor() { 
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
      privacyPolicy: [false, Validators.requiredTrue]
    });
    
  }
  
  
 get name () { return this.contactForm.get('name'); }
 get email () { return this.contactForm.get('email'); }
 get message () { return this.contactForm.get('message'); }
 get privacyPolicy () { return this.contactForm.get('privacyPolicy'); }

  ngAfterViewInit() {
    this.scrollService.observeElement(this.contactTitle, this.renderer, 'animated-title');
  }

  submit(){
    console.log('submit');
    
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
