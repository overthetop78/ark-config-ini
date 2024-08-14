import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDinoSettingsComponent } from './create-dino-settings.component';

describe('CreateDinoSettingsComponent', () => {
  let component: CreateDinoSettingsComponent;
  let fixture: ComponentFixture<CreateDinoSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDinoSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateDinoSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
