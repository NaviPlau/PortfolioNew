import { TestBed } from '@angular/core/testing';

import { TextContactService } from './text-contact.service';

describe('TextContactService', () => {
  let service: TextContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
