import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { CompileMetadataResolver } from '@angular/compiler';

@Component({
  selector: 'app-serviceinfo',
  templateUrl: './serviceinfo.component.html',
  styleUrls: ['./serviceinfo.component.css']
})
export class ServiceinfoComponent{
  comData:any=[];

  constructor(private h:ServiceService,private rou:ActivatedRoute) {
    this.rou.params.subscribe(
      data=>{
        const id = data.id;
        this.commentsdata(id);
      }
    ) 
  }
  commentsdata(id){
    this.h.commentsdata(id).subscribe(
      res=>{
        this.comData=res;
      }
    )
  }
  getcolor(id){
    if(id%2==0)return "green"
    else return "blue"
  }


}
