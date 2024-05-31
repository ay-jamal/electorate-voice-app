import { Component, Injector, OnInit } from '@angular/core';
import { agCofigrations } from 'src/app/config/table.configration';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { ColDef } from 'ag-grid-community';
import { NbDialogService } from '@nebular/theme';
import { UpsertPollComponent } from './upsert-poll/upsert-poll.component';
import { Router } from '@angular/router';
import { PollService } from 'src/app/core/services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {

  agConfig = new agCofigrations();
  selectedRows: any;

  constructor(
    private inject: Injector,
    private router: Router,
    private PollService: PollService
  ) {
  }

  ngOnInit(): void {
  }

  getPolls() {
    this.PollService.getPolls().subscribe({
      next: (res) => {
        this.agConfig.rowData = res.polls
      }
    })
  }

  onRowSelection(event: any) {
    this.selectedRows = event.api.getSelectedRows();
  }

  addPoll() {
    let dialog = this.inject.get(NbDialogService)
    dialog.open(UpsertPollComponent, {
      context: {
        editMode: false
      }
    }).onClose.subscribe({
      next: (res) => {
        if (!res) return;
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
            title: 'عرض اسئلة الاستطلاع',
            icon: 'book',
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
          if (params.data == 1) {
            this.router.navigate([`/home/questions/${params.params.id}`])
          }
        },
      },
    },
    {
      field: '',
      headerName: 'تاريخ انتهاء الاستطلاع'
    },
    {
      field: '',
      headerName: 'وصف',
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
    {
      field: 'content',
      headerName: 'العنوان'
    },
    {
      field: 'questionID',
      headerName: 'رقم السؤال'
    },
  ]
}
