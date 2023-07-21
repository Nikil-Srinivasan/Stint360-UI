import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLogoutComponent } from './confirm-logout.component';

describe('ConfirmLogoutComponent', () => {
  let component: ConfirmLogoutComponent;
  let fixture: ComponentFixture<ConfirmLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmLogoutComponent]
    });
    fixture = TestBed.createComponent(ConfirmLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
