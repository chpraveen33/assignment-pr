import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
public someText=["matrix","vikram","apollo","yashoda","maxcure","care"];

 public searchInput:any;


  constructor() { }

  ngOnInit() {
  }

}
