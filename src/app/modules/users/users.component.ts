import { Component } from '@angular/core';
import { agCofigrations } from 'src/app/config/table.configration';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { IsActiveComponent } from 'src/app/shared/cellRender/is-active/is-active.component';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

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
            title: '',
            data: 0,
            functionality: {
              PropertyName: 'isActive',
              OnTrue: {
                Caption: 'تغيير الحالة ',
                Icon: 'toggle',
                Data: 2,
              },
              OnFalse: {
                Caption: ' تغيير الحالة',
                Icon: 'toggle',
                Data: 3,
              }
            }
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
      headerName: 'الحالة',
      cellRenderer: IsActiveComponent,
      cellRendererParams: (params: any) => {
        return {
          className: params.data.isActive ? 'active' : 'notActive',
          label: params.data.isActive ? 'مفعل' : 'غير مفعل',
        }
      }
    },
    {
      field: '',
      headerName: 'العنوان'
    },
    {
      field: '',
      headerName: 'البريد الالكتروني'
    },
    {
      field: '',
      headerName: 'رقم الهاتف'
    },
    {
      field: '',
      headerName: 'اسم المستخدم'
    },
  ]

}
