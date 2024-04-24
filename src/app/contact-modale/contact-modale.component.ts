import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-modale',
  templateUrl: './contact-modale.component.html',
  styleUrls: ['./contact-modale.component.css'],
})
export class ContactModaleComponent {
  displayModal: boolean = false;

  openModal() {
    this.displayModal = true;
  }

  closeModal() {
    this.displayModal = false;
  }

  submitForm(formData: any) {
    // Handle form submission here
    console.log(formData);
    this.closeModal(); // Close modal after submission
  }
}
