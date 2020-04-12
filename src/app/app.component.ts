import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature: "Shopping List" | "Recipes" = "Recipes"

  onNavigate(feature: "Shopping List"| "Recipes"){
    this.loadedFeature = feature
  }
}
