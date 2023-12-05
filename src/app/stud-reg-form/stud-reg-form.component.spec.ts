import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRegFormComponent } from './stud-reg-form.component';

describe('StudRegFormComponent', () => {
  let component: StudRegFormComponent;
  let fixture: ComponentFixture<StudRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudRegFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
