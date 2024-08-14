import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayerSettingsComponent } from './create-player-settings.component';

describe('CreatePlayerSettingsComponent', () => {
  let component: CreatePlayerSettingsComponent;
  let fixture: ComponentFixture<CreatePlayerSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlayerSettingsComponent]
    });
    fixture = TestBed.createComponent(CreatePlayerSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
