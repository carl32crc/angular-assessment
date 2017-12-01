import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gnome-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search() {
    // this.ms.sendMessage('hola');
  }
}
