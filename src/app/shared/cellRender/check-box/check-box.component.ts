import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCheckboxModule } from '@nebular/theme';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  standalone: true,
  imports: [CommonModule, NbCheckboxModule, FormsModule],
  template: `<nb-checkbox
  *ngIf="!show && !isDisabled" 
  (checkedChange)="checkedChange()" 
  [(checked)]="checked" 
  [disabled]="isDisabled"
  >
    {{checkLabel}}
    </nb-checkbox>`,
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements ICellRendererAngularComp {

  params: any;
  checkLabel = ''
  isDisabled = true;
  show = false;
  checked = false;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params

    if (params.hasOwnProperty("isDisabled")) {
      this.isDisabled = params["isDisabled"]
    }
    if (!this.isDisabled) {
      this.checked = params['value']
    }
  }

  checkedChange() {

    if (!this.params['clicked']) return false

    this.checked = !this.checked;

    this.params['value'] = this.checked
    this.params.clicked({
      params: this.params,
      checked: this.checked
    })

  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true
    throw new Error('Method not implemented.');
  }
}
