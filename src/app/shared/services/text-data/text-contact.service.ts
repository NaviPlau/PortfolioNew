import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextContactService {
  lang = inject(LangService)
  constructor() { }
  policy = computed(() =>(this.lang.language() === 'de' ? "Datenschutzerklaerung! " : "Privacy Policy!"));
  textLength = computed(() =>(this.lang.language() === 'de' ? "Zeichen übrig" : "Characters left"));
  title = computed(() =>(this.lang.language() === 'de' ? "Kontakt" : "Contact"))
  subtitle = computed(() =>(this.lang.language() === 'de' ? "Lass uns heute starten" : "Let's get started today"))
  description = computed(() =>(this.lang.language() === 'de' ? "Kontaktieren Sie mich über dieses Formular, um meine Fähigkeiten in Ihre Projekte zu integrieren." : "Contact me using this form to integrate my skills into your projects."))
  buttonText = computed(() =>(this.lang.language() === 'de' ? "Senden" : "Send"))
  formText = computed(() =>(this.lang.language() === 'de' ? {
    name: "Dein Name",
    email: "Dein E-Mail",
    message : "Dein nachricht",
    checkbox: "Ich akzeptiere die ",
    success: {title: "Erfolgreich gesendet", message: "Dein Nachricht wurde erfolgreich gesendet."},
    errors : {
      name : {
        required: "Bitte geben Sie Ihren Namen ein.",
        minlength: "Bitte geben Sie mindestens 2 Zeichen an."
      },
      email : {
        required: "Bitte geben Sie Ihre E-Mail Adresse an.",
        pattern: "Bitte geben Sie eine gueltige E-Mail Adresse an."
      },
      message : {
        required: "Bitte geben Sie Ihre Nachricht an.",
        minlength: "Bitte geben Sie mindestens 10 Zeichen an.",
        maxlength: "Bitte geben Sie maximal 1000 Zeichen an."
      },
      checkbox : {
        required: "Bitte akzeptieren Sie die Datenschutzerklärung."
      }
    }
  } : {
    name: "Your name",
    email: "Your email",
    message : "Your message",
    checkbox: "I accept the ",
    success: {title: "Successfully sent", message: "Your message was successfully sent."},
    errors : {
      name : {
        required: "Please enter your name.",
        minlength: "Please enter at least 2 characters."
      },
      email : {
        required: "Please enter your email address.",
        pattern: "Please enter a valid email address."
      },
      message : {
        required: "Please enter your message.",
        minlength: "Please enter at least 10 characters.",
        maxlength: "Please enter a maximum of 1000 characters."
      },
      checkbox : {
        required: "Please accept the privacy policy."
      }
    }
  }))
}
