import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperieceComponent } from './experiece.component';

describe('ExperieceComponent', () => {
  let component: ExperieceComponent;
  let fixture: ComponentFixture<ExperieceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperieceComponent]
    });
    fixture = TestBed.createComponent(ExperieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
