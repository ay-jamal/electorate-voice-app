import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbLayoutModule, NbButtonModule, NbInputModule } from '@nebular/theme';


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    FontAwesomeModule,
    NbButtonModule,
    NbInputModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
