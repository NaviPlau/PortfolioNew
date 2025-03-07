import { TestBed } from '@angular/core/testing';

import { TextReferencesService } from './text-references.service';

describe('TextReferencesService', () => {
  let service: TextReferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextReferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
