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
    loadChildren: './subfeature/subfeature.module#SubfeatureModule' // This will cause lazy loading of the sub module. This means we dont send this 'pack' to the user until they hit this route AKA we only load WHAT they need at that time.
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
