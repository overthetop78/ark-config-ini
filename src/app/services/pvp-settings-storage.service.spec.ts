import { TestBed } from '@angular/core/testing';

import { PvpSettingsStorageService } from './pvp-settings-storage.service';

describe('PvpSettingsStorageService', () => {
  let service: PvpSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvpSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
