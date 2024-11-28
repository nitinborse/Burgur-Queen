import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  @Output() logoutEvent = new EventEmitter<void>();

  
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private auth : AuthService
  ) {
    // Initialize the login form with validation
    this.loginForm = this.fb.group({
      username: ['', Validators.required],  // Username is required
      password: ['', [Validators.required, Validators.minLength(4)]]  // Password is required and should be at least 4 characters
    });
  }

  ngOnInit(): void {}

  // Method to handle login logic
  onSubmit() {
    // Basic validation check for empty fields
    if (this.loginForm.invalid) {
      if (this.username?.hasError('required')) {
        // alert('Please enter User ID');
      } else if (this.password?.hasError('required')) {
        // alert('Please enter Password');
      } else if (this.password?.hasError('minlength')) {
        // alert('Password must be at least 4 characters');
      }
      return;
    }

    const { username, password } = this.loginForm.value;

    // Simulate login credentials validation
    if (username === 'admin' && password === '1234') {
      // this.toastService.showSuccess('Login successful!', 'Success');
      this.auth.login('John Doe');
      this.route.navigate(['/dashboard']);  // Navigate to tasks page on success
    } else {
      // this.toastService.showError('Invalid username or password!', 'Wrong Credentials');

    }
  }

  // Getter for easier form validation access in template
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
