import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent{
  comm:any=[]
  constructor(private apps:ServiceService) { 
    this.commentData();

  }
  commentData(){
    this.comm=this.apps.commentdata().subscribe(
      res=>{
        this.comm=res
      }
    )
  }
  getcolorss(id){
    if(id%2==0) return "darkgray"
  }


}
