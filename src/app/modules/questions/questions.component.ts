import { Component, Inject, Injector, OnInit } from '@angular/core';
import { agCofigrations } from 'src/app/config/table.configration';
import { ColDef } from 'ag-grid-community';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { NbDialogService } from '@nebular/theme';
import { AnswersComponent } from './answers/answers.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  agConfig = new agCofigrations();
  selectedRows: any;

  constructor(
    private inject:Injector
  ) {
  }

  ngOnInit(): void {
   this.addAnswer()
  }

  onRowSelection(event: any) {
    this.selectedRows = event.api.getSelectedRows();
  }

  addAnswer(){
    let dialog = this.inject.get(NbDialogService)
    dialog.open(AnswersComponent).onClose.subscribe({
      next:(res)=>{
        if(!res)return;

      }
    })
  }

  columnDefs: ColDef[] = [
    {
      field: '',
      headerName: '',
      sortable: false,
      cellRenderer: GridMenuActionComponent,
      cellRendererParams: {
        items: [
          {
            title: 'الأجوبة',
            icon: 'assignment',
            data: 1
          },
          {
            title: 'تعديل',
            icon: 'edit',
            data: 2
          },
          {
            title: 'حذف',
            icon: 'trash',
            data: 3
          },
        ],
        clicked: params => {
        },
      },
    },

    {
      field: '',
      headerName: 'السؤال'
    },
  ]
}
