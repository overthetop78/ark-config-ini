import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEngramsComponent } from './pages/create-engrams/create-engrams.component';
import { CreateLevelMultiplierComponent } from './pages/create-level-multiplier/create-level-multiplier.component';
import { CreateLevelsComponent } from './pages/create-levels/create-levels.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'create-levels', component: CreateLevelsComponent },
      { path: 'create-engrams', component: CreateEngramsComponent },
      { path: 'create-level-multiplier', component: CreateLevelMultiplierComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
