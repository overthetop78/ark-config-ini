import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Material } from './material';
import { DashboardComponent } from './dashboard/dashboard.component';
registerLocaleData(localeFr);
const lang: string = 'fr-FR';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: lang },
    { provide: LOCALE_ID, useValue: lang },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
