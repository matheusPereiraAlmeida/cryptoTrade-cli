import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './components/selection/selection.component';
import { MainComponent } from './components/main/main.component'

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'selection/:id/:moedaDeOrigem/:moedaDeDestino/:quantidadeDaMoedaDeOrigem', component: SelectionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
