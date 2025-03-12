import { computed, inject, Injectable, signal } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextProjectsService {

  constructor() { }

  lang = inject(LangService)
  

  projectText = computed(() => {
    const language = this.lang.language();
    return(language === 'de' ? { 
      title : "Meine Projekte",
      projects :[
        {
        id : 1,
        title : "DA-Bubble",
        about : "DA-Bubble ist ein Chat-Messenger, inspiriert von Slack. Nutzer können Nachrichten senden, sich mit Freunden austauschen und verschiedene Channels nutzen.",
        process : "In diesem Gruppenprojekt habe ich die komplette Login-, Registrierungs- und Authentifizierungslogik übernommen, ebenso die Profilbearbeitung und die Suchfunktion.",
        challenge : "Die größte Herausforderung war die Anbindung an Firebase, das Versenden von Registrierungs-E-Mails sowie die Echtzeit-Aktualisierung und Abruf der Daten.",
        gitLink : "https://github.com/NaviPlau/DaBubble",
        liveLink : "https://da-bubble.paul-ivan.com/",
        image : "img/dabubble.png",
        tech : {
          title : "Technologien",
          techs : [
            "Angular",
            "Firebase",
            "TypeScript"
          ]}
      },
      {
        id : 2,
        title : "Join Vanilla",
        about : "Task management web app um Todos besser verwalten zu können.",
        process: "Das Projekt wurde im Team entwickelt, wobei ich den Großteil übernommen habe, einschließlich Authentifizierung, Board-Funktionalität und das Hinzufügen von Aufgaben, alles in reinem JavaScript.",
        challenge: 'Die größte Herausforderung, auf die ich stolz bin, war es, das Projekt pünktlich abzuschließen, selbst nachdem unser dritter Teamkollege ausgestiegen ist.',
        gitLink : "https://github.com/NaviPlau/join",
        liveLink : "https://join.paul-ivan.com",
        image : "img/join.png",
        tech : {
          title : "Technologien",
          techs : [
            "JavaScript",
            "Firebase",
            "Rest-api",
          ]
        }
      },
      {
        id : 3,
        title: "EPL",
        about : "El Polo Loco ist ein Jump-and-Run-Spiel mit Fokus auf objektorientierter Programmierung, gewürzt mit einer Prise Tabasco und Chicken-Flair.",
        process: "Dieses Projekt war meine Einführung in wiederverwendbaren Code und strukturiertes Code-Management.",
        challenge: "Die größte Herausforderung war das Verständnis der Klassenvererbung. Welche Klasse welche Funktionen benötigt und wie ich sie sinnvoll nutzen kann.",
        gitLink : "https://github.com/NaviPlau/ElPolloLoco",
        liveLink : "https://el-pollo-loco.paul-ivan.com/",
        image : "img/epl.png",
        tech : {
          title : "Technologien",
          techs : [
            "JavaScript",
            "HTML",
            "CSS",
          ]
        }
      },
      {
        id : 4,
        title: "Join Django",
        about : "Join ist eine Task-Management-Web-App, die ich mit Angular und Django umgesetzt habe. Im Gegensatz zur vorherigen Version basiert dieses Projekt auf meinem eigenen Backend anstelle von Firebase.",
        process : "Ich habe das gesamte Projekt alleine entwickelt, einschließlich Frontend mit Angular (unter Nutzung von Signals) und Backend mit Django, basierend auf dem Django REST Framework.",
        challenge : "Die größte Herausforderung war die Entwicklung meines ersten eigenen Backends und die nahtlose Verbindung mit dem Frontend.",
        gitLink : "https://github.com/NaviPlau/JoinBackend", 
        liveLink : "https://join-django.web.app/",
        image : "img/join.png",
        tech : {
          title : "Technologien",
          techs : [
            "Angular",
            "Django",
            "SQLite",
            "Linux",
            "Cloud"
          ]
        }
      },
      {
        id : 5,
        title: "Coderr",
        about : "Hier kann man Dienstleistungen in Bereich IT kaufne und everkaufen",
        process : "Erstellung von Backend mit Django uns Sqlite. Frontend wurde von Developer Akademie zu verfügung gestellt",
        gitLink : "https://github.com/NaviPlau/Coderr-Backend", 
        liveLink : "https://coderr.web.app/",
        image :   "img/coderr.png",
        tech : {
          title : "Technologien",
          techs : [
            "Django",
            "SQLite",
            "Linux",
            "Cloud"
          ]
        }
      },
      {
        id : 6,
        title: "Videoflix",
        about : "Eine videoplatform angelehnt and Netflix. Implementierung voon Authentification and videouploads.",
        process : "Using django with postgresql, redis and celery to guarantee a smooth user experience.",
        gitLink : "https://github.com/NaviPlau/VideoflixBackend", 
        liveLink : "https://videoflix.paul-ivan.com/",
        image : "img/videoflix.png",
        tech : {
          title : "Technologien",
          techs : [
            "Angular",
            "Django",
            "PostgreSQL",
            "Linux",
            "Cloud",
            "Redis",
            "Celery"
          ]
        }
      }
      ] } : {
        title : "My Projects",
        projects :[
          {
          id : 1,
          title : "DA-Bubble",
          about : "DA-Bubble is a chat messenger inspired by Slack, allowing users to send messages, connect with friends, and use various channels.",
          process : "In this group project, I was responsible for the entire login, registration, and authentication system, as well as profile editing and the search bar.",
          challenge : "The biggest challenge was the connection to Firebase, the sending of registration emails, and the real-time updates and data retrieval.",
          gitLink : "https://github.com/NaviPlau/DaBubble",
          liveLink : "https://da-bubble.paul-ivan.com/",
          image : "img/dabubble.png",
          tech : {
            title : "Technologies",
            techs : [
              "Angular",
              "Firebase",
              "TypeScript"
            ]}
        },
        {
          id : 2,
          title : "Join Vanilla",
          about : "Join is a vanilla JavaScript task management web app, essentially a Kanban board where users can manage their to-dos.",
          process: "This was a team project, and I was responsible for most of it, including authentication, the board functionality, and adding tasks—all built with pure JavaScript.",
          challenge : "The greatest challenge, which I'm proud of, was completing the project on time, even after our third teammate dropped out.",
          gitLink : "https://github.com/NaviPlau/join",
          liveLink : "https://join.paul-ivan.com/",
          image : "img/join.png",
          tech : {
            title : "Technologies",
            techs : [
              "JavaScript",
              "Firebase",
              "Rest-Api",
            ]
          }
        },
        {
          id : 3,
          title: "EPL",
          about : "El Polo Loco is a jump-and-run game with a focus on object-oriented programming—spiced up with a touch of Tabasco and a chicken theme..",
          process: "This project was my introduction to reusable code and structured code management.",
          challenge : "The biggest challenge was understanding class inheritance and figuring out which class needs what and how to use it effectively.",
          gitLink : "https://github.com/NaviPlau/ElPolloLoco",
          liveLink : "https://el-pollo-loco.paul-ivan.com/",
          image : "img/epl.png",
          tech : {
            title : "Technologies",
            techs : [
              "JavaScript",
              "HTML",
              "CSS",
            ]
          }
        },
        {
          id : 4,
          title: "Join Django",
          about : "Join is a task management web app that I built using Angular and Django. Unlike the previous version, this project uses my own backend instead of Firebase.",
          process : "I developed the entire project on my own, including the frontend utilizing Angular signals, and the backend powered by the Django REST Framework.",
          challenge : "The biggest challenge was building my first custom backend and seamlessly integrating it with the frontend.",
          gitLink : "https://github.com/NaviPlau/JoinBackend", 
          liveLink : "https://join-django.web.app/",
          image : "img/join.png",
          tech : {
            title : "Technologien",
            techs : [
              "Angular",
              "Django",
              "SQLite",
              "Linux",
              "Cloud"
            ]
          }
      },
      {
        id : 5,
        title: "Coderr",
        about : "Here you can buy and sell IT services",
        process : "Creation of Backend with Django and Sqlite. Frontend was provided by Developer Akademie",
        gitLink : "https://github.com/NaviPlau/Coderr-Backend", 
        liveLink : "https://coderr.web.app/",
        image :   "img/coderr.png",
        tech : {
          title : "Technologien",
          techs : [
            "Django",
            "SQLite",
            "Linux",
            "Cloud"
          ]
        }
      },
      {
        id : 6,
        title : "Videoflix",
        about : "A video platform inspired by Netflix. Implementation of authentication and video uploads.",
        process : "Using django with postgresql, redis and celery to guarantee a smooth user experience.",
        gitLink : "https://github.com/NaviPlau/VideoflixBackend", 
        liveLink : "https://videoflix.paul-ivan.com/",
        image : "img/videoflix.png",
        tech : {
          title : "Technologien",
          techs : [
            "Angular",
            "Django",
            "PostgreSQL",
            "Linux",
            "Cloud",
            "Redis",
            "Celery"
          ]
        }
      }
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

