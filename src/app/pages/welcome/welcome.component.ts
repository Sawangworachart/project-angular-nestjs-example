import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  readonly http = inject(HttpClient);

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      position: ['', [Validators.minLength(2), Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      leaveTypes: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      sick1: [false],
      sick2: [false],
      sick3: [false],
      others: ['', [Validators.minLength(2), Validators.maxLength(255)]],
      remarks: ['', [Validators.minLength(2), Validators.maxLength(255)]],
      dateSick: ['', [Validators.minLength(2), Validators.maxLength(255)]],
      dateCreate: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      status: ['', [Validators.minLength(2), Validators.maxLength(255)]],
    });
  }

  submitForm(): void {
    if (this.userForm.valid) {
      this.http.post('http://localhost:3000/api/users/create-user', this.userForm.value).subscribe();
      // console.log('Form Submitted:', this.userForm.value);
    } else {
      console.log('Form Invalid');
    }
  }
}
