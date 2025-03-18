import { computed, inject, Injectable, signal } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextSkillsService {
  lang = inject(LangService)
  showFrontendSkills = signal(true)
  

  singleSkill = computed(() => this.lang.language() === 'de' ? {
    textFrontend : [
      "Firebase ist mein erstes und weiterhin unverzichtbares Backend-Tool für Authentifizierung und Serverfunktionen in verschiedenen Projekten, darunter auch Angular-Anwendungen. Es ermöglicht mir, Datenbanken, Cloud Functions und Nutzerverwaltung effizient umzusetzen..",
      "Ich nutze Angular als mein bevorzugtes Frontend-Framework, weil es eine durchdachte Architektur, ein robustes CLI und hilfreiche Funktionen wie Signals bietet. Dadurch gestalte ich das State-Management effizient und kann Anwendungen sicher sowie skalierbar umsetzen..",
      "Ich arbeite aktiv mit Scrum-Prinzipien. Ich nehme an Daily Stand-ups, Sprint-Planungen, Reviews und Retrospektiven teil. Ich unterstütze den agilen Arbeitsprozess des Teams, reagiere flexibel auf Veränderungen und helfe dabei, kontinuierlich Ergebnisse zu liefern.",
      "Ich entwickle und arbeite mit REST-APIs. Ich achte auf klare Datenstrukturen, pflege Endpunkte und sorge für effiziente Kommunikation zwischen Frontend und Backend. Meine APIs sind einfach, zuverlässig und wartungsfreundlich.",
      "Ich nutze Git zur Versionskontrolle. Ich verwalte Repositories, dokumentiere Code-Änderungen und führe Merges durch. Mein Workflow ist klar, strukturiert und unterstützt eine effektive Zusammenarbeit im Team.",
      "Ich schreibe klaren und strukturierten HTML-Code. Ich nutze semantische Markups, achte auf gute Lesbarkeit und gewährleiste Barrierefreiheit.",
      "Ich arbeite mit JavaScript und entwickle dynamische und responsive Webanwendungen. Mein Code ist strukturiert, wartbar und ermöglicht reibungslose Nutzerinteraktionen.",
      "Ich gestalte Webanwendungen mit CSS und SCSS. Ich entwerfe intuitive Layouts, verwende Variablen effizient und sorge für einheitliche visuelle Erlebnisse.",
      "Ich arbeite mit TypeScript, um robuste und skalierbare Webanwendungen zu entwickeln. Ich verwende klare Typdefinitionen, finde Fehler frühzeitig und gestalte den Entwicklungsprozess dadurch reibungsloser und sicherer. Mein Code ist dadurch einfacher wartbar, übersichtlich und qualitativ hochwertiger.",
      "Ich baue moderne Web Apps mit Angular Material Design wenn es möglich und sinnvoll ist."
    ],
    textBackend : [
      "Ich entwickle aktiv Anwendungen mit Python. Mein Code ist klar, übersichtlich und wartungsfreundlich gestaltet.",
      "Ich entwickle APIs mit Django und Django REST Framework. Meine APIs sind übersichtlich strukturiert, wartungsfreundlich und einfach mit Frontends integrierbar.",
      "Ich nutze Linux regelmäßig für die Verwaltung und Bereitstellung von Anwendungen auf virtuellen Maschinen. Ich arbeite sicher und effizient über die Kommandozeile.",
      "Ich habe erste Erfahrungen mit PostgreSQL. Ich erstelle grundlegende Abfragen und setze strukturierte Datenbanken für Anwendungen auf.",
      "Ich habe erste Berührungspunkte mit Cloud-Technologien, insbesondere im Umgang mit virtuellen Maschinen. Ich bin vertraut mit grundlegenden Anwendungen und Deployments auf VMs.",
      "Ich verwende SQLite regelmäßig für schnelles Prototyping. Die einfache Struktur ermöglicht mir ein effizientes Testen und Validieren neuer Ideen.",
      "Ich habe erste Berührungspunkte mit Docker. Mir sind die grundlegenden Konzepte der Containerisierung bekannt.",
      "Ich konnte Redis bereits in ersten Projekten erfolgreich für Caching einsetzen. Die grundlegende Integration zur Leistungssteigerung ist mir bekannt.",
      "Ich habe Celery in einfachen Anwendungen zur Steuerung asynchroner Aufgaben genutzt. Die Einrichtung einfacher Task-Queues und deren Implementierung sind mir vertraut."
    ]
  } : {
    textFrontend : [
      "Firebase is my first and still indispensable backend tool for authentication and server-side functionalities across various projects, including Angular applications. It enables me to efficiently manage databases, Cloud Functions, and user administration.",
      "I use Angular as my preferred frontend framework due to its well-structured architecture, robust CLI, and features like Signals. This enables efficient state management and allows me to deliver secure, scalable applications.",
      "I work actively with Scrum principles. I join daily stand-ups, sprint planning, reviews, and retrospectives. I support the team’s agile workflow, respond flexibly to changes, and help deliver results consistently.",
      "I develop and work with REST APIs. I support clear data structures, maintain endpoints, and ensure efficient communication between frontend and backend. My APIs are simple, reliable, and easy to maintain..",
      "I use Git for version control. I manage repositories, track code changes, and handle merges. My workflow is clear, structured, and supports effective team collaboration.", 
      "I create clear and structured HTML code. I write semantic markup, keep it easy to read, and ensure good accessibility.",
      "I work with JavaScript to create dynamic and responsive web apps. My code is structured, maintainable, and supports smooth user interactions.",
      "Ich gestalte Webanwendungen mit CSS und SCSS. Ich entwerfe intuitive Layouts, verwende Variablen effizient und sorge für einheitliche visuelle Erlebnisse.",
      "I regularly work with TypeScript to build stable and scalable web applications. I define precise types and interfaces, ensuring code is robust and understandable. Using TypeScript helps me catch errors early, simplifies debugging, and makes the development process smoother and safer.", 
      "I build modern web apps using Angular Material Design when needed."
    ],
    textBackend : [
      "I actively develop applications using Python. My code is clear, structured, and easy to maintain.",
      "I develop APIs using Django and Django REST Framework. My APIs are clearly structured, maintainable, and easy to integrate with frontend applications.",
      "I regularly use Linux to manage and deploy applications on virtual machines. I'm proficient and efficient with the command line.",
      "I have initial experience with PostgreSQL. I can create basic queries and set up structured databases for applications.",
      "I have initial experience with cloud technologies, particularly in managing and deploying applications on virtual machines.",
      "I frequently use SQLite for rapid prototyping. Its simplicity helps me quickly test and validate new ideas.",
      "I have basic experience with Docker. I'm familiar with fundamental containerization concepts.",
      "I've successfully used Redis in initial projects for caching. I'm familiar with basic integration methods to enhance application performance.",
      "I've used Celery in simple applications to manage asynchronous tasks. I'm familiar with basic task queue setups and implementations."
    ]
  })

  constructor() { }

    skillsText = computed(() => {
      const language = this.lang.language();
      return (language === 'de' ? {
        title: "Meine Skills",
        buttonText :  computed(() => `Wechseln auf ${this.showFrontendSkills() ? 'Backend' : 'Frontend'}` ),
        clickText: 'Clicken sie auf einer Würfel, um mehr zu erfahren.'
      } : {
        title: "My Skills",
        buttonText :  computed(() => `Switch to ${this.showFrontendSkills() ? 'Backend' : 'Frontend'}` ),
        clickText: 'Click on a cube to learn more.'
      });
    });
}
