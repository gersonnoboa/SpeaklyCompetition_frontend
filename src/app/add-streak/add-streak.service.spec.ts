import { TestBed } from '@angular/core/testing';

import { AddStreakService } from './add-streak.service';

describe('AddStreakService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddStreakService = TestBed.get(AddStreakService);
    expect(service).toBeTruthy();
  });
});
