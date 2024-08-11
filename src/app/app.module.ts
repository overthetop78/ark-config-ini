import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardFooterComponent } from './dashboard/dashboard-footer/dashboard-footer.component';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Material } from './material';
import { CreateEngramsComponent } from './pages/create-engrams/create-engrams.component';
import { CreateLevelsComponent } from './pages/create-levels/create-levels.component';
import { CreateLevelMultiplierComponent } from './pages/create-level-multiplier/create-level-multiplier.component';
registerLocaleData(localeFr);
const lang: string = 'fr-FR';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent,
    CreateLevelsComponent,
    CreateEngramsComponent,
    CreateLevelMultiplierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Material
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: lang },
    { provide: LOCALE_ID, useValue: lang },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
