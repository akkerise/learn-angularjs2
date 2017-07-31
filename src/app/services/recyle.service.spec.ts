import { TestBed, inject } from '@angular/core/testing';

import { RecyleService } from './recyle.service';

describe('RecyleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecyleService]
    });
  });

  it('should be created', inject([RecyleService], (service: RecyleService) => {
    expect(service).toBeTruthy();
  }));
});
