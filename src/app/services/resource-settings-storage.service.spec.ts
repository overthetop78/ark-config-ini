import { TestBed } from '@angular/core/testing';

import { ResourceSettingsStorageService } from './resource-settings-storage.service';

describe('ResourceSettingsStorageService', () => {
  let service: ResourceSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
