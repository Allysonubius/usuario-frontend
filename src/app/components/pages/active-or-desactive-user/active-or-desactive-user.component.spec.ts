import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrDesactiveUserComponent } from './active-or-desactive-user.component';

describe('ActiveOrDesactiveUserComponent', () => {
  let component: ActiveOrDesactiveUserComponent;
  let fixture: ComponentFixture<ActiveOrDesactiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveOrDesactiveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveOrDesactiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
