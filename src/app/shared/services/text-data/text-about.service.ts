import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextAboutService {
  lang = inject(LangService)
  constructor() { }

  buttonText = computed(() => this.lang.language() === 'de' ? 'Video über mich' : 'About me video');

  aboutSection = computed(() => ( this.lang.language() === 'de' ? {
    title: "Über mich",
    paragraphs: {
      about: "Hallo, ich bin Paul Ivan. Ich bin ein Fullstack Entwickler mit Sitz in Langenstein, Osterreich.",
      location: "Ich stehe ausschließlich für Remote-Arbeitsmöglichkeiten zur Verfügung. Derzeit befinde ich mich in Österreich und werde meine Remote-Tätigkeit in naher Zukunft von Ungarn aus fortsetzen. Mein Standortwechsel beeinflusst weder meine Verfügbarkeit noch meine Produktivität oder die Zusammenarbeit mit dem Team.",
      challenge: "Meine schnelle Auffassungsgabe und gute Merkfähigkeit helfen mir, neue Inhalte extrem schnell zu erfassen und gezielt in meine Projekte einzubringen.",
      checkmark: "Ich genieße es, komplexe Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln, um Ihnen zu helfen, Ihre Ziele zu erreichen."
    }
  } : {
    title: "About me",
    paragraphs: {
      about: "Hi, I'm Paul Ivan. I'm a Fullstack Developer based in Langenstein, upper Austria. ",
      location: "I am available exclusively for remote employment opportunities. Currently based in Austria, I will be continuing my remote work from Hungary in the near future. My location shift will not affect my availability, productivity, or collaboration with teams.",
      challenge: "My quick comprehension and strong memory help me grasp new concepts very swiftly and apply them effectively in my projects.",
      checkmark: "I enjoy turning complex challenges into easy, user-friendly solutions to help you achieve your goals."
    }
  }))


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
}
