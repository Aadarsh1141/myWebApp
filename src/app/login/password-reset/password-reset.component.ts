import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordResetService } from './password-reset.service';
import { URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  animations: [routerTransition()]
})
export class PasswordResetComponent implements OnInit {

  passwordResetForm: FormGroup;
  parameters: URLSearchParams;

  constructor(private passwordResetService: PasswordResetService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.passwordResetForm = new FormGroup({
      phone: new FormControl('', Validators.required)
    });
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  resetPassword() {
    var urlSearchParams = new URLSearchParams();
    urlSearchParams.append('phone', this.passwordResetForm.value.phone);
    urlSearchParams.append('undefined', '');
    urlSearchParams.append('oldPassword', '');
    urlSearchParams.append('newPassword', '');

    this.passwordResetService.resetPassword(urlSearchParams)
      .subscribe(
        (data) => {
          console.log(data.json());
          this.openSnackBar('Password sent by sms !', '', 3000);
          this.router.navigateByUrl('/login');
        },
        (error) => {
          alert('Failed ! Please check your connection or try after sometime !');
          console.log(error)
        }
      );
  }
  openSnackBar(message: string, action: string, time) {
    this.snackBar.open(message, action, {
      duration: time,
    });
  }
}
