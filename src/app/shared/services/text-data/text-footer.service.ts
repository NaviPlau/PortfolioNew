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
      title: "Linz Österreich",
      map: "https://www.google.com/search?q=linz&oq=linz&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgcIAhAuGIAEMg0IAxAuGMcBGNEDGIAEMgYIBBBFGDwyBggFEEUYQTIGCAYQRRg8MgYIBxBFGDzSAQc5NjlqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
    },
    copyright : "© 2023 Paul Ivan",
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
        route : "/impressum"
      }
    }
  } : {
    name : "Paul Ivan",
    job : "Fullstack Developer",
    location : {
      title: "Linz Austria",
      map: "https://www.google.com/search?q=linz&oq=linz&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgcIAhAuGIAEMg0IAxAuGMcBGNEDGIAEMgYIBBBFGDwyBggFEEUYQTIGCAYQRRg8MgYIBxBFGDzSAQc5NjlqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
    },
    copyright : "© 2023 Paul Ivan",
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
