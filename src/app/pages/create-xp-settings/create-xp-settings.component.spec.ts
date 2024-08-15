import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateXpSettingsComponent } from './create-xp-settings.component';

describe('CreateXpSettingsComponent', () => {
  let component: CreateXpSettingsComponent;
  let fixture: ComponentFixture<CreateXpSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateXpSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateXpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
