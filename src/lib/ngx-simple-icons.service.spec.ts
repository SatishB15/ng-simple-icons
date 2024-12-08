import { TestBed } from '@angular/core/testing';

import { NgxSimpleIconsService } from './ngx-simple-icons.service';

describe('NgxSimpleIconsService', () => {
  let service: NgxSimpleIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSimpleIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
