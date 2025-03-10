import { TestBed } from '@angular/core/testing';

import { TextHeroService } from './text-hero.service';

describe('TextHeroService', () => {
  let service: TextHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
