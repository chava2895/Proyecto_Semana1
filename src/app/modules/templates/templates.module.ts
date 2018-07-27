import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ContainerComponent } from './container/container.component';
import { PagesModule } from '../pages/pages.module';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports:[ContainerComponent],
  declarations: [HeaderComponent, FooterComponent, MainComponent, ContainerComponent]
})
export class TemplatesModule { }