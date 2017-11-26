import { Component, OnInit } from '@angular/core';
import { GnomeService } from '../services/gnome.service';
import { Gnome } from '../../models/gnome.interface';

@Component({
  selector: 'gnome-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ GnomeService ]
})
export class ListComponent implements OnInit {

  private gnomes: Array<Gnome>;

  constructor(private gs: GnomeService) { }

  ngOnInit() {
    this.getGnomes();
  }

  getGnomes() {
    this.gs.getGnomes().subscribe(
      response => {
        if (response.Brastlewark) {
          this.gnomes = response.Brastlewark;
          console.log(this.gnomes);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
