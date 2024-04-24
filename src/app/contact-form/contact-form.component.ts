import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  formData: any = {};

  @Output() formSubmit = new EventEmitter<any>();

  onSubmit() {
    this.formSubmit.emit(this.formData);
  }
}
