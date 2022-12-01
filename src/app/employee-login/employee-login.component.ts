import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {


constructor(private r:Router){}
uname=""
pswrd=""
view=()=>{
  let data:any={
    'uname':this.uname,
    'pswrd':this.pswrd
  }
  console.log(data)
  if(this.uname=='user' && this.pswrd=='1122'){
    this.r.navigate(['/addfrnd'])
  }
  else{
    alert("invalid")
  }
}


}
