import { TestBed } from '@angular/core/testing';

import { LevelExperienceStorageService } from './level-experience-storage.service';

describe('LevelExperienceStorageService', () => {
  let service: LevelExperienceStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelExperienceStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
