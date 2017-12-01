import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gnome-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  @Input() property: string;
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
