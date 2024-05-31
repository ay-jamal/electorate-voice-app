import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbButton, NbButtonModule, NbIconModule, NbToastrService } from '@nebular/theme';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { agCofigrations } from 'src/app/config/table.configration';

@Component({
  selector: 'app-grid-menu-action',
  templateUrl: './grid-menu-action.component.html',
  styleUrls: ['./grid-menu-action.component.scss'],
  standalone: true,
  imports: [CommonModule, NbIconModule, FontAwesomeModule, NbButtonModule]
})
export class GridMenuActionComponent implements ICellRendererAngularComp {

  constructor(
    private elementRef: ElementRef,
    private toaster: NbToastrService,
  ) {
  }

  agConfig = new agCofigrations()

  toggleMenu: boolean = false
  public params: any;
  items: any = []
  rowLength: any
  rowIndex: any


  agInit(params: any): void {
    this.params = params;


    if (params['items'])
      this.items = params['items'].map((element: any) => {
        if (!element.functionality) return element;
        var Value = params.data[element.functionality.PropertyName] ? element.functionality.OnFalse : element.functionality.OnTrue;
        return {
          title: Value.Caption,
          icon: Value.Icon,
          data: Value.Data,
          color: Value.Color,
          subActionId: Value?.subActionId,
          permissions: Value?.permissions
        };
      });
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    throw new Error('Method not implemented.');
  }



  OnItemClick(event: any) {
    this.toggleMenu = false;
    this.params.clicked({
      params: this.params.data,
      data: event.data,
    })
  }

  onToggle() {
    this.toggleMenu = !this.toggleMenu
    if (this.toggleMenu) {
      setTimeout(() => {
        this.getElementsToBoundary()
      }, 0);
    }
  }

  getElementsToBoundary() {
    const menuAction = this.elementRef.nativeElement.querySelector('.menu-content');
    const tableWrapper = menuAction.closest('.ag-body');
    if (menuAction && tableWrapper) {
      this.calcElementBoundary(menuAction, tableWrapper)
    } else {
      this.toaster.warning('تنبيه من grid menu action', 'one of the assential elements for "grid menu action" are not exist');
      console.log('one of the assential elements for "grid menu action" are not exist');
    }
  }

  calcElementBoundary(targetEl: HTMLElement, relativeEl: HTMLElement) {
    const targetElRect = targetEl.getBoundingClientRect()
    const relativeElRect = relativeEl.getBoundingClientRect()
    const targetElBottomBoundary = relativeElRect.bottom - targetElRect.bottom;
    const targetElTopBoundary = targetElRect.top - relativeElRect.top;
    if (targetElRect.bottom > relativeElRect.bottom && targetElTopBoundary >= targetElRect.height) {
      targetEl.style.top = `-${targetElRect.height}px`
    }
    else if (targetElRect.bottom > relativeElRect.bottom && targetElTopBoundary < targetElRect.height) {
      targetEl.setAttribute('style', `
       top: 50%;
       transform: translateY(-50%);
    `)
    }


    console.log(targetElRect, relativeElRect, targetElBottomBoundary, targetElTopBoundary);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {

    if (!this.elementRef.nativeElement.contains(event.target))
      this.toggleMenu = false;
  }

}
