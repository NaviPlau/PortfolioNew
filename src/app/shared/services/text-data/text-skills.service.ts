import { computed, inject, Injectable, signal } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextSkillsService {

  lang = inject(LangService)
  showFrontendSkills = signal(true)

  constructor() { }

    skillsText = computed(() => {
      const language = this.lang.language();
      return (language === 'de' ? {
        title: "Meine Skills",
        buttonText :  computed(() => `Wechseln auf ${this.showFrontendSkills() ? 'Backend' : 'Frontend'}` ),
        cubeText: computed(() => this.showFrontendSkills() ? [
          "Firebase war ein unverzichtbares Werkzeug für Authentifizierung und Backend-Dienste in meinen Angular-Projekten.",
          "Angular wurde schnell mein Lieblings-Framework aufgrund seiner Struktur und leistungsstarken Funktionen wie Signals.",
          "Die Scrum-Methodik half mir, agiles Projektmanagement und effiziente Teamarbeit zu verstehen.",
          "Die Integration von REST-APIs war ein zentraler Bestandteil meiner Projekte, um eine nahtlose Backend-Kommunikation zu gewährleisten.",
          "Versionskontrolle mit Git wurde zur zweiten Natur, als ich an verschiedenen Projekten und in Teams arbeitete.",
          "HTML war mein erster Schritt in die Webentwicklung und legte das Fundament für alles Weitere.",
          "JavaScript öffnete die Tür zur Interaktivität, und das Erlernen seiner Besonderheiten war eine interessante Herausforderung.",
          "CSS und SCSS machen Frontend-Styling zu einem Vergnügen, und ich genieße es, schöne und responsive UIs zu gestalten.",
          "TypeScript verbesserte meine Programmiererfahrung in Angular durch strenge Typisierung und eine bessere Code-Wartbarkeit.",
          "Material Design hat mir geholfen, mühelos saubere und barrierefreie UI-Komponenten zu erstellen."
        ] : [
          "Python war mein erste Einstieg in die Programmiersprache und erlaubte mir, komplexe Probleme zu lösen und effiziente Lösungen zu finden.",
          "Django war meine erste Erfahrung mit einem Webframework und erlaubte mir, komplexe Anwendungen zu entwickeln.",
          "Linux war meine erste Erfahrung mit einem Betriebssystem und erlaubte mir, komplexe Anwendungen zu entwickeln.",
          "PostgreSQL war meine erste Erfahrung mit einer Datenbank und erlaubte mir, komplexe Anwendungen zu entwickeln.",
          "Cloud war meine erste Erfahrung mit einer Cloud-Plattform und erlaubte mir, komplexe Anwendungen zu entwickeln.",
          "SQLite war meine erste Erfahrung mit einer Datenbank und erlaubte mir, komplexe Anwendungen zu entwickeln.",
          "Docker war meine erste Erfahrung mit einer Container-Plattform und erlaubte mir, komplexe Anwendungen zu entwickeln.",
          "Redis war meine erste Erfahrung mit einer Datenbank und erlaubte mir, komplexe Anwendungen zu entwickeln.",
          "Celery war meine erste Erfahrung mit einer Asynchronität-Plattform und erlaubte mir, komplexe Anwendungen zu entwickeln."
        ]),
        clickText: 'Clicken sie auf einer Würfel, um mehr zu erfahren.'
      } : {
        title: "My Skills",
        buttonText :  computed(() => `Switch to ${this.showFrontendSkills() ? 'Backend' : 'Frontend'}` ),
        cubeText: computed(() => this.showFrontendSkills() ? [
          "Firebase was an indispensable tool for authentication and backend services in my Angular projects.",
          "Angular was quickly my favorite framework due to its structure and powerful features like Signals.",
          "Scrum helped me understand agile project management and efficient teamwork.",
          "REST API integration was a central part of my projects, ensuring seamless backend communication.",
          "Version control with Git was second nature as I worked on different projects and in teams.", 
          "HTML was my first step into web development, and it laid the foundation for everything else.",
          "JavaScript opened the door to interactivity, and learning its nuances was an interesting challenge.",
          "CSS and SCSS make frontend styling enjoyable, and I enjoy creating beautiful and responsive UIs.",
          "TypeScript improved my Angular programming experience through strict typing and better code maintainability.", 
          "Material Design helped me create clean and accessible UI components easily."
        ] : [
          "Python was my first introduction to the programming language and allowed me to solve complex problems and find efficient solutions.",
          "Django was my first experience with a web framework and allowed me to develop complex applications.",
          "Linux was my first experience with an operating system and allowed me to develop complex applications.",
          "PostgreSQL was my first experience with a database and allowed me to develop complex applications.",
          "Cloud was my first experience with a cloud platform and allowed me to develop complex applications.",
          "SQLite was my first experience with a database and allowed me to develop complex applications.",
          "Docker was my first experience with a container platform and allowed me to develop complex applications.",
          "Redis was my first experience with a database and allowed me to develop complex applications.",
          "Celery was my first experience with an asynchronous platform and allowed me to develop complex applications."
        ]),
        clickText: 'Click on a cube to learn more.'
      });
    });
}
