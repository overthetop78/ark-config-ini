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
import { CreateBreedingSettingsComponent } from './pages/create-breeding-settings/create-breeding-settings.component';
import { CreateDinoSettingsComponent } from './pages/create-dino-settings/create-dino-settings.component';
import { CreateDinoSpawnWeightMultiplierComponent } from './pages/create-dino-spawn-weight-multiplier/create-dino-spawn-weight-multiplier.component';
import { CreateEngramsComponent } from './pages/create-engrams/create-engrams.component';
import { CreateFarmingSettingsComponent } from './pages/create-farming-settings/create-farming-settings.component';
import { CreateGameplaySettingsComponent } from './pages/create-gameplay-settings/create-gameplay-settings.component';
import { CreateLevelMultiplierComponent } from './pages/create-level-multiplier/create-level-multiplier.component';
import { CreateLevelsComponent } from './pages/create-levels/create-levels.component';
import { CreateLootSettingsComponent } from './pages/create-loot-settings/create-loot-settings.component';
import { CreatePlayerSettingsComponent } from './pages/create-player-settings/create-player-settings.component';
import { CreatePveSettingsComponent } from './pages/create-pve-settings/create-pve-settings.component';
import { CreatePvpSettingsComponent } from './pages/create-pvp-settings/create-pvp-settings.component';
import { CreateRecipeSettingsComponent } from './pages/create-recipe-settings/create-recipe-settings.component';
import { CreateResourceSettingsComponent } from './pages/create-resource-settings/create-resource-settings.component';
import { CreateStructureSettingsComponent } from './pages/create-structure-settings/create-structure-settings.component';
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
    CreateDinoSpawnWeightMultiplierComponent,
    CreateBreedingSettingsComponent,
    CreateDinoSettingsComponent,
    CreateGameplaySettingsComponent,
    CreateFarmingSettingsComponent,
    CreateLootSettingsComponent,
    CreatePlayerSettingsComponent,
    CreatePveSettingsComponent,
    CreatePvpSettingsComponent,
    CreateRecipeSettingsComponent,
    CreateResourceSettingsComponent,
    CreateStructureSettingsComponent,
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
