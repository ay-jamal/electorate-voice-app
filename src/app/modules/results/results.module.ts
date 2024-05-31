import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbProgressBarModule, NbRadioModule, NbSelectModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';


@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
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
export class ResultsModule { }
