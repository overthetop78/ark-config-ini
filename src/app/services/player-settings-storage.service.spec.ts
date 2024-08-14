import { TestBed } from '@angular/core/testing';

import { PlayerSettingsStorageService } from './player-settings-storage.service';

describe('PlayerSettingsStorageService', () => {
  let service: PlayerSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
