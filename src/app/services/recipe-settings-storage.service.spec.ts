import { TestBed } from '@angular/core/testing';

import { RecipeSettingsStorageService } from './recipe-settings-storage.service';

describe('RecipeSettingsStorageService', () => {
  let service: RecipeSettingsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeSettingsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
