import { Component, signal } from '@angular/core';
import emailjs from '@emailjs/browser';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
  // Signals for state
  sending = signal(false);
  success = signal<boolean | null>(null);

  // Reactive form
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  sendEmail() {
    if (this.contactForm.invalid) return;

    this.sending.set(true);
    this.success.set(null);

    emailjs
      .send(
        'service_im1d1wu',
        'template_hgv9m2i',
        this.contactForm.value,
        't7uHi61J_OpVpHNGU'
      )
      .then(() => {
        this.success.set(true);
        this.contactForm.reset();
      })
      .catch(() => this.success.set(false))
      .finally(() => this.sending.set(false));
  }
}
