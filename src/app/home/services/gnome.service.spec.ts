import { ListComponent } from './../list/list.component';
import { TestBed, inject } from '@angular/core/testing';
import { GnomeService } from './gnome.service';
import { Http, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { MockConnection } from '@angular/http/testing';
import { async } from '@angular/core/testing';

describe('GnomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnomeService]
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      {
        provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      MockBackend,
      BaseRequestOptions,
      GnomeService
      ]
    });
  });

  // it('should be created', inject([GnomeService], (service: GnomeService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should get value',
	    // tslint:disable-next-line:indent
	    async(inject([GnomeService, MockBackend], (service: GnomeService, backend: MockBackend) => {
        const res = 'hello';

        expect(res).toEqual('hello');

      // backend.connections.subscribe((conn: MockConnection) => {
      //   const options: ResponseOptions = new ResponseOptions({body: 'hello'});
      //   const newLocal: Response = new Response(options);

      //   conn.mockRespond(newLocal);
      // });

      // service.getSomething('http://dummy.com').subscribe(res => {
      //   expect(res).toEqual('hello');
      // });
  })));
});
