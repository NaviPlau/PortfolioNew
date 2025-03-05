import { computed, inject, Injectable, signal } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }

  lang = inject(LangService)
  
 
  //TODO: write better text based on my journey 





}
