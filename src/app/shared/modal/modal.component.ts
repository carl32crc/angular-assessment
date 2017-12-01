import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gnome-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title;
  @Input() message;
  @Input() dataTarget;
  @Input() professions;
  @Input() friends;

  constructor() { }

  ngOnInit() {
  }

}
