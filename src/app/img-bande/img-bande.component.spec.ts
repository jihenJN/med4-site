import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgBandeComponent } from './img-bande.component';

describe('ImgBandeComponent', () => {
  let component: ImgBandeComponent;
  let fixture: ComponentFixture<ImgBandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgBandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgBandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
