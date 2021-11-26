// Angular
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

// Notifications Routing
import {ProductsComponent} from './products.component';
import {ProductsRoutingModule} from './products-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  declarations: [
    ProductsComponent,
  ]
})
export class ProductsModule {
}
