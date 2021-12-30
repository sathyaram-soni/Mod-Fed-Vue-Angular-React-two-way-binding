import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VueWrapperComponent } from './vue-wrapper/vue-wrapper.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';
import { SharedGridComponent } from './shared-grid/shared-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VueWrapperComponent,
    ReactWrapperComponent,
    SharedGridComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
