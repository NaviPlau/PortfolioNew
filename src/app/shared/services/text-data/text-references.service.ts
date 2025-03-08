import { computed, inject, Injectable } from '@angular/core';
import { LangService } from '../language/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TextReferencesService {
  lang = inject(LangService)
  constructor() { }

  title = computed(() => this.lang.language() === 'de' ? "Referenzen" : "References")

  references = computed(() => this.lang.language() === 'de' ? [
    {
      description: 'Paul ist ein sympathischer und kommunikativer Teamplayer, der mit hoher Motivation und Zielstrebigkeit arbeitet. In Pair-Programming-Sessions hat er mehrfach bewiesen, dass er sich schnell in komplexe Themen einarbeiten und effizient Bugs lösen kann. Eine wertvolle Bereicherung für jedes Team!',
      referencer: 'Benjamin T.',
      job: 'Fullstack Developer',
      project: 'Pair Programming'
    }
    , {
      description: "Paul ist ein ausgezeichneter Teamplayer und sehr engagiert. Die Zusammenarbeit mit Paul hat sich für mich persönlich als sehr nützlich erwiesen. Er hat immer eine Lösung parat und gibt nie auf. Er konnte jedes Problem schnell lösen. Paul ist ein freundlicher und hilfsbereiter Mensch.",
      referencer: "Tristan S.",
      job: "Team Partner",
      project: "Kochwelt"
    },
    {
      description: "Die Zusammenarbeit mit Paul Ivan war eine herausragende Erfahrung. Paul brachte nicht nur ein hohes Maß an Fachkompetenz und technischem Wissen in die Entwicklung unserem Projekt ein, sondern auch eine unglaubliche Leidenschaft für Innovation und Nutzerfreundlichkeit. Sein strukturiertes und zielorientiertes Arbeiten war maßgeblich dafür verantwortlich, dass wir die Meilensteine des Projekts zu zweit, effizient und termingerecht erreichen konnten, obwohl diese Aufgabe für drei Personen vorgesehen war.",
      referencer: "Samuel Z.",
      job: "Team Partner",
      project: "Join Vanilla"
    },
    {
      description: "Paul arbeitet äußerst schnell und effizient. Er ist immer hilfsbereit und zeigt ein hohes Maß an Engagement, wenn es darum geht, Unterstützung zu leisten. Besonders beeindruckend ist seine schnelle Auffassungsgabe für die behandelten Themen – er versteht neue Sachverhalte in kürzester Zeit und setzt sie sofort in die Praxis um.",
      referencer: "David P.",
      job: "Team Partner",
      project: "Kochwelt"
    },
    {
      description: "Ich hatte die Gelegenheit, mit Paul in einem Gruppenprojekt zusammenzuarbeiten, bei dem wir gemeinsam programmiert haben. Paul war von Anfang an eine große Bereicherung für unser Team. Seine Programmierfähigkeiten sind hervorragend und er hat stets mit großer Präzision und Kreativität gearbeitet. Besonders beeindruckend fand ich seine Fähigkeit, komplexe Probleme schnell zu durchdringen und praktikable Lösungen zu entwickeln.Paul hat nicht nur durch seine technischen Fähigkeiten überzeugt, sondern auch durch seine Teamfähigkeit. Er hat immer ein offenes Ohr für die Ideen anderer gehabt und aktiv zur Verbesserung des Projekts beigetragen. Seine ruhige und professionelle Art hat die Zusammenarbeit sehr angenehm gemacht und das Team motiviert. Dank Pauls Einsatz und seinem Engagement haben wir das Projekt erfolgreich abgeschlossen. Ich würde jederzeit und gerne wieder mit Paul in einen Projekt zusammenarbeiten.",
      referencer: "Albin S.",
      job: "Team Partner",
      project: "Da-Bubble"
    }] : [
    {
      description: 'Paul is a friendly and communicative team player who works with great motivation and determination. In pair programming sessions, he has repeatedly proven that he can quickly grasp complex topics and efficiently fix bugs. A valuable asset to any team!',
      referencer: 'Benjamin T.',
      job: 'Fullstack Developer',
      project: 'Pair Programming'
    },
    {
      description: "Paul is an excellent team player and highly committed. Working with Paul has been very beneficial for me personally. He always has a solution at hand and never gives up. He was able to solve every problem quickly. Paul is a kind and helpful person.",
      referencer: "Tristan S.",
      job: "Team Partner",
      project: "Kochwelt"
    },
    {
      description: "Working with Paul Ivan was an outstanding experience. Paul not only brought a high level of expertise and technical knowledge to the development of our project, but also an incredible passion for innovation and usability. His structured and goal-oriented work was instrumental in enabling us to achieve the project's milestones efficiently and on time with two people, even though this task was intended for three. ",
      referencer: "Samuel Z.",
      job: "Team Partner",
      project: "Join"
    },
    {
      description: "Paul works extremely quickly and efficiently. He is always ready to help and shows a high level of commitment when it comes to providing support. His quick grasp of the topics dealt with is particularly impressive - he understands new issues in a very short time and puts them into practice immediately.",
      referencer: "David P.",
      job: "Team Partner",
      project: "Kochwelt"
    },
    {
      description: "I had the opportunity to collaborate with Paul on a group project. Paul was a great asset to our team. His programming skills are outstanding, and he always worked with great precision and creativity. I was particularly impressed by his ability to quickly grasp complex problems and develop practical solutions. Paul not only stood out for his technical skills but also for his teamwork. He was always open to the ideas of others and actively contributed to improving the project. His calm and professional demeanor made working with him very pleasant and motivated the team. I would gladly work with Paul on a project again at any time. ",
      referencer: "Albin S.",
      job: "Team Partner",
      project: "Da- Bubble"
    }
  ])
}
