import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PollRoutingModule } from './poll-routing.module';
import { PollComponent } from './poll.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbButtonModule, NbCheckboxModule, NbProgressBarModule, NbRadioModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';
import { UpsertPollComponent } from './upsert-poll/upsert-poll.component';


@NgModule({
  declarations: [
    PollComponent,
    UpsertPollComponent
  ],
  imports: [
    CommonModule,
    PollRoutingModule,
    NbCardModule,
    FontAwesomeModule,
    AgGridModule,
    NbButtonModule,
    NbCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    NbProgressBarModule,
    NbRadioModule,
    NbSelectModule,
    NbAccordionModule
  ]
})
export class PollModule { }
