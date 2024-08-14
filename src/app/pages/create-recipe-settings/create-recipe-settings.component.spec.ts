import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeSettingsComponent } from './create-recipe-settings.component';

describe('CreateRecipeSettingsComponent', () => {
  let component: CreateRecipeSettingsComponent;
  let fixture: ComponentFixture<CreateRecipeSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateRecipeSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateRecipeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
