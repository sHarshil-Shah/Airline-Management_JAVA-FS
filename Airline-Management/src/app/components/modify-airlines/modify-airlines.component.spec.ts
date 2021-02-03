import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAirlinesComponent } from './modify-airlines.component';

describe('ModifyAirlinesComponent', () => {
  let component: ModifyAirlinesComponent;
  let fixture: ComponentFixture<ModifyAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyAirlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
