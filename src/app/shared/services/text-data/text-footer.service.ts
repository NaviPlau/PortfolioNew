import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextFooterService {

  constructor() { }
  lang = inject(LangService)

  footerText = computed(() =>(this.lang.language() === 'de' ? {
    name : "Paul Ivan",
    job : "Fullstack Entwickler",
    location : {
      title: "Langenstein Österreich",
      map: "https://g.co/kgs/3xQqbVg"
    },
    copyright : "© 2025 Paul Ivan",
    links : {
      github : {
        title : "Github",
        link : "https://github.com/NaviPlau"
      },
      linkedin : {
        title : "Linkedin",
        link : "https://www.linkedin.com/in/paul-ivan-a87585328/"
      },
      contact : {
        title: "E-mail",
        email : "contact@paul-ivan.com",
      },
      inprint : {
        title : "Impressum",
        route : "impressum"
      }
    }
  } : {
    name : "Paul Ivan",
    job : "Fullstack Developer",
    location : {
      title: "Langenstein Austria",
      map: "https://g.co/kgs/3xQqbVg"
    },
    copyright : "© 2025 Paul Ivan",
    links : {
      github : {
        title : "Github",
        link : "https://github.com/NaviPlau"
      },
      linkedin : {
        title : "Linkedin",
        link : "https://www.linkedin.com/in/paul-ivan-a87585328/"
      },
      contact : {
        title: "Email",
        email : "contact@paul-ivan.com",
      },
      inprint : {
        title : "Legal Notice",
        route : "/legal-notice"
      }
    }
  }))
}
