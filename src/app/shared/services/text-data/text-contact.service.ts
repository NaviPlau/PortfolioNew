import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextContactService {
  lang = inject(LangService)
  constructor() { }

  title = computed(() =>(this.lang.language() === 'de' ? "Kontakt" : "Contact"))
  subtitle = computed(() =>(this.lang.language() === 'de' ? "Lass uns heute starten" : "Let's get started today"))
  description = computed(() =>(this.lang.language() === 'de' ? "Kontaktieren Sie mich über dieses Formular, um meine Fähigkeiten in Ihre Projekte zu integrieren." : "Contact me using this form to integrate my skills into your projects."))

  formText = computed(() =>(this.lang.language() === 'de' ? {
    firstname: "Nachtname",
    lastname: "Vorname",
    email: "Dein E-Mail",
    message : "Dein nachricht",
    checkbox: "Ich akzeptiere die Datenschutzerklaerung",
    errors : {
      firstname : {
        required: "Bitte geben Sie Ihren Vornamen an.",
        minlength: "Bitte geben Sie mindestens 2 Zeichen an."
      },
      lastname : {
        required: "Bitte geben Sie Ihren Nachnamen an.",
        minlength: "Bitte geben Sie mindestens 2 Zeichen an."
      },
      email : {
        required: "Bitte geben Sie Ihre E-Mail Adresse an.",
        email: "Bitte geben Sie eine gueltige E-Mail Adresse an."
      },
      message : {
        required: "Bitte geben Sie Ihre Nachricht an.",
        minlength: "Bitte geben Sie mindestens 10 Zeichen an."
      },
      checkbox : {
        required: "Bitte akzeptieren Sie die Datenschutzerklaerung."
      }
    }
  } : {
    firstname: "First name",
    lastname: "Last name",
    email: "Your email",
    message : "Your message",
    checkbox: "I accept the privacy policy",
    errors : {
      firstname : {
        required: "Please enter your first name.",
        minlength: "Please enter at least 2 characters."
      },
      lastname : {
        required: "Please enter your last name.",
        minlength: "Please enter at least 2 characters."
      },
      email : {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
      },
      message : {
        required: "Please enter your message.",
        minlength: "Please enter at least 10 characters."
      },
      checkbox : {
        required: "Please accept the privacy policy."
      }
    }
  }))
}
