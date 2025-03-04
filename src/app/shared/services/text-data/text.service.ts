import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor() { }
 
  //TODO: write better text based on my journey 

  skillTextDeFront =signal([
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
  ])
  
  skillTextEnFront = signal([   "Firebase has been an essential tool for authentication and backend services in my Angular projects.",
      "Angular quickly became my favorite framework due to its structure and powerful features like Signals.",
      "Scrum methodology helped me understand agile project management and teamwork efficiency.",
      "REST API integration has been a key aspect of my projects, ensuring seamless backend communication.",
      "Version control with Git became second nature as I worked on various projects and team collaborations.",
      "HTML was my first step into web development, setting the foundation for everything else.",
      "JavaScript unlocked the world of interactivity, and learning its quirks has been an interesting challenge.",
      "CSS and SCSS make frontend styling fun, and I enjoy crafting beautiful, responsive UIs.",
      "TypeScript improved my coding experience in Angular with its strict typing and better code maintainability.",
      "Material Design has helped me create clean and accessible UI components effortlessly."
  ])


  skillTextDeBackend = signal([
    "Python war mein erste Einstieg in die Programmiersprache und erlaubte mir, komplexe Probleme zu lösen und effiziente Lösungen zu finden.",
    "Django war meine erste Erfahrung mit einem Webframework und erlaubte mir, komplexe Anwendungen zu entwickeln.",
    "Linux war meine erste Erfahrung mit einem Betriebssystem und erlaubte mir, komplexe Anwendungen zu entwickeln.",
    "PostgreSQL war meine erste Erfahrung mit einer Datenbank und erlaubte mir, komplexe Anwendungen zu entwickeln.",
    "Cloud war meine erste Erfahrung mit einer Cloud-Plattform und erlaubte mir, komplexe Anwendungen zu entwickeln.",
    "SQLite war meine erste Erfahrung mit einer Datenbank und erlaubte mir, komplexe Anwendungen zu entwickeln.",
    "Docker war meine erste Erfahrung mit einer Container-Plattform und erlaubte mir, komplexe Anwendungen zu entwickeln.",
    "Redis war meine erste Erfahrung mit einer Datenbank und erlaubte mir, komplexe Anwendungen zu entwickeln.",
    "Celery war meine erste Erfahrung mit einer Asynchronität-Plattform und erlaubte mir, komplexe Anwendungen zu entwickeln."
  ])

  skillTextEnBackend = signal([
    "Python was my gateway into backend development, and I love its readability and versatility.",
    "Django provided a structured approach to building scalable web applications efficiently.",
    "Linux is my preferred environment for development, offering stability and flexibility.",
    "PostgreSQL is my go-to database, balancing performance with powerful features.",
    "Cloud computing allows me to deploy scalable applications while managing resources effectively.",
    "SQL has been fundamental in structuring and querying data efficiently.",
    "Docker helps me containerize applications for consistent deployment across environments.",
    "Redis provides fast caching solutions, enhancing my backend performance.",
    "Celery enables asynchronous task processing, ensuring better scalability for background jobs."
  ])
}
