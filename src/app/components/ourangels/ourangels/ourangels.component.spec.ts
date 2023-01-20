import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurangelsComponent } from './ourangels.component';

describe('OurangelsComponent', () => {
  let component: OurangelsComponent;
  let fixture: ComponentFixture<OurangelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurangelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurangelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
