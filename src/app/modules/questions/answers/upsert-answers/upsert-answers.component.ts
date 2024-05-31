import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { agCofigrations } from 'src/app/config/table.configration';
import { DialogCard } from 'src/app/core/classes/dialog-card';

@Component({
  selector: 'app-upsert-answers',
  templateUrl: './upsert-answers.component.html',
  styleUrls: ['./upsert-answers.component.scss']
})
export class UpsertAnswersComponent extends DialogCard {

  @Input() editMode: boolean = false

  agConfig = new agCofigrations();
  selectedRows: any;

  constructor(dialogRef: NbDialogRef<any>) {
    super(dialogRef)
  }

  submit() {
  }

}
