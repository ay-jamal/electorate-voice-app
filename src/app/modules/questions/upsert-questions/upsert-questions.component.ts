import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DialogCard } from 'src/app/core/classes/dialog-card';

@Component({
  selector: 'app-upsert-questions',
  templateUrl: './upsert-questions.component.html',
  styleUrls: ['./upsert-questions.component.scss']
})
export class UpsertQuestionsComponent extends DialogCard {

  @Input() editMode: boolean = false

  constructor(dialogRef: NbDialogRef<any>) {
    super(dialogRef)
  }

  submit() {
  }
}
