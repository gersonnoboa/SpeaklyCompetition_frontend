import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStreakComponent } from './add-streak.component';

describe('AddStreakComponent', () => {
  let component: AddStreakComponent;
  let fixture: ComponentFixture<AddStreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
