import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  title = 'pa';
  a:number=30;
  test:String='String For Test';
  date1 = new Date();
  b=[1,2,3,4,5];
  b1=[
    {
      id:101,
      name:'Apple'
    },
    {
      id:102,
      name:'B1'
    },
    {
      id:103,
      name:'c1'
    },{
      id:104,
      name:'d1'
    },];
  selectedItem?:String;
  OnSelect(e:any){
     this.selectedItem =e.target.value
  }
  onmulti(){
    console.log("multi Selected");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
