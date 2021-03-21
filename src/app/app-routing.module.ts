import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
