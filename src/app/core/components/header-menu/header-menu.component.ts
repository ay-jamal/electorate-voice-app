import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NbIconModule } from '@nebular/theme';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, NbIconModule, RouterModule, FontAwesomeModule]
})
export class HeaderMenuComponent {

  @Input({ required: true }) name: string
  @Input() userImage

  encryptedData: string | null;
  decryptedData: any;

  userMenu: boolean = false

  branchId
  constructor(
    private route: Router,
    private elementRef: ElementRef,
    public authService: AuthService
  ) {

  }


  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target))
      this.userMenu = false;
  }

}
