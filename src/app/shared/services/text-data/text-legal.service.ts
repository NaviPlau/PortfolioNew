import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';


@Injectable({
  providedIn: 'root'
})
export class TextLegalService {

  lang = inject(LangService)
  constructor() { }

  inprintText = computed(() =>(this.lang.language() === 'de' ? {
    title : "Impressum",
    info : "Angaben gemäß § 5 TMG (Deutschland) bzw. § 14 UGB (Österreich) und Art. 3 Abs. 1 lit. s. UWG (Schweiz):",
    personal : {
      name : "Paul Ivan",
      adress : "Hauptstraße 30",
      city : "4222 Langenstein",
      country : "Österreich"
    },
    contact: {
      title : "Kontakt",
      email : "contact@paul-ivan.com",
    },
    contentLiability : {
      title :"Haftung für Inhalte:",
      description: "Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG (Deutschland) / Art. 2 UWG (Schweiz) für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG (Deutschland) bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
    },
    linkLiability : {
      title :"Haftung für Links:",
      description: "Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
    },
    copyright : {
      title :"Urheberrecht:",
      description: "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet."
    }
  } : {
    title : "Legal Notice",
    info : "Information according to § 5 TMG (Germany) or § 14 UGB (Austria) and Art. 3 Abs. 1 lit. s. UWG (Switzerland):",
    personal : {
      name : "Paul Ivan",
      adress : "Hauptstraße 30",
      city : "4222 Langenstein",
      country : "Austria"
    },
    contact: {
      title : "Contact",
      email : "contact@paul-ivan.com",
    },
    contentLiability : {
      title :"Content Liability:",
      description : "As a service provider, I am responsible for my own content on these pages according to § 7 Abs.1 TMG (Germany) / Art. 2 UWG (Switzerland) according to the general laws. However, according to §§ 8 to 10 TMG (Germany), I am not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.",
    },
    linkLiability : {
      title :"Link Liability:",
      description : "My offer contains links to external websites of third parties, on whose contents I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages.",
    },
    copyright : {
      title :"Copyright:",
      description : "The contents and works created on these pages by the page provider are subject to copyright. Contributions by others are marked as such."
    }
  }))
}
