import { TestBed } from '@angular/core/testing';

import { LevelStorageService } from './level-storage.service';

describe('LevelStorageService', () => {
  let service: LevelStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
