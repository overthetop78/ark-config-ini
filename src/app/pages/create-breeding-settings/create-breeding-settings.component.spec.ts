import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBreedingSettingsComponent } from './create-breeding-settings.component';

describe('CreateBreedingSettingsComponent', () => {
  let component: CreateBreedingSettingsComponent;
  let fixture: ComponentFixture<CreateBreedingSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBreedingSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateBreedingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
