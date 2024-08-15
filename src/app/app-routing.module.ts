import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBreedingSettingsComponent } from './pages/create-breeding-settings/create-breeding-settings.component';
import { CreateConfigFileComponent } from './pages/create-config-file/create-config-file.component';
import { CreateDinoSettingsComponent } from './pages/create-dino-settings/create-dino-settings.component';
import { CreateDinoSpawnWeightMultiplierComponent } from './pages/create-dino-spawn-weight-multiplier/create-dino-spawn-weight-multiplier.component';
import { CreateDlcGenesisSettingsComponent } from './pages/create-dlc-genesis-settings/create-dlc-genesis-settings.component';
import { CreateEngramSettingsComponent } from './pages/create-engram-settings/create-engram-settings.component';
import { CreateEngramsComponent } from './pages/create-engrams/create-engrams.component';
import { CreateFarmingSettingsComponent } from './pages/create-farming-settings/create-farming-settings.component';
import { CreateGameplaySettingsComponent } from './pages/create-gameplay-settings/create-gameplay-settings.component';
import { CreateLevelMultiplierComponent } from './pages/create-level-multiplier/create-level-multiplier.component';
import { CreateLevelsComponent } from './pages/create-levels/create-levels.component';
import { CreateLootSettingsComponent } from './pages/create-loot-settings/create-loot-settings.component';
import { CreateObjectConfigComponent } from './pages/create-object-config/create-object-config.component';
import { CreatePlayerSettingsComponent } from './pages/create-player-settings/create-player-settings.component';
import { CreatePveSettingsComponent } from './pages/create-pve-settings/create-pve-settings.component';
import { CreatePvpSettingsComponent } from './pages/create-pvp-settings/create-pvp-settings.component';
import { CreateRecipeSettingsComponent } from './pages/create-recipe-settings/create-recipe-settings.component';
import { CreateResourceSettingsComponent } from './pages/create-resource-settings/create-resource-settings.component';
import { CreateStructureSettingsComponent } from './pages/create-structure-settings/create-structure-settings.component';
import { CreateXpSettingsComponent } from './pages/create-xp-settings/create-xp-settings.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'create-levels', component: CreateLevelsComponent },
      { path: 'create-engrams', component: CreateEngramsComponent },
      { path: 'create-level-multiplier', component: CreateLevelMultiplierComponent },
      { path: 'create-dino-spawn-weight-multiplier', component: CreateDinoSpawnWeightMultiplierComponent },
      { path: 'create-breeding-settings', component: CreateBreedingSettingsComponent },
      { path: 'create-dino-settings', component: CreateDinoSettingsComponent },
      { path: 'create-gameplay-settings', component: CreateGameplaySettingsComponent },
      { path: 'create-farming-settings', component: CreateFarmingSettingsComponent },
      { path: 'create-loot-settings', component: CreateLootSettingsComponent },
      { path: 'create-player-settings', component: CreatePlayerSettingsComponent },
      { path: 'create-pve-settings', component: CreatePveSettingsComponent },
      { path: 'create-pvp-settings', component: CreatePvpSettingsComponent },
      { path: 'create-recipe-settings', component: CreateRecipeSettingsComponent },
      { path: 'create-resource-settings', component: CreateResourceSettingsComponent },
      { path: 'create-structure-settings', component: CreateStructureSettingsComponent },
      { path: 'create-engram-settings', component: CreateEngramSettingsComponent },
      { path: 'create-xp-settings', component: CreateXpSettingsComponent },
      { path: 'create-dlc-genesis-settings', component: CreateDlcGenesisSettingsComponent },
      { path: 'create-object-config', component: CreateObjectConfigComponent },
      { path: 'create-config-file', component: CreateConfigFileComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
