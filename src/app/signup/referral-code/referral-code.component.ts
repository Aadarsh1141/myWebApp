import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-referral-code',
  templateUrl: './referral-code.component.html',
  styleUrls: ['./referral-code.component.scss']
})
export class ReferralCodeComponent implements OnInit {

  @Output() onApply = new EventEmitter<any>(true);
  referralCode: string;

  constructor(public dialogRef: MatDialogRef<ReferralCodeComponent>,
    private signUpService: SignupService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  cancel() {
    this.dialogRef.close();
  }

  apply() {
    this.signUpService.checkReferralCode(this.referralCode.toUpperCase()).subscribe(
      (response) => {
        this.onApply.emit(this.referralCode);
      },
      (error) => {
        this.snackBar.open("Invalid promo code!", "error", {
          duration: 2000
        });
      }
    )

  }
}
