import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEngramSettingsComponent } from './create-engram-settings.component';

describe('CreateEngramSettingsComponent', () => {
  let component: CreateEngramSettingsComponent;
  let fixture: ComponentFixture<CreateEngramSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEngramSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateEngramSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
