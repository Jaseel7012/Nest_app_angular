import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { NavuserComponent } from './navuser/navuser.component';
import { FormsModule } from '@angular/forms';
const myroute:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'gal',
    component:GalleryComponent
  },
  {
    path:'cont',
    component:ContactUsComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'emplog',
    component:EmployeeLoginComponent
  },
  {
    path:'empreg',
    component:EmployeeRegisterComponent
  },
  {
    path:'viewcourse',
    component:ViewCourseComponent
  },
  {
    path:'viewfrnds',
    component:ViewFriendsComponent
  },
  {
    path:'course',
    component:AddCourseComponent
  },
  {
    path:'addfrnd',
    component:AddFriendComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactUsComponent,
    AdminComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    ViewCourseComponent,
    ViewFriendsComponent,
    AddFriendComponent,
    NavbarComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
