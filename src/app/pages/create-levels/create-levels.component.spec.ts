import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLevelsComponent } from './create-levels.component';

describe('CreateLevelsComponent', () => {
  let component: CreateLevelsComponent;
  let fixture: ComponentFixture<CreateLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateLevelsComponent]
    });
    fixture = TestBed.createComponent(CreateLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
