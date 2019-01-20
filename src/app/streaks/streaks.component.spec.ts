import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreaksComponent } from './streaks.component';

describe('StreaksComponent', () => {
  let component: StreaksComponent;
  let fixture: ComponentFixture<StreaksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreaksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
