import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubfeatureRoutingModule } from './subfeature-routing.module';
import { ExampleComponent } from './components/example/example.component';


@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    SubfeatureRoutingModule
  ]
})
export class SubfeatureModule { }
