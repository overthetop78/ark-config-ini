import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEngramsComponent } from './create-engrams.component';

describe('CreateEngramsComponent', () => {
  let component: CreateEngramsComponent;
  let fixture: ComponentFixture<CreateEngramsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEngramsComponent]
    });
    fixture = TestBed.createComponent(CreateEngramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
