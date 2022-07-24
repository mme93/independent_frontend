import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import {ResetComponent} from './reset/reset.component';
import {LoginComponent} from './login/login.component';
import {RegistryComponent} from './registry/registry.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  declarations: [AccountPage,ResetComponent,LoginComponent,RegistryComponent]
})
export class AccountPageModule {}
