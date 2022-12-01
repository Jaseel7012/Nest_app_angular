import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  username=""
  pswrd=""
  constructor(private route:Router){}
  read=()=>{
    let data:any={
      'username':this.username,
      'pswrd':this.pswrd
    }
    console.log(data)
    if(this.username=='admin' && this.pswrd=="nestdigital"){
      this.route.navigate(['/viewcourse'])
    }else{
      alert("invalid credential")
    }
  }
  

}
