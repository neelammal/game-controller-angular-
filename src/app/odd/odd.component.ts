import { Input } from '@angular/core';
import { Component, OnInit ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
@Input() nOdd:any ;
  constructor() { }
 oddList:any=[]; 
  ngOnInit(): void {}
  
  ngOnChanges(){
    this.oddList.push(this.nOdd);
  }

}
