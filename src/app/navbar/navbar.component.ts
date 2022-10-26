import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email: String = 'Log in';
  role: String = '';

  constructor(public authService:AuthServiceService,private route:ActivatedRoute, private router: Router) {
    if(this.authService.getStorageRole()!=undefined){
      this.email = this.authService.getStorageRole().sub;
      this.role = this.authService.getStorageRole().role;

    }
   }

  ngOnInit(): void {
  }

  logout(){

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

    Toast.fire({
      icon: 'success',
      title: 'Signed out successfully'
    })


    this.router.navigate(['/home']);
    this.email = 'Log in';
    this.role = ''
    this.authService.logout();
    this.authService.user = undefined;
  }

}
