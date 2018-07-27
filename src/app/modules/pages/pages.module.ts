import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AutosComponent } from './autos/autos.component';
import { ContenedorautosComponent } from './contenedorautos/contenedorautos.component';
import { ConfiguradorComponent } from './configurador/configurador.component';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[HomeComponent],
  declarations: [HomeComponent, AutosComponent, ContenedorautosComponent, ConfiguradorComponent, CotizadorComponent, PromocionesComponent]
})
export class PagesModule { }
