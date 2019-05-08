import { Component, OnInit, EventEmitter, Output }from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @Output() onChangePassword = new EventEmitter<any>(true);
  changePasswordForm: FormGroup;
  userId:any;
  constructor(private snackBar: MatSnackBar, private profileService: ProfileService) { }

  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('userId'));
    console.log("userid is", this.userId);
    
    this.changePasswordForm = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      newPassword: new FormControl('', Validators.required),
      confirmNewPassword: new FormControl('', Validators.required),
    });
  }

  changePassword() {
    if (this.validation()) {
      var urlSearchParams = new URLSearchParams();
      urlSearchParams.append('phone',this.userId);
      urlSearchParams.append('oldPassword',this.changePasswordForm.value.currentPassword);
      urlSearchParams.append('newPassword',this.changePasswordForm.value.newPassword);
      console.log("urls ", urlSearchParams);
      
      this.profileService.changePassword(urlSearchParams)
      .subscribe(data => {
        console.log("data in change", data.json());
        
      })
      this.onChangePassword.emit(true);
    } else {
      this.snackBar.open("Fields are required", "", {
        duration: 2000
      })
    }
  }

  validation() {
    var currentPassword = (document.getElementById('currentPassword') as HTMLInputElement);
    var newPassword = (document.getElementById('newPassword') as HTMLInputElement);
    var confirmNewPassword = (document.getElementById('confirmNewPassword') as HTMLInputElement);
    if (currentPassword.value !== '' && newPassword.value !== '' && confirmNewPassword.value !== '') {
      return true;
    } else {
      return false;
    }
  }

}
