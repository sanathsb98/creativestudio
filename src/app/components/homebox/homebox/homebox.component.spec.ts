import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeboxComponent } from './homebox.component';

describe('HomeboxComponent', () => {
  let component: HomeboxComponent;
  let fixture: ComponentFixture<HomeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
