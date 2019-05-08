import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PassengerListService } from '../passenger-list/passenger-list.service';
import { routerTransition } from '../../../../../app/router.animations';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss'],
  animations: [routerTransition()]
})
export class ViewProfileComponent implements OnInit {

  userId:any;
  userProfile:any;
  showData = true;
  constructor( public dialogRef: MatDialogRef<ViewProfileComponent>, private passengerListService: PassengerListService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.userId = this.data.profile.userid;
    if(this.userId){
      this.passengerListService.getRiderDetails(this.userId).subscribe(
        data=> {
          console.log("data after get user profile", JSON.stringify(data.json()));
          this.userProfile = data.json().resultData;
          this.showData = false;
        }
      )
    }
    
  }


}
