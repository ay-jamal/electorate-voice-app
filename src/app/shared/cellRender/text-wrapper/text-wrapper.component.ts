import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-text-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-wrapper.component.html',
  styleUrls: ['./text-wrapper.component.scss']
})
export class TextWrapperComponent implements ICellRendererAngularComp {

  params
  color
  bgColor: any;


  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params
    if (params['bgColor']) this.bgColor = params['bgColor']
    if (params['color']) this.color = params['color']

  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error('Method not implemented.');
  }

}
