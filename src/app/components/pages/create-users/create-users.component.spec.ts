import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsersComponent } from './create-users.component';

describe('CreateUsersComponent', () => {
  let component: CreateUsersComponent;
  let fixture: ComponentFixture<CreateUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
