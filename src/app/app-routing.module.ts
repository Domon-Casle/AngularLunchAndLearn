import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowcustomersComponent } from './showcustomers/showcustomers.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'customer',
    component: ShowcustomersComponent
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
