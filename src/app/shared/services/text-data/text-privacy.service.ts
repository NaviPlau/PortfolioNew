import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextPrivacyService {
  lang = inject(LangService)
  constructor() { }


  privacyText = computed(() => (this.lang.language() === 'de' ? {
    title: "Datenschutzerklärung",
    personal: {
      title: "1. Verantwortlicher für die Datenverarbeitung",
      name: "Paul Ivan",
      adress: "Hauptstraße 30",
      city: "4222 Langenstein",
      country: "Österreich",
      email: "contact@paul-ivan.com",
    },
    use: {
      title: "2. Erfassung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung",
      visit: {
        title: "a) Beim Besuch der Website",
        subtitle: "Beim Aufrufen unserer Website werden durch den Browser, den Sie verwenden, automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:",
        list: [
          "IP-Adresse des anfragenden Rechners",
          "Datum und Uhrzeit des Zugriffs",
          "Name und URL der abgerufenen Datei",
          "Website, von der aus der Zugriff erfolgt (Referrer-URL)",
          "Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners",
          "Name Ihres Access-Providers"
        ],
        subtitle2: "Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:",
        list2: [
          "Gewährleistung eines reibungslosen Verbindungsaufbaus der Website",
          "Gewährleistung einer komfortablen Nutzung unserer Website",
          "Auswertung der Systemsicherheit und -stabilität",
          "Zu weiteren administrativen Zwecken",
        ],
        subtitle3: "Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.",
      },
      contactForm: {
        title: "b) Bei Nutzung unseres Kontaktformulars",
        subtitle: "Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden."
      }
    },
    disclosure: {
      title: "3. Weitergabe von Daten",
      subtitle: "Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt:",
      list: [
        "Sie Ihre ausdrückliche Einwilligung dazu erteilt haben",
        "Die Weitergabe zur Geltendmachung von Rechtsansprüchen erforderlich ist",
        "Eine gesetzliche Verpflichtung besteht",
        "Die Weitergabe für die Vertragsabwicklung erforderlich ist",
      ]
    },
    rights: {
      title: "4. Betroffenenrechte",
      subtitle: "Sie haben als Betroffener folgende Rechte gemäß DSGVO:",
      list: [
        "Recht auf Auskunft (Art. 15 DSGVO)",
        "Recht auf Berichtigung (Art. 16 DSGVO)",
        "Recht auf Löschung (Art. 17 DSGVO)",
        "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
        "Recht auf Beschwerde (Art. 21 DSGVO)",
      ]
    }

  } : {
    title: 'Privacy Policy',
    personal: {
      title: '1. Responsible Party for Data Processing',
      name: 'Paul Ivan',
      adress: 'Hauptstraße 30',
      city: '4222 Langenstein',
      country: 'Austria',
      email: 'contact@paul-ivan.com',
    },
    use: {
      title: '2. Collection and Storage of Personal Data and the Type and Purpose of Their Use',
      visit: {
        title: 'a) When Visiting the Website',
        subtitle: 'When accessing our website, the browser you use automatically sends information to the server of our website. This information is temporarily stored in a so-called log file. The following information is collected without your intervention and stored until automated deletion:',
        list: [
          'IP address of the requesting computer',
          'Date and time of access',
          'Name and URL of the retrieved file',
          'Website from which access is made (Referrer URL)',
          'Browser used and, if applicable, the operating system of your computer',
          'Name of your access provider'
        ],
        subtitle2: 'The data mentioned is processed by us for the following purposes:',
        list2: [
          'Ensuring a smooth connection to the website',
          'Ensuring a comfortable use of our website',
          'Evaluation of system security and stability',
          'For further administrative purposes',
        ],
        subtitle3: 'The legal basis for data processing is Art. 6 para. 1 sentence 1 lit. f GDPR. Our legitimate interest follows from the purposes listed above for data collection. Under no circumstances do we use the collected data to draw conclusions about you personally.',
      },
      contactForm: {
        title: 'b) When Using Our Contact Form',
        subtitle: 'For any questions, we offer you the opportunity to contact us via a form provided on the website. Providing a valid email address is required so that we know who the request is from and to respond accordingly. Additional information can be provided voluntarily.'
      }
    },
    disclosure: {
      title: '3. Disclosure of Data',
      subtitle: 'Your personal data will not be transferred to third parties for purposes other than those listed below:',
      list: [
        'You have given your explicit consent',
        'The disclosure is necessary for asserting legal claims',
        'A legal obligation exists',
        'The disclosure is necessary for contract processing',
      ]
    },
    rights: {
      title: '4. Rights of the Data Subject',
      subtitle: 'As a data subject, you have the following rights under the GDPR:',
      list: [
        'Right to access (Art. 15 GDPR)',
        'Right to rectification (Art. 16 GDPR)',
        'Right to erasure (Art. 17 GDPR)',
        'Right to restriction of processing (Art. 18 GDPR)',
        'Right to data portability (Art. 20 GDPR)',
        'Right to object (Art. 21 GDPR)',
      ]
    }
  }))
}
