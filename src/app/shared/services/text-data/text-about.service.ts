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
      about: "Hallo, ich bin Paul Ivan. Ich bin ein Fullstack Entwickler mit Sitz in Madaras, Ungarn. ",
      location: "Aufgrund meines Standorts arbeite ich remote, aber ich nutze aktiv Online-Plattformen, um informiert zu bleiben, effizient zusammenzuarbeiten und den Erfolg des Teams mitzugestalten.",
      challenge: "Ich betrachte jede Herausforderung als eine Chance zu lernen und arbeite gewissenhaft daran, mein technisches Wissen und meine Flexibilität in der IT-Umgebung zu verbessern.",
      checkmark: "Ich genieße es, komplexe Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln, um Ihnen zu helfen, Ihre Ziele zu erreichen."
    }
  } : {
    title: "About me",
    paragraphs: {
      about: "Hi, I'm Paul Ivan. I'm a Fullstack Developer based in Madaras, Hungary. ",
      location: "Due to my location, I work remotely, but I actively use online platforms to stay informed, collaborate efficiently, and help shape the success of the team.",
      challenge: "I view each challenge as an opportunity to learn and work diligently to improve my technical knowledge and flexibility in the IT environment.",
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
