import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared/shared.module";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from 'src/app/services/interceptor.service';



@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        AuthComponent,
     ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},
    ],
})
export class AuthModule { }
