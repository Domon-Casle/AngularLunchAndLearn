import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { HomeComponent } from './components/home/home.component';
import { ShowcustomersComponent } from './components/showcustomers/showcustomers.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'customer',
    component: ShowcustomersComponent
  },
  {
    path: 'subfeature',
    loadChildren: './subfeature/subfeature.module#SubfeatureModule'
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes, 
      {
        preloadingStrategy: SelectivePreloadingStrategy,
      }
    ) 
  ],
  exports: [ 
    RouterModule 
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
