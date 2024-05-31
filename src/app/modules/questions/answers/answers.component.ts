import { Component, Injector, Input } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { agCofigrations } from 'src/app/config/table.configration';
import { DialogCard } from 'src/app/core/classes/dialog-card';
import { ColDef } from 'ag-grid-community';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { UpsertAnswersComponent } from './upsert-answers/upsert-answers.component';

@Component({
  selector: 'app-upsert-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent extends DialogCard {

  agConfig = new agCofigrations();
  selectedRows: any;
  rowData = []

  constructor(dialogRef: NbDialogRef<any>, private inject: Injector) {
    super(dialogRef)
  }

  onRowSelection(event: any) {
    this.selectedRows = event.api.getSelectedRows();
  }

  addAnswer() {
    let dialog = this.inject.get(NbDialogService)
    dialog.open(UpsertAnswersComponent, {
      context: {
        editMode: false
      }
    }).onClose.subscribe({
      next: (res) => {
        if (!res) return;
      }
    })
  }

  editAnswer() {
    let dialog = this.inject.get(NbDialogService)
    dialog.open(UpsertAnswersComponent, {
      context: {
        editMode: true
      }
    }).onClose.subscribe({
      next: (res) => {
        if (!res) return;
      }
    })
  }

  submit() {
  }

  columnDefs: ColDef[] = [
    {
      field: '',
      headerName: '',
      sortable: false,
      cellRenderer: GridMenuActionComponent,
      maxWidth: 100,
      cellRendererParams: {
        items: [
          {
            title: 'تعديل',
            icon: 'trash',
            data: 1
          },
          {
            title: 'حذف',
            icon: 'trash',
            data: 2
          },
        ],
        clicked: params => {
          if (params.data == 1) {
            this.editAnswer()
          }
        },
      },
    },
    {
      field: '',
      headerName: 'الجواب'
    }
  ]

}
