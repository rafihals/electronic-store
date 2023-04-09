import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CustomizeComponent } from './customize/customize.component';

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'customize', component: CustomizeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
