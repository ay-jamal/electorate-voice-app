import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbUserModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { CryptoService } from '../../services/global/crypto.service';
import { ProgressBarServiceService } from '../../services/global/progress-bar-service.service';
import { ToggleMenuComponent } from 'src/app/shared/components/toggle-menu/toggle-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NbIconModule,
    RouterModule,
    NbUserModule,
    HeaderMenuComponent,
    ToggleMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  encryptedData
  decryptedData

  ShowProgress = false;
  userMenu: boolean = true;

  constructor(
    private cryptoService: CryptoService,
    public progressbar: ProgressBarServiceService,
  ) {
    // this.encryptedData = localStorage.getItem('EsemsUserData');
    // this.decryptedData = cryptoService.decryptData(this.encryptedData);
    // console.log(this.decryptedData);
    // //  this.BranchHandlerService.setSignalValue(this.decryptedData.branches[0])
  }


  financialAccountsRoutes = [
    {
      title: ' قائمة الحسابات',
      icon: 'book',
      path: '/home/financial-accounts/accounts-list'
    },
    {
      title: ' دفتر اليومية / القيود',
      icon: 'doc-text',
      path: '/home/financial-accounts/daily-record'
    },
    {
      title: ' قائمة الفواتير',
      icon: 'invoice',
      path: '/home/financial-accounts/invoices-list'
    },
    {
      title: ' قائمة المصروفات',
      icon: 'price_change',
      path: '/home/financial-accounts/expense-list'
    },
    {
      title: ' قائمة السندات',
      icon: 'doc-text',
      path: '/home/financial-accounts/bonds-list'
    },
    {
      title: '  سند التخفيض',
      icon: '',
      path: ''
    },
    {
      title: '  سند الصرف',
      icon: '',
      path: ''
    },
    {
      title: '  سند القبض',
      icon: '',
      path: ''
    },
    {
      title: ' سند التحويل',
      icon: '',
      path: ''
    },
    {
      title: 'حركة الحساب',
      icon: 'low_priority',
      path: '/home/financial-accounts/account-movment'
    },
    {
      title: 'حركة الخزينة والمصارف',
      icon: 'account_balance',
      path: '/home/financial-accounts/treasury-and-bank'
    },
  ]

  ngOnInit(): void {
    this.progressbar.isLoading.subscribe(
      res => {
        setTimeout(() => { this.ShowProgress = res }, 0)
      });
  }

}
