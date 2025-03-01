import { TestBed } from '@angular/core/testing';

import { ScrollIntoService } from './scroll-into.service';

describe('ScrollIntoService', () => {
  let service: ScrollIntoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollIntoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
