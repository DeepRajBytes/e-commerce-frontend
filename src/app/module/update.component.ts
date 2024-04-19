import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Userservice } from '../state/user/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit{
    profile: any
    userProfile:any
    constructor(private user: Userservice,private formbuilder: FormBuilder ,@Inject(MAT_DIALOG_DATA) public data: { userProfile: any } ) {
        this.userProfile = data.userProfile;
    }
    
    ngOnInit(): void {
        this.loginForm.patchValue({
            firstname: this.userProfile.firstname,
            secondname: this.userProfile.secondname,
            mobile: this.userProfile.mobile,
            email: this.userProfile.email
          });
    }

    loginForm: FormGroup = this.formbuilder.group({
        firstname: [''],
        secondname: [''],
        mobile: [''],
        email: ['', [Validators.email]],
    });

    submitForm(): void {
        if (this.loginForm.valid) {
            this.user.updateuserprofile(this.loginForm.value)
        }
    }
}
