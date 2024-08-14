import { TestBed } from '@angular/core/testing';

import { LootSettingsStorageService } from './loot-settings-storage.service';

describe('LootSettingsStorageService', () => {
  let service: LootSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LootSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
