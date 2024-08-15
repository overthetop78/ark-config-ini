import { TestBed } from '@angular/core/testing';

import { EngramSettingsStorageService } from './engram-settings-storage.service';

describe('EngramSettingsStorageService', () => {
  let service: EngramSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngramSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
