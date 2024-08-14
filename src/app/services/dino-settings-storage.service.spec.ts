import { TestBed } from '@angular/core/testing';

import { DinoSettingsStorageService } from './dino-settings-storage.service';

describe('DinoSettingsStorageService', () => {
  let service: DinoSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinoSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
