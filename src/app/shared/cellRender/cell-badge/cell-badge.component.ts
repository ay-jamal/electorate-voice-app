import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell-badge.component.html',
  styleUrls: ['./cell-badge.component.scss']
})
export class CellBadgeComponent implements ICellRendererAngularComp {

  params: any;

  badgeTitle: string = '';
  badgeColor: string = '';

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params;
    this.badgeTitle = params['badgeTitle'];
    this.badgeColor = params['badgeColor'];
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
  }

}
