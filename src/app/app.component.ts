import { Component } from '@angular/core'; // importation de la class Component

@Component({ // Decorator
  selector: 'app-root', // comment appeler un composant <app-root></app-root>
  templateUrl: './app.component.html', // partie "visible" HTML
  styleUrls: ['./app.component.css'] // style associé au rendu HTML du composant
})
export class AppComponent { // partie "logique"
  title = 'tour-of-heroes'; // possibilité de changer le nom et le changement se fait sur le serveur Angular en temps réel
}
