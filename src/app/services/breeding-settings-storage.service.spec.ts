import { TestBed } from '@angular/core/testing';

import { BreedingSettingsStorageService } from './breeding-settings-storage.service';

describe('BreedingSettingsStorageService', () => {
  let service: BreedingSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedingSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
