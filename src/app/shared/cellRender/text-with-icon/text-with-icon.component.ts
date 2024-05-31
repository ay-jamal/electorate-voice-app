import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { NbIconModule } from '@nebular/theme';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-text-with-icon',
  standalone: true,
  imports: [CommonModule, NbIconModule, RouterModule],
  templateUrl: './text-with-icon.component.html',
  styleUrls: ['./text-with-icon.component.scss']
})
export class TextWithIconComponent implements ICellRendererAngularComp {

  constructor(
    private router: Router
  ) {

  }

  params

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

  onCellClecked() {
    console.log(this.params.data.studentInfoId);
    this.router.navigate([`/home/student-file`], { queryParams: { studentInfoId: this.params.data.studentInfoId } })
  }

}
