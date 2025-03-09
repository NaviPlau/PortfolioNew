import { TestBed } from '@angular/core/testing';

import { TextPrivacyService } from './text-privacy.service';

describe('TextPrivacyService', () => {
  let service: TextPrivacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextPrivacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
