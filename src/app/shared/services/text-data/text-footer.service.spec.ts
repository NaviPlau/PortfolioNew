import { TestBed } from '@angular/core/testing';

import { TextFooterService } from './text-footer.service';

describe('TextFooterService', () => {
  let service: TextFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
