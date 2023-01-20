import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurportfolioComponent } from './ourportfolio.component';

describe('OurportfolioComponent', () => {
  let component: OurportfolioComponent;
  let fixture: ComponentFixture<OurportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurportfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
