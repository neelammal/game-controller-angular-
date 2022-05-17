import { Component, OnInit ,Input,OnChanges} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
@Input() nEven:any;
  constructor() { }
 evenList:any=[];
  ngOnInit(): void {
  
  }
  ngOnChanges(){
    this.evenList.push(this.nEven);
  }
  
}
