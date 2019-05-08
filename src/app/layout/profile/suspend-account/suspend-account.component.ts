import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-suspend-account',
  templateUrl: './suspend-account.component.html',
  styleUrls: ['./suspend-account.component.scss']
})
export class SuspendAccountComponent implements OnInit {

  @Output() onSuspend = new EventEmitter<any>(true);
  suspendForm: FormGroup;
  constructor( public dialogRef: MatDialogRef<SuspendAccountComponent>) { }

  ngOnInit() {
    this.suspendForm = new FormGroup({
      reason: new FormControl('', Validators.required),
    });
  }
  onNoClick(){
    this.dialogRef.close();
  }

  onYesClick(){
    this.onSuspend.emit(true);
  }

}
