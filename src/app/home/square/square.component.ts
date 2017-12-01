import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gnome-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() image;
  @Input() name;
  @Input() dataTarget;

  constructor() { }

  ngOnInit() {
  }

}
