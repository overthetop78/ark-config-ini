import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLootSettingsComponent } from './create-loot-settings.component';

describe('CreateLootSettingsComponent', () => {
  let component: CreateLootSettingsComponent;
  let fixture: ComponentFixture<CreateLootSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLootSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateLootSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
