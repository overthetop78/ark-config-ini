import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResourceSettingsComponent } from './create-resource-settings.component';

describe('CreateResourceSettingsComponent', () => {
  let component: CreateResourceSettingsComponent;
  let fixture: ComponentFixture<CreateResourceSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateResourceSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateResourceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
