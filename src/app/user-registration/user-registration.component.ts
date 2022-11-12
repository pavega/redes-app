import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,  public usersService: UsersService, private router: Router) {

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role:{id_Role:2}
    });
  }

  ngOnInit(): void {
  }

  signup(){
    if(!this.signUpForm.valid){
      return;
    }

    return this.usersService.addUser(this.signUpForm.value).subscribe((result) => {
      Swal.fire(
        'Excellent!',
        'You have successfully registered!',
        'success'
      );
      this.router.navigate(['/home']);
    },(error) =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
      console.log(error);
    });
  }

  get name() { return this.signUpForm.get('name'); };
  get password() { return this.signUpForm.get('password'); };
  get email() { return this.signUpForm.get('email'); };

}
