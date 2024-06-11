import { Component, Injector, OnInit } from '@angular/core';
import { agCofigrations } from 'src/app/config/table.configration';
import { GridMenuActionComponent } from 'src/app/shared/cellRender/grid-menu-action/grid-menu-action.component';
import { IsActiveComponent } from 'src/app/shared/cellRender/is-active/is-active.component';
import { ColDef } from 'ag-grid-community';
import { NbDialogService, NbToastrService } from '@nebular/theme';
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
    private CandidatesService: CandidatesService,
    private toastr: NbToastrService
  ) {
  }


  ngOnInit(): void {
    this.getCandidates()
  }

  getCandidates() {
    this.CandidatesService.getCandidates().subscribe({
      next: (res) => {
        console.log(res);
        this.agConfig.rowData = res
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
        this.getCandidates()
      }
    })
  }

  editCandidate(candidate) {
    let dialog = this.inject.get(NbDialogService)
    dialog.open(UpsertCandidatesComponent, {
      context: {
        editMode: true,
        candidate
      }
    }).onClose.subscribe({
      next: (res) => {
        if (!res) return;
        this.getCandidates()
      }
    })
  }

  deleteCandidate() {
    this.CandidatesService.deleteCandidates(this.selectedRows[0].id).subscribe({
      next: (res) => {
        this.toastr.success("تمت العملية", "تم حذف المرشح بنجاح");
        this.getCandidates()
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
            title: 'حذف',
            icon: 'trash',
            data: 2
          },
        ],
        clicked: params => {
          if (params.data == 1) {
            this.editCandidate(params.params)
          }
          if (params.data == 2) {
            this.deleteCandidate()
          }
        },
      },
    },
    {
      field: 'keyIssues',
      headerName: 'القضايا الرئيسية '
    },
    {
      field: 'achievements',
      headerName: 'الإنجازات '
    },
    {
      field: 'biography',
      headerName: 'سيرة شخصية'
    },
    {
      field: 'party',
      headerName: 'الحجزب'
    },
    {
      field: 'name',
      headerName: 'اسم المرشح'
    },
    {
      field: 'id',
      headerName: 'رقم المرشح',
      maxWidth: 50
    },
  ]

}
