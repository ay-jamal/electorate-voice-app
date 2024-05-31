import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { agCofigrations } from 'src/app/config/table.configration';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {

  agConfig = new agCofigrations();
  selectedRows: any;


  onRowSelection(event: any) {
    this.selectedRows = event.api.getSelectedRows();
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
            title: 'تعديل',
            icon: 'edit',
            data: 1
          },
          {
            title: 'حذف',
            icon: 'trash',
            data: 4
          },
        ],
        clicked: params => {
        },
      },
    },
    {
      field: '',
      headerName: 'الاستطلاع'
    },
    {
      field: '',
      headerName: 'النتيجة'
    },
  ]


}
