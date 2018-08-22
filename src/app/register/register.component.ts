import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register..service';
import { Router } from '@angular/router';
import {NgForm,FormControl,FormsModule} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
userdata={
  name:'',
  email:'',
  mobilenumber:'',
  emergency:'',
  discription:''
}
public data:any;
 
  constructor(
    private route:Router,
    private registerservice:RegisterService
  ) { }

  ngOnInit() {
  }
  signUp(){
    
     this.data = this.userdata;
     console.log(this.data.email)
    
    if(!this.data.name){
      alert("please provide name");
    }
    else if(!this.data.email){
      alert("please provide email");
    }
    else if(!this.data.mobilenumber){
      alert("please provide mobilenumber");
    }
    else if(!this.data.emergency){
      alert("please enter emergency data");
    }
    else if(!this.data.discription){
      alert("please enter discription");
    }
    else{
      this.registerservice.submitdetails(this.data)
      .subscribe(
        function(response){
          console.log(response)
        }
      )
     
    }


    
}
 Register(form:NgForm){
  console.log(form)
}
}
