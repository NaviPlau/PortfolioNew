import { TestBed } from '@angular/core/testing';

import { TextAboutService } from './text-about.service';

describe('TextAboutService', () => {
  let service: TextAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
