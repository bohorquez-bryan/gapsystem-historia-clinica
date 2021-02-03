import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEvolutionComponent } from './data-evolution.component';

describe('DataEvolutionComponent', () => {
  let component: DataEvolutionComponent;
  let fixture: ComponentFixture<DataEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEvolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
