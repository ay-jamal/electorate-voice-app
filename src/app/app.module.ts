import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NbButtonModule, NbDialogModule, NbIconLibraries, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ResultsComponent } from './modules/results/results.component';
import { TokenInterceptorService } from './core/interceptors/token-interceptor.service';

const ProjectConfigrations = (config: ConfigService) => {
  return () => {
    config.LoadConfigrations();
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot(),
    NbButtonModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    AgGridModule,
    FontAwesomeModule,
    NbToastrModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ProjectConfigrations,
      multi: true,
      deps: [ConfigService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    library: FaIconLibrary,
    private iconLibraries: NbIconLibraries,
  ) {
    library.addIconPacks(fas, far);
    this.iconLibraries.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('fab', { packClass: 'fab', iconClassPrefix: 'fa' });
    this.iconLibraries.setDefaultPack('fas');

    this.iconLibraries.registerSvgPack('figma-icons', {
      'doc-text': '<img src="./assets/icons/doc-text.png" width="35px" />',
      'person-text': '<img src="./assets/icons/person-text.png" width="35px" />',
      'statistics': '<img src="./assets/icons/statistics.png" width="35px" />',
      'settings': '<img src="./assets/icons/settings.png" width="35px" />',
      'person-circle': '<img src="./assets/icons/person-circle.png" width="35px" />',
      'arrow-down': '<img src="./assets/icons/arrow-down.png" width="35px" />',
      'grade-hat': '<img src="./assets/icons/grade-hat.png" width="35px" />',
      'lock': '<img src="./assets/icons/lock.png" width="35px" />',
      'edit': '<img src="./assets/icons/edit.png" width="35px" />',
      'trash': '<img src="./assets/icons/trash.png" width="35px" />',
      'users': '<img src="./assets/icons/users.png" width="35px" />',
      'toggle': '<img src="./assets/icons/toggle.png" width="35px" />',
      'account_balance_wallet': '<img src="./assets/icons/account_balance_wallet.png" width="35px" />',
      'account_balance': '<img src="./assets/icons/account_balance.png" width="35px" />',
      'assignment': '<img src="./assets/icons/assignment.png" width="35px" />',
      'payments': '<img src="./assets/icons/payments.png" width="35px" />',
      'point_of_sale': '<img src="./assets/icons/point_of_sale.png" width="35px" />',
      'export': '<img src="./assets/icons/export.png" width="35px" />',
      'camera': '<img src="./assets/icons/camera.png" width="35px" />',
      'person-crop': '<img src="./assets/icons/person-crop.png" width="35px" />',
      'arrow-left-arrow-right': '<img src="./assets/icons/arrow-left-arrow-right-circle.png" width="35px" />',
      'eye': '<img src="./assets/icons/eye.png" width="35px" />',
      'printer': '<img src="./assets/icons/printer.png" width="35px" />',
      'low_priority': '<img src="./assets/icons/low_priority.png" width="35px" />',
      'book': '<img src="./assets/icons/book.png" width="35px" />',
      'invoice': '<img src="./assets/icons/invoice.png" width="35px" />',
      'price_change': '<img src="./assets/icons/price_change.png" width="35px" />',
      'House': '<img src="./assets/icons/House.png" width="35px" />',
      'plus': '<img src="./assets/icons/plus.png" width="35px" />',
      'box': '<img src="./assets/icons/box.png" width="35px" />',
      'Book-Outline': '<img src="./assets/icons/Book-Outline.png" width="35px" />',
      'minus': '<img src="./assets/icons/minus.png" width="10px" height="3px" />',
      'Menu': '<img src="./assets/icons/Menu.png" width="35px" />',
      'list-bullet-circle': '<img src="./assets/icons/list-bullet-circle.png" width="35px" />',
    });
  }
}
