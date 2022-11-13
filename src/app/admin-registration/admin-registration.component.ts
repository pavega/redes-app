import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

  @Input()userData={name:'',email:'',password:'',role:{id_Role:0 }};


  constructor(private fb: FormBuilder,  public usersService: UsersService, private router: Router) {}

  ngOnInit(): void {
  }

  add(){

    return this.usersService.addUser(this.userData).subscribe((result) => {
      this.userData={
        name:'',email:'',password:'',role:{id_Role:0 }
      }
      Swal.fire(
        'Excellent!',
        'User successfully registered!',
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

}
