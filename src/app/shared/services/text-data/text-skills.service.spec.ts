import { TestBed } from '@angular/core/testing';

import { TextSkillsService } from './text-skills.service';

describe('TextSkillsService', () => {
  let service: TextSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
