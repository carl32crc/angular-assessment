import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
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
  private itemsPaginated: Array<Gnome>;

  constructor(private gs: GnomeService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.getGnomes();
  }

  getGnomes() {
    this.gs.getGnomes().subscribe(
      response => {
        if (response.Brastlewark) {
          this.gnomes = response.Brastlewark;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getItemsPaginated(items) {
    this.itemsPaginated = items;
    this.cdr.detectChanges();
  }

}
