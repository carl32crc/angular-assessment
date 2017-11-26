import { TestBed, inject } from '@angular/core/testing';

import { GnomeService } from './gnome.service';

describe('GnomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnomeService]
    });
  });

  it('should be created', inject([GnomeService], (service: GnomeService) => {
    expect(service).toBeTruthy();
  }));
});
