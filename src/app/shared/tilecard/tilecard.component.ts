import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router }   from '@angular/router';
/**
Another type of tile using the Material card.
*/
@Component({
  selector: 'app-tilecard',
  templateUrl: './tilecard.component.html',
  styleUrls: ['./tilecard.component.css']
})
export class TilecardComponent implements OnInit {
  @Input()
  title : string = "Title";
  @Input()
  subTitle: string = "";
  @Input()
  description: string = "The content";
  @Input()
  smImg: string = "assets/images/study.jpg";
  @Input()
  urlMdPath: string = ""
  @Input()
  buttonName: string = 'Submit';
  @Input()
  urlPath: string = 'home';
  @Input()
  size: string = "1020px";
  externalUrl: boolean = false;

  style: string = "background-image: url(smImg);background-size: cover;";

  constructor(public dialog: MatDialog,private router: Router) {
      this.externalUrl = (this.urlPath.startsWith("http"));
  }

  ngOnInit() {
    this.style = "background-image: url(smImg);background-size: cover;";
  }

  openDialog(): void {
   let dialogRef = this.dialog.open(MyDialog, {
     width: '1020px',
     data: { title: this.title, urlMdPath: this.urlMdPath}
   });
  }

  submit() {
    this.router.navigate([this.urlPath]);
  }
}

@Component({
  selector: 'mydialog',
  templateUrl: 'dialog.html',
})
export class MyDialog {

  constructor(
    public dialogRef: MatDialogRef<TilecardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
