import { TestBed } from '@angular/core/testing';

import { StructureSettingsStorageService } from './structure-settings-storage.service';

describe('StructureSettingsStorageService', () => {
  let service: StructureSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructureSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
