import { Component, OnInit } from '@angular/core';
import { agCofigrations } from 'src/app/config/table.configration';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { IsActiveComponent } from 'src/app/shared/cellRender/is-active/is-active.component';
import { ColDef } from 'ag-grid-community';
import { UsersService } from 'src/app/core/services/users.service';
import { NbDialogService } from '@nebular/theme';
import { UpsertUserComponent } from './upsert-user/upsert-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  agConfig = new agCofigrations();
  selectedRows: any;

  searchText: string = "";

  constructor(private usersService: UsersService, private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  onRowSelection(event: any) {
    this.selectedRows = event.api.getSelectedRows();
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (res) => {
        console.log(res)
        this.agConfig.rowData = res
      }
    })
  }


  openAddUser() {
    this.dialogService.open(UpsertUserComponent, {
      context: {
        editMode: false
      }
    }).onClose.subscribe({
      next: (res) => {
        if (!res) return;
        this.getUsers();
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
      field: 'login',
      headerName: 'اسم المستخدم'
    },
    {
      field: 'id',
      headerName: ' رقم المستخدم '
    },
  ]

}
