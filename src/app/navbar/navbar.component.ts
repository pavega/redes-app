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

  role: String = '';
  name: String = 'Log in';

  constructor(public authService:AuthServiceService,private route:ActivatedRoute, private router: Router) {

    if(this.authService.getStorageRole()!=undefined){
      this.role = this.authService.getStorageRole().role;
      this.name = this.authService.getStorageRole().name;

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
    this.role = '';
    this.name = 'Log in';
    this.authService.logout();
    this.authService.user = undefined;
  }

}
