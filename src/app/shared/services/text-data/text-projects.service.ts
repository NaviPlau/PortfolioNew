import { computed, inject, Injectable, signal } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextProjectsService {

  constructor() {

  }

  lang = inject(LangService)
  selectedFrontend = signal(true);

  projectText = computed(() => {
    const language = this.lang.language();
    return (language === 'de' ? {
      title: "Meine Projekte",
      projects: [
        {
          id: 1,
          title: "DA-Bubble",
          about: "DA-Bubble ist ein Chat-Messenger, inspiriert von Slack. Nutzer können Nachrichten senden, sich mit Freunden austauschen und verschiedene Channels nutzen.",
          process: "In diesem Gruppenprojekt habe ich die komplette Login-, Registrierungs- und Authentifizierungslogik übernommen, ebenso die Profilbearbeitung und die Suchfunktion.",
          challenge: "Die größte Herausforderung war die Anbindung an Firebase, das Versenden von Registrierungs-E-Mails sowie die Echtzeit-Aktualisierung und Abruf der Daten.",
          gitLink: "https://github.com/NaviPlau/DaBubble",
          liveLink: "https://da-bubble.paul-ivan.com/",
          image: "img/dabubble.png",
          tech: {
            title: "Technologien",
            techs: [
              "Angular",
              "Firebase",
              "TypeScript"
            ]
          }
        },
        {
          id: 2,
          title: "Join Vanilla",
          about: "Task management web app um Todos besser verwalten zu können.",
          process: "Das Projekt wurde im Team entwickelt, wobei ich den Großteil übernommen habe, einschließlich Authentifizierung, Board-Funktionalität und das Hinzufügen von Aufgaben, alles in reinem JavaScript.",
          challenge: 'Die größte Herausforderung, auf die ich stolz bin, war es, das Projekt pünktlich abzuschließen, selbst nachdem unser dritter Teamkollege ausgestiegen ist.',
          gitLink: "https://github.com/NaviPlau/join",
          liveLink: "https://join.paul-ivan.com",
          image: "img/join.png",
          tech: {
            title: "Technologien",
            techs: [
              "JavaScript",
              "Firebase",
              "Rest-api",
            ]
          }
        },
        {
          id: 3,
          title: "EPL",
          about: "El Polo Loco ist ein Jump-and-Run-Spiel mit Fokus auf objektorientierter Programmierung, gewürzt mit einer Prise Tabasco und Chicken-Flair.",
          process: "Dieses Projekt war meine Einführung in wiederverwendbaren Code und strukturiertes Code-Management.",
          challenge: "Die größte Herausforderung war das Verständnis der Klassenvererbung. Welche Klasse welche Funktionen benötigt und wie ich sie sinnvoll nutzen kann.",
          gitLink: "https://github.com/NaviPlau/ElPolloLoco",
          liveLink: "https://el-pollo-loco.paul-ivan.com/",
          image: "img/epl.png",
          tech: {
            title: "Technologien",
            techs: [
              "JavaScript",
              "HTML",
              "CSS",
            ]
          }
        },
        {
          id: 4,
          title: "Videoflix",
          about: "Videoflix ist eine Video-Plattform, auf der sich Nutzer registrieren, einloggen und kurze Videos ansehen können. Die Plattform bietet ein nahtloses Streaming-Erlebnis und passt die Videoqualität dynamisch an die Netzwerkgeschwindigkeit an.",
          process: "Mein Hauptfokus lag auf der Entwicklung sowohl des Backends als auch des Frontends. Das Backend wurde mit Django Rest Framework entwickelt und kümmert sich um Benutzer-Authentifizierung, Video-Uploads und HLS-Streaming. Das Frontend, erstellt mit Angular, sorgt für eine intuitive Benutzeroberfläche und eine reibungslose Wiedergabe.",
          challenge: "Die größte Herausforderung war die Implementierung des HLS-Streamings für eine adaptive Videowiedergabe. Dies erforderte die Integration von FFmpeg zur Videokonvertierung, Redis & Celery für Hintergrundprozesse sowie eine Optimierung der Datenbankabfragen, um eine effiziente Bereitstellung der Videos sicherzustellen.",
          gitLink: "https://github.com/NaviPlau/VideoflixBackend",
          liveLink: "https://videoflix.paul-ivan.com/",
          image: "img/videoflix.png",
          tech: {
            title: "Technologien",
            techs: [
              "Angular",
              "Django",
              "PostgreSQL",
              "Linux",
              "Cloud",
              "Redis",
              "Celery"
            ]
          }
        },
        {
          id: 5,
          title: "Join Django",
          about: "Join ist eine Task-Management-Web-App, die ich mit Angular und Django umgesetzt habe. Im Gegensatz zur vorherigen Version basiert dieses Projekt auf meinem eigenen Backend anstelle von Firebase.",
          process: "Ich habe das gesamte Projekt alleine entwickelt, einschließlich Frontend mit Angular (unter Nutzung von Signals) und Backend mit Django, basierend auf dem Django REST Framework.",
          challenge: "Die größte Herausforderung war die Entwicklung meines ersten eigenen Backends und die nahtlose Verbindung mit dem Frontend.",
          gitLink: "https://github.com/NaviPlau/JoinBackend",
          liveLink: "https://angular-join.paul-ivan.com/",
          image: "img/join.png",
          tech: {
            title: "Technologien",
            techs: [
              "Angular",
              "Django",
              "SQLite",
              "Linux",
              "Cloud"
            ]
          }
        },
        {
          id: 6,
          title: "Coderr",
          about: "Diese Web-App ist an Fiverr angelehnt und bietet eine Plattform für den Kauf, Verkauf und die Verwaltung von IT-Dienstleistungen. Nutzer können individuelle Services anbieten, Aufträge erstellen und verwalten.",
          process: "Mein Hauptfokus lag auf der Entwicklung des vollständigen Backends mit dem Django Rest Framework (DRF). Das Frontend wurde von der Developer Akademie zu verfügung gestellt",
          challenge: "Die größte Herausforderung bestand darin, die gesamte Umsetzung strikt nach der vorgegebenen Dokumentation durchzuführen. Dies erforderte eine exakte Planung, eine präzise API-Entwicklung und eine konsequente Einhaltung der definierten Anforderungen.",
          gitLink: "https://github.com/NaviPlau/Coderr-Backend",
          liveLink: "https://coderr.paul-ivan.com/",
          image: "img/coderr.png",
          tech: {
            title: "Technologien",
            techs: [
              "Django",
              "SQLite",
              "Linux",
              "Cloud"
            ]
          }
        },

      ]
    } : {
      title: "My Projects",
      projects: [
        {
          id: 1,
          title: "DA-Bubble",
          about: "DA-Bubble is a chat messenger inspired by Slack, allowing users to send messages, connect with friends, and use various channels.",
          process: "In this group project, I was responsible for the entire login, registration, and authentication system, as well as profile editing and the search bar.",
          challenge: "The biggest challenge was the connection to Firebase, the sending of registration emails, and the real-time updates and data retrieval.",
          gitLink: "https://github.com/NaviPlau/DaBubble",
          liveLink: "https://da-bubble.paul-ivan.com/",
          image: "img/dabubble.png",
          tech: {
            title: "Technologies",
            techs: [
              "Angular",
              "Firebase",
              "TypeScript"
            ]
          }
        },
        {
          id: 2,
          title: "Join Vanilla",
          about: "Join is a vanilla JavaScript task management web app, essentially a Kanban board where users can manage their to-dos.",
          process: "This was a team project, and I was responsible for most of it, including authentication, the board functionality, and adding tasks—all built with pure JavaScript.",
          challenge: "The greatest challenge, which I'm proud of, was completing the project on time, even after our third teammate dropped out.",
          gitLink: "https://github.com/NaviPlau/join",
          liveLink: "https://join.paul-ivan.com/",
          image: "img/join.png",
          tech: {
            title: "Technologies",
            techs: [
              "JavaScript",
              "Firebase",
              "Rest-Api",
            ]
          }
        },
        {
          id: 3,
          title: "EPL",
          about: "El Polo Loco is a jump-and-run game with a focus on object-oriented programming—spiced up with a touch of Tabasco and a chicken theme.",
          process: "This project was my introduction to reusable code and structured code management.",
          challenge: "The biggest challenge was understanding class inheritance and figuring out which class needs what and how to use it effectively.",
          gitLink: "https://github.com/NaviPlau/ElPolloLoco",
          liveLink: "https://el-pollo-loco.paul-ivan.com/",
          image: "img/epl.png",
          tech: {
            title: "Technologies",
            techs: [
              "JavaScript",
              "HTML",
              "CSS",
            ]
          }
        },
        {
          id: 4,
          title: "Videoflix",
          about: "Videoflix is a video platform where users can register, log in, and watch short videos. The platform is designed to provide a seamless streaming experience while dynamically adjusting video quality based on network speed.",
          process: "My primary focus was on developing both the backend and frontend. The backend was built using Django Rest Framework, handling user authentication, video uploads, and HLS streaming. The frontend, developed with Angular, ensures smooth playback and an intuitive user experience.",
          challenge: "The biggest challenge was implementing HLS streaming for adaptive video playback. This required integrating FFmpeg for video conversion, Redis & Celery for background processing, and optimizing database queries to ensure efficient video delivery.",
          gitLink: "https://github.com/NaviPlau/VideoflixBackend",
          liveLink: "https://videoflix.paul-ivan.com/",
          image: "img/videoflix.png",
          tech: {
            title: "Technologien",
            techs: [
              "Angular",
              "Django",
              "PostgreSQL",
              "Linux",
              "Cloud",
              "Redis",
              "Celery"
            ]
          }
        },
        {
          id: 5,
          title: "Join Django",
          about: "Join is a task management web app that I built using Angular and Django. Unlike the previous version, this project uses my own backend instead of Firebase.",
          process: "I developed the entire project on my own, including the frontend utilizing Angular signals, and the backend powered by the Django REST Framework.",
          challenge: "The biggest challenge was building my first custom backend and seamlessly integrating it with the frontend.",
          gitLink: "https://github.com/NaviPlau/JoinBackend",
          liveLink: "https://angular-join.paul-ivan.com/",
          image: "img/join.png",
          tech: {
            title: "Technologien",
            techs: [
              "Angular",
              "Django",
              "SQLite",
              "Linux",
              "Cloud"
            ]
          }
        },
        {
          id: 6,
          title: "Coderr",
          about: "This web app is inspired by Fiverr and provides a platform for buying, selling, and managing IT services. Users can offer individual services, create and manage orders.",
          process: "My main focus was on developing the complete backend using the Django Rest Framework (DRF). The frontend was provided by Developer Akademie.",
          challenge: "The biggest challenge was implementing everything strictly according to the given documentation. This required precise planning, accurate API development, and strict adherence to the defined requirements.",
          gitLink: "https://github.com/NaviPlau/Coderr-Backend",
          liveLink: "https://coderr.paul-ivan.com/",
          image: "img/coderr.png",
          tech: {
            title: "Technologien",
            techs: [
              "Django",
              "SQLite",
              "Linux",
              "Cloud"
            ]
          }
        },
      ]
    })
  })

  actualProject = computed(() => this.projectText().projects.find(p => p.id === this.selectedProjectId()) || this.projectText().projects[0]);
  selectedProjectId = signal(1);
  selectProject(id: number) {
    this.selectedProjectId.set(id);
  }

  frontendProjects = computed(() => this.projectText().projects.filter(project => project.id <= 3));
  backendProjects = computed(() => this.projectText().projects.filter(project => project.id >= 4));

}

