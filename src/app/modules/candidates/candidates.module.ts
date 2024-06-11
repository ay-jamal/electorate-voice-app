import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesComponent } from './candidates.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbButtonModule, NbCheckboxModule, NbProgressBarModule, NbRadioModule, NbSelectModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';
import { UpsertCandidatesComponent } from './upsert-candidates/upsert-candidates.component';
import { FilterPipe } from 'src/app/core/pipe/search.pipe';


@NgModule({
  declarations: [
    CandidatesComponent,
    UpsertCandidatesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
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
export class CandidatesModule { }
