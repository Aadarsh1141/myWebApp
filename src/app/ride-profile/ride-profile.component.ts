import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride-profile',
  templateUrl: './ride-profile.component.html',
  styleUrls: ['./ride-profile.component.scss'],
  animations: [routerTransition()]
})
export class RideProfileComponent implements OnInit {

  name:string;
  constructor(private router:Router) { }

  ngOnInit() {

    this.name = localStorage.getItem("name"); //Get User Name
  }
  goToRegisterVehicle(){
    this.router.navigateByUrl("/verify");
  }
  goToDashboard(){
    this.router.navigateByUrl("/dashboard");
  }
}
