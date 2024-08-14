import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePveSettingsComponent } from './create-pve-settings.component';

describe('CreatePveSettingsComponent', () => {
  let component: CreatePveSettingsComponent;
  let fixture: ComponentFixture<CreatePveSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePveSettingsComponent]
    });
    fixture = TestBed.createComponent(CreatePveSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
