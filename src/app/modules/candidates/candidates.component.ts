import { Component, Injector, OnInit } from '@angular/core';
import { agCofigrations } from 'src/app/config/table.configration';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { IsActiveComponent } from 'src/app/shared/cellRender/is-active/is-active.component';
import { ColDef } from 'ag-grid-community';
import { NbDialogService } from '@nebular/theme';
import { UpsertCandidatesComponent } from './upsert-candidates/upsert-candidates.component';
import { CandidatesService } from 'src/app/core/services/candidates.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  constructor(
    private inject: Injector,
    private CandidatesService: CandidatesService
  ) {
  }

  filterObject = {
    name: null
  }

  ngOnInit(): void {
    this.getCandidates()
  }

  getCandidates() {
    this.CandidatesService.getCandidates(this.filterObject).subscribe({
      next: (res) => {
        this.agConfig.rowData = res.candidates
      }
    })
  }

  agConfig = new agCofigrations();
  selectedRows: any;

  onRowSelection(event: any) {
    this.selectedRows = event.api.getSelectedRows();
  }

  addCandidate() {
    let dialog = this.inject.get(NbDialogService)
    dialog.open(UpsertCandidatesComponent, {
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
    // {
    //   field: '',
    //   headerName: 'الحالة',
    //   cellRenderer: IsActiveComponent,
    //   cellRendererParams: (params: any) => {
    //     return {
    //       className: params.data.isActive ? 'active' : 'notActive',
    //       label: params.data.isActive ? 'مفعل' : 'غير مفعل',
    //     }
    //   }
    // },
    {
      field: 'name',
      headerName: 'اسم المرشح'
    },
    {
      field: 'candidateID',
      headerName: 'رقم المرشح',
      maxWidth: 50
    },
  ]

}
