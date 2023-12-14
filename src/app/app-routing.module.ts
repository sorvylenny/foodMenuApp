import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListfoodComponent } from './Components/pages/listfood/listfood.component';
import { DetailsFoodComponent } from './Components/pages/details-food/details-food.component';

const routes: Routes = [
  { path: '', redirectTo: 'listFood', pathMatch:'full'},
  { path: 'listFood', component: ListfoodComponent },
  { path: 'detailsFood/:id', component: DetailsFoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
