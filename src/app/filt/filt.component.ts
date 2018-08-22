import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filt',
  templateUrl: './filt.component.html',
  styleUrls: ['./filt.component.css']
})
export class FiltComponent implements OnInit {
public someText=["bikes","cars","hospitals","hotels","travels"];

 public searchInput:any;


  constructor() { }

  ngOnInit() {
  }

}
