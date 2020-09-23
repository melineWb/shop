import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { ProfileModule } from './profile/profile.module';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ProfileModule,
    LayoutModule,
    AppRoutingModule,
    AdminModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

