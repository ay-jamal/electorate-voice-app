import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DialogCard } from 'src/app/core/classes/dialog-card';

@Component({
  selector: 'app-upsert-candidates',
  templateUrl: './upsert-candidates.component.html',
  styleUrls: ['./upsert-candidates.component.scss']
})
export class UpsertCandidatesComponent extends DialogCard {

  @Input() editMode: boolean = false
  
  constructor(dialogRef: NbDialogRef<any>) {
    super(dialogRef)
  }

  submit() {
  }

}
