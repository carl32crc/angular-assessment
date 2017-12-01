import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GnomeService } from '../services/gnome.service';
import { Gnome } from '../../models/gnome.interface';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'gnome-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ GnomeService ]
})
export class ListComponent implements OnInit {

  private gnomes: Array<Gnome>;
  private itemsPaginated: Array<Gnome>;
  private gnomesFiltered: Array<Gnome>;

  constructor(private gs: GnomeService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.getGnomes();
  }

  getGnomes() {
    this.gs.getGnomes().subscribe(
      response => {
        if (response.Brastlewark) {
          this.gnomes = response.Brastlewark;
          this.gnomesFiltered = response.Brastlewark;
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


  onSearch(term) {
    this.gnomesFiltered = this.gnomes.filter( gnome => gnome.name.toLowerCase().includes(term.toLowerCase()));
  }
}
