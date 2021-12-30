import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SharedGridComponent } from '../shared-grid/shared-grid.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [SharedGridComponent],
})
export class BootstraploaderModule {}
