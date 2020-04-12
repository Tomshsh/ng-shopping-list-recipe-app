import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<"Recipes" | "Shopping List">()

  constructor() { }

  ngOnInit(): void {
  }
  collapsed = true

  onLinkSelected(str: "Recipes" | "Shopping List"){
    this.featureSelected.emit(str)
  }


}
