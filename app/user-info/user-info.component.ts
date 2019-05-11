import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent{
  //nave:any=[];
  newData: any = [];

  constructor(private h:ServiceService,private route:ActivatedRoute) {
    this.route.params.subscribe(
      data => {
        const id = data.id;
        this.getDetails(id);
      }
    )
  }
  getDetails(id){
    this.h.detailsdata(id).subscribe(
      response => {
        this.newData = response;
      }
    )
  }

}