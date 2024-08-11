import { TestBed } from '@angular/core/testing';

import { EngramsStorageService } from './engrams-storage.service';

describe('EngramsStorageService', () => {
  let service: EngramsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngramsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
