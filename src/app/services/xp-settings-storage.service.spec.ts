import { TestBed } from '@angular/core/testing';

import { XpSettingsStorageService } from './xp-settings-storage.service';

describe('XpSettingsStorageService', () => {
  let service: XpSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XpSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
