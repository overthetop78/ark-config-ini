import { TestBed } from '@angular/core/testing';

import { DlcGenesisSettingsStorageService } from './dlc-genesis-settings-storage.service';

describe('DlcGenesisSettingsStorageService', () => {
  let service: DlcGenesisSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlcGenesisSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
