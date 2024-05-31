import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbCardModule, NbButtonModule, NbCheckboxModule, NbProgressBarModule, NbRadioModule, NbSelectModule, NbAccordionModule } from '@nebular/theme';
import { AgGridModule } from 'ag-grid-angular';
import { AnswersComponent } from './answers/answers.component';
import { UpsertQuestionsComponent } from './upsert-questions/upsert-questions.component';
import { UpsertAnswersComponent } from './answers/upsert-answers/upsert-answers.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    AnswersComponent,
    UpsertAnswersComponent,
    UpsertQuestionsComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
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
export class QuestionsModule { }
