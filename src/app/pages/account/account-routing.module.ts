import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccountPage} from './account.page';
import {RegistryComponent} from './registry/registry.component';
import {LoginComponent} from './login/login.component';
import {ResetComponent} from './reset/reset.component';

const routes: Routes = [

  {
    path: '',
    component: AccountPage
  },
  {
    path: 'registry',
    component: RegistryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reset',
    component: ResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {
}
