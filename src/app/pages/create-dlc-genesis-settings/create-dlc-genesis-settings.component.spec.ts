import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDlcGenesisSettingsComponent } from './create-dlc-genesis-settings.component';

describe('CreateDlcGenesisSettingsComponent', () => {
  let component: CreateDlcGenesisSettingsComponent;
  let fixture: ComponentFixture<CreateDlcGenesisSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDlcGenesisSettingsComponent]
    });
    fixture = TestBed.createComponent(CreateDlcGenesisSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
