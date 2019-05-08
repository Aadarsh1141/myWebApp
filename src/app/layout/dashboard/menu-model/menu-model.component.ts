import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-menu-model',
  templateUrl: './menu-model.component.html',
  styleUrls: ['./menu-model.component.scss']
})
export class MenuModelComponent implements OnInit {

  @Output() onUnjoinCall = new EventEmitter<any>();
  constructor(public dialogRef: MatDialogRef<MenuModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log("data in menu", JSON.stringify(this.data));

  }

  unjoinCall() {
    this.onUnjoinCall.emit(true);
  }

}
