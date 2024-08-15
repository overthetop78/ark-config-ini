import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObjectConfigComponent } from './create-object-config.component';

describe('CreateObjectConfigComponent', () => {
  let component: CreateObjectConfigComponent;
  let fixture: ComponentFixture<CreateObjectConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateObjectConfigComponent]
    });
    fixture = TestBed.createComponent(CreateObjectConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
