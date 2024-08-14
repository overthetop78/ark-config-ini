import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDinoSpawnWeightMultiplierComponent } from './create-dino-spawn-weight-multiplier.component';

describe('CreateDinoSpawnWeightMultiplierComponent', () => {
  let component: CreateDinoSpawnWeightMultiplierComponent;
  let fixture: ComponentFixture<CreateDinoSpawnWeightMultiplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDinoSpawnWeightMultiplierComponent]
    });
    fixture = TestBed.createComponent(CreateDinoSpawnWeightMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
