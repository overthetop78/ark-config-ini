import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameplaySettingsComponent } from './create-gameplay-settings.component';

describe('CreateGameplaySettingsComponent', () => {
  let component: CreateGameplaySettingsComponent;
  let fixture: ComponentFixture<CreateGameplaySettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGameplaySettingsComponent]
    });
    fixture = TestBed.createComponent(CreateGameplaySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
