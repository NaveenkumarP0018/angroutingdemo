import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { ServiceinfoComponent } from './serviceinfo/serviceinfo.component';

var router=[
  {
   path:'home',
   component:HomeComponent
  },
  {
    path:'home/:id',
    component:UserInfoComponent
   },
  {
    path:"service",
    component:ServiceComponent
  },
  {
    path:"service/:id",
    component:ServiceinfoComponent
  },
  {
    path:"about",
    component:AboutComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    UserInfoComponent,
    ServiceinfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{useHash:true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
