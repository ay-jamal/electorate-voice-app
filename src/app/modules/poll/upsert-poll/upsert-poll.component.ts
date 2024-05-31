import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { agCofigrations } from 'src/app/config/table.configration';
import { DialogCard } from 'src/app/core/classes/dialog-card';
import { ColDef } from 'ag-grid-community';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-upsert-poll',
  templateUrl: './upsert-poll.component.html',
  styleUrls: ['./upsert-poll.component.scss']
})
export class UpsertPollComponent extends DialogCard {

  @Input() editMode: boolean = false

  agConfig = new agCofigrations();
  selectedRows: any;
  rowData = []

  constructor(dialogRef: NbDialogRef<any>) {
    super(dialogRef)
  }

  PollForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    visibility: new FormControl(false, [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  })

  question = new FormControl('', [Validators.required])


  onRowSelection(event: any) {
    this.selectedRows = event.api.getSelectedRows();
  }


  submit() {
  }

  addToQuestionsList() {
    this.rowData = [...this.rowData, { id: this.rowData.length, question: this.question.value }];
    this.question.reset()
  }

  delete(params) {
    console.log(params);

    this.rowData = this.rowData.filter(item => item.id !== params.id);
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
            title: 'حذف',
            icon: 'trash',
            data: 1
          },
        ],
        clicked: params => {
          if (params.data == 1) {
            this.delete(params.params)
          }
        },
      },
    },
    {
      field: 'question',
      headerName: 'السؤال',
      flex: 1,
      cellRenderer: (params: any) => {
        return `
          <p  
          style="
          max-height: 100%;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: break-spaces;
          direction: rtl;
          font-size:12px;
          ">${params.value} </p>
        `
      }
    },
  ]

}
