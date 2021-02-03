import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAirlinesComponent } from './create-airlines.component';

describe('CreateAirlinesComponent', () => {
  let component: CreateAirlinesComponent;
  let fixture: ComponentFixture<CreateAirlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAirlinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
