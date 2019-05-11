import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  users:any=[]

  constructor(private app:ServiceService) {
    this.getdata();
   }

  getdata(){
    this.users=this.app.data().subscribe(
      res=>{
        this.users=res
      }
    )
  }
  getcolors(id){
    if(id%2==0) return "orange"
  }
}
