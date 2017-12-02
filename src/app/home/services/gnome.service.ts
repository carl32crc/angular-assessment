import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { api } from './../../constants/api.constants';

@Injectable()
export class GnomeService {

  constructor(private http: Http) { }

  getGnomes() {
    return this.http.get( api.url ).map(res => res.json());
  }

}
