import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorsPageComponent } from './honors-page.component';

describe('HonorsPageComponent', () => {
  let component: HonorsPageComponent;
  let fixture: ComponentFixture<HonorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonorsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
