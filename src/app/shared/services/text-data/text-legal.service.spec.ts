import { TestBed } from '@angular/core/testing';

import { TextLegalService } from './text-legal.service';

describe('TextLegalService', () => {
  let service: TextLegalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextLegalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
