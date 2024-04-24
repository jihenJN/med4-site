import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModaleComponent } from './contact-modale.component';

describe('ContactModaleComponent', () => {
  let component: ContactModaleComponent;
  let fixture: ComponentFixture<ContactModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactModaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
