import { TestBed } from '@angular/core/testing';

import { FarmingSettingsStorageService } from './farming-settings-storage.service';

describe('FarmingSettingsStorageService', () => {
  let service: FarmingSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmingSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
