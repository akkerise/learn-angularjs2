import { TestBed, async, inject } from '@angular/core/testing';

import { CheckSaveFormGuard } from './check-save-form.guard';

describe('CheckSaveFormGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckSaveFormGuard]
    });
  });

  it('should ...', inject([CheckSaveFormGuard], (guard: CheckSaveFormGuard) => {
    expect(guard).toBeTruthy();
  }));
});
