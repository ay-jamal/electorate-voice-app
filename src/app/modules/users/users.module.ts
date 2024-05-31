import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbButtonModule, NbCheckboxModule, NbProgressBarModule, NbRadioModule, NbSelectModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    FontAwesomeModule,
    AgGridModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    NbProgressBarModule,
    NbRadioModule,
    NbSelectModule
  ]
})
export class UsersModule { }
