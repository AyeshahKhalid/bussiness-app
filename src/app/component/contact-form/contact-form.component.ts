import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  contactForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNum: new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('[0-9]*'),
    ]),
    profiles: this.formBuilder.array([]),
  });

  get profiles(): FormArray {
    return this.contactForm.get('profiles') as FormArray;
  }

  addProfile(): void {
    const profile = new FormControl('');
    this.profiles.push(profile);
  }

  removeProfile(index: number): void {
    this.profiles.removeAt(index);
  }
  sendContactInfo() {
    alert('Successfully Submitted');
  }
  get fullName() {
    return this.contactForm.get('fullName');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phoneNum() {
    return this.contactForm.get('phoneNum');
  }
}
