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
        about : "Eine app angelehnt an Slack, um Kommunikation und Kooperation zu verbessern.",
        process : "Das benutzen von Angular signals in verbindung mit Firebase und Observables war ein wichtiger Bestandteil der Entwicklung.",
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
        process: "Mein erstes Großes Project mit javascript und firebase. Die verbindung zwischen datenbank und Frontend herzustelen war eine Personliche Herausforderung.",
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
        about : "Jump and Run Spiel mit Tabasco and chicken geschmack.",
        process: "Der focus in dieser projekt liegt bei der Objektorientiertes programieren und die Veerbung von Classen",
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
        about : "Task management web app um Todos besser verwalten zu können.",
        process : "Umsetzung von Join Vanilla mit Angular und Django.",
        gitLink : "https://github.com/paul-ivan/join-django", 
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
        gitLink : "https://github.com/paul-ivan/coderr", 
        liveLink : "https://coderr.web.app/",
        image :   "assets/coderr.png",
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
        gitLink : "https://github.com/paul-ivan/videoflix", 
        liveLink : "https://videoflix.web.app/",
        image : "assets/videoflix.png",
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
          about : "An app inspired by Slack to improve communication and cooperation.",
          process : "Using Angular signals in combination with Firebase and Observables was an important part of the development.",
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
          about : "Task management web app to manage Todos better.",
          process: "My first big project with javascript and firebase. The connection between database and frontend was a personal challenge.",
          gitLink : "https://github.com/NaviPlau/join",
          liveLink : "https://join.paul-ivan.com/",
          image : "img/join.png",
          tech : {
            title : "Technologies",
            techs : [
              "JavaScript",
              "Firebase",
              "RESTAPI",
            ]
          }
        },
        {
          id : 3,
          title: "EPL",
          about : "Jump and Run Game with Tabasco and chicken flavor.",
          process: "The focus in this project lies on object-oriented programming and class inheritance",
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
          about : "Task management web app to manage Todos better.",
          process : "Umsetzung von Join Vanilla mit Angular und Django.",
          gitLink : "https://github.com/paul-ivan/join-django", 
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
        gitLink : "https://github.com/paul-ivan/coderr", 
        liveLink : "https://coderr.web.app/",
        image :   "assets/coderr.png",
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
        gitLink : "https://github.com/paul-ivan/videoflix", 
        liveLink : "https://videoflix.web.app/",
        image : "assets/videoflix.png",
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

