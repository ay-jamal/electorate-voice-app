import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toggle-menu',
  standalone: true,
  imports: [CommonModule, NbIconModule, RouterModule],
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss']
})
export class ToggleMenuComponent {

  @Input({ required: true }) name
  @Input({ required: true }) items
  @Input({ required: true }) icon

  userMenu: boolean = false

  constructor(
    private elementRef: ElementRef,
  ) {
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target))
      this.userMenu = false;
  }

}
