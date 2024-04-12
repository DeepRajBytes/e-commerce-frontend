
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Authservice } from 'src/app/state/auth/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
@Input() changeTemplate :any

constructor( private formbuilder : FormBuilder , private store :Store , private authSerive:Authservice){

}
loginForm :FormGroup = this.formbuilder.group({
  email : ['',[Validators.required,Validators.email]],
  password : ['',[Validators.required,Validators.minLength(8)]]
})

submitForm():void{
  if(this.loginForm.valid){
    this.authSerive.login(this.loginForm.value)
  }
  
}


}
