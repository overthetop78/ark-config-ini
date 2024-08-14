import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStructureSettingsComponent } from './create-structure-settings.component';

describe('CreateStructureSettingsComponent', () => {
  let component: CreateStructureSettingsComponent;
  let fixture: ComponentFixture<CreateStructureSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStructureSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateStructureSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
