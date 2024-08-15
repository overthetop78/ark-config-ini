import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfigFileComponent } from './create-config-file.component';

describe('CreateConfigFileComponent', () => {
  let component: CreateConfigFileComponent;
  let fixture: ComponentFixture<CreateConfigFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateConfigFileComponent]
    });
    fixture = TestBed.createComponent(CreateConfigFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
