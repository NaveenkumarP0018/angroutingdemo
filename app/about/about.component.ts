import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{
  post:any=[];

  constructor(private appss:ServiceService) {
    this.postData();
   }
  postData(){
    this.post=this.appss.postdata().subscribe(
      res=>{
        this.post=res;
      }
    )
  }
  getcolor(id){
    if(id%2==0) return "green"
    else return "blue"
  }

}
