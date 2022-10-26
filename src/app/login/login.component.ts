import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  //errorMessage: any;

  constructor(private fb: FormBuilder,  public authService: AuthServiceService, private router: Router,public rest: LoginServiceService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  login(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    if(!this.loginForm.valid){
      return;
    }

    return  this.authService.login(this.loginForm.value).subscribe((result) => {
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      this.router.navigate(['/home']);
    },(error) =>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bad credentials',
      });
      console.log(error);
    });
  }

  get email() { return this.loginForm.get('email'); };
  get password() { return this.loginForm.get('password'); };
}
