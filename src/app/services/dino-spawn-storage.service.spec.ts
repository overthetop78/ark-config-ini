import { TestBed } from '@angular/core/testing';

import { DinoSpawnStorageService } from './dino-spawn-storage.service';

describe('DinoSpawnStorageService', () => {
  let service: DinoSpawnStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinoSpawnStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
