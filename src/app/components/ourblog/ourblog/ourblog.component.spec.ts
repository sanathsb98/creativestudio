import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurblogComponent } from './ourblog.component';

describe('OurblogComponent', () => {
  let component: OurblogComponent;
  let fixture: ComponentFixture<OurblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurblogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
