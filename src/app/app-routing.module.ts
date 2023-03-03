import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { DocumentsComponent } from './pages/documents/documents.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'proyects',component:ProyectsComponent},
  {path:'documents',component:DocumentsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
