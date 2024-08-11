import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLevelMultiplierComponent } from './create-level-multiplier.component';

describe('CreateLevelMultiplierComponent', () => {
  let component: CreateLevelMultiplierComponent;
  let fixture: ComponentFixture<CreateLevelMultiplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLevelMultiplierComponent]
    });
    fixture = TestBed.createComponent(CreateLevelMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
