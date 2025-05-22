import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Import Router here

// ✅ Custom password validator
function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value || '';
  const errors: any = {};

  if (!/[a-z]/.test(value)) errors.lowercase = true;
  if (!/[A-Z]/.test(value)) errors.uppercase = true;
  if (!/[0-9]/.test(value)) errors.number = true;
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) errors.special = true;
  if (value.length < 8) errors.minLength = true;

  return Object.keys(errors).length ? errors : null;
}

@Component({
  selector: 'app-signin',
  standalone:false,
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  // ✅ Inject Router in constructor
  constructor(private router: Router) {}

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator])
  });

  // ✅ Finalized submit function
  submitData() {
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      const userExists = users.some((user: any) => user.email === formData.email);
      if (userExists) {
        alert('Email already registered. Please use another email.');
        return;
      }

      users.push(formData);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Sign up successful!');
      this.router.navigate(['/login']); // ✅ Make sure your login route is correctly set up in app-routing.module.ts
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  // ✅ Optional getters for cleaner HTML
  get name() {
    return this.profileForm.get('name');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }
}
