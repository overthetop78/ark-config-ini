import { TestBed } from '@angular/core/testing';

import { GameplaySettingsStorageService } from './gameplay-settings-storage.service';

describe('GameplaySettingsStorageService', () => {
  let service: GameplaySettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameplaySettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
