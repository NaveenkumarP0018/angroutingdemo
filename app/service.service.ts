import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  data(){
    return this.http.get("http://jsonplaceholder.typicode.com/users")
  }
  commentdata(){
    return this.http.get("http://jsonplaceholder.typicode.com/comments")
  }
  postdata(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
  detailsdata(id){
    return this.http.get("http://jsonplaceholder.typicode.com/users/" +id);

  }
  commentsdata(id){
    return this.http.get("http://jsonplaceholder.typicode.com/comments/" +id)

  }
}
