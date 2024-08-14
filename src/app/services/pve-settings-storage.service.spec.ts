import { TestBed } from '@angular/core/testing';

import { PveSettingsStorageService } from './pve-settings-storage.service';

describe('PveSettingsStorageService', () => {
  let service: PveSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PveSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
