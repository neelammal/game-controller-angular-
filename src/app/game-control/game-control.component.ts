import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public number:number = -1;
  public even:any ;
  public odd:any ;
  public interval:any;
  public numberList:number[]=[];
  constructor() { }

  ngOnInit(): void {
  }

onStart(){
  this.interval = setInterval(() => {
    this.number += 1;
    this.numberList.push(this.number); 
    if (this.number == 0 || this.number % 2 == 0){
      this.even = this.number;
      
    }else{
      this.odd = this.number;
    }
  }, 1000);
  //console.log(this.number);
  
 // this.numberList.push(this.number)
 // console.log(this.interval);
}
onStop(){
  //console.log(this.interval);

  clearInterval(this.interval);
 // console.log(this.interval);
  this.number=-1;
  
  
  
  //this.interval=0;
}

}
