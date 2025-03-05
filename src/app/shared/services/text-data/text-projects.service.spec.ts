import { TestBed } from '@angular/core/testing';

import { TextProjectsService } from './text-projects.service';

describe('TextProjectsService', () => {
  let service: TextProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
