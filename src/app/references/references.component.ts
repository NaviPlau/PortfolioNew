import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { LightDarkService } from '../shared/services/lightmodus/light-dark.service';
import { TextReferencesService } from '../shared/services/text-data/text-references.service';
import { SingleReferenceComponent } from "./single-reference/single-reference.component";
import { HorizontalDirectivesDirective } from '../shared/directives/horizontal-directives.directive';
import { ScrollIntoService } from '../shared/services/scroll-view/scroll-into.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, SingleReferenceComponent, HorizontalDirectivesDirective],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  lightmodus = inject(LightDarkService)
  text = inject(TextReferencesService)
  scrollService = inject(ScrollIntoService)
  renderer = inject(Renderer2)
  @ViewChild('singleReference', { static: true }) singleReference!: ElementRef
  @ViewChild('referencesTitle', { static: true }) referencesTitle!: ElementRef

  ngAfterViewInit(): void {
    this.scrollService.observeElement(this.singleReference, this.renderer, 'animate-rotate-bottom');
    this.scrollService.observeElement(this.referencesTitle, this.renderer, 'animation-title');
  }

}
