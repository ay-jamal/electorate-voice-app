import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbIconModule, NbLayoutModule, NbUserModule } from '@nebular/theme';
import { HeaderComponent } from '../core/components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbLayoutModule,
    RouterModule,
    NbUserModule,
    FontAwesomeModule,
    NbIconModule,
    NbCardModule,
    HeaderComponent,
  ]
})
export class HomeModule { }
