import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFarmingSettingsComponent } from './create-farming-settings.component';

describe('CreateFarmingSettingsComponent', () => {
  let component: CreateFarmingSettingsComponent;
  let fixture: ComponentFixture<CreateFarmingSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFarmingSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateFarmingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
