import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gifscomponent } from './componentes/gifs/gifs.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';

const routes: Routes = [
  
  { path: '', component: BuscarComponent },
  { path: 'resultados/:d', component: Gifscomponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
