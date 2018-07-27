import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { CotizadorComponent } from './modules/pages/cotizador/cotizador.component';
import { ConfiguradorComponent } from './modules/pages/configurador/configurador.component';
import { PromocionesComponent } from './modules/pages/promociones/promociones.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"cotizador", component:CotizadorComponent},
  {path:"configurador",component:ConfiguradorComponent},
  {path:"promociones",component:PromocionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
