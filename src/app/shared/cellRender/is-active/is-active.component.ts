import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-is-active',
  templateUrl: './is-active.component.html',
  styleUrls: ['./is-active.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class IsActiveComponent implements ICellRendererAngularComp {

  params: any
  className = 'active'
  label = 'مفعل'

  agInit(params: any): void {
    this.params = params

    if (params['label']) this.label = params['label']
    if ([params['className']]) this.className = params['className']

  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error('Method not implemented.');
  }

}
