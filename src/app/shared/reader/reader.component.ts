import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  @Input()
  fileName: string = "";


  constructor() { }

  ngOnInit() {
  }

}
