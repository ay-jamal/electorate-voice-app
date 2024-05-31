import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbButtonModule, NbCardModule, NbDialogRef, NbInputModule } from '@nebular/theme';

@Component({
  selector: 'app-conferm-delete-box',
  templateUrl: './conferm-delete-box.component.html',
  styleUrls: ['./conferm-delete-box.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, NbCardModule,
    NbButtonModule,
  ]
})
export class ConfirmDeleteBoxComponent {

  @Input() message = 'تأكيد عملية الحذف';
  @Input() subMessage = 'هل انت متأكد بأنك تريد حذف البيانات ؟';

  constructor(
    private dailogRef: NbDialogRef<any>,

  ) { }

  Close(state) {

    this.dailogRef.close(state)
  }
}
