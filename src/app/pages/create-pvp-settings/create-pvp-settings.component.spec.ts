import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePvpSettingsComponent } from './create-pvp-settings.component';

describe('CreatePvpSettingsComponent', () => {
  let component: CreatePvpSettingsComponent;
  let fixture: ComponentFixture<CreatePvpSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePvpSettingsComponent]
    });
    fixture = TestBed.createComponent(CreatePvpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
