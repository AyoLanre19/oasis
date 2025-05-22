import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  onLogin() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const formValue = this.loginForm.value;

    // Find user with matching email and password
    const matchedUser = users.find(
      (user: any) => user.email === formValue.email && user.password === formValue.password
    );

    console.log(formValue);
    

    if (matchedUser) {
      // Save current user session
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      this.router.navigate(['/Dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
