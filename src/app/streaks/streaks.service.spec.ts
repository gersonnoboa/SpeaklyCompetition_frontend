import { TestBed } from '@angular/core/testing';

import { StreaksService } from "./StreaksService";

describe('StreaksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StreaksService = TestBed.get(StreaksService);
    expect(service).toBeTruthy();
  });
});
