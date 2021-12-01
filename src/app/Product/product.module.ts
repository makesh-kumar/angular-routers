import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  NewProductComponent,
  OldProductComponent,
  ProductComponent,
} from '../Product/product.component';

const productRoutes: Route[] = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'old',
    component: OldProductComponent,
  },
  {
    path: 'new',
    component: NewProductComponent,
  },
  {
    path: '',
    redirectTo: 'product',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  declarations: [ProductComponent, NewProductComponent, OldProductComponent],
})
export class ProductModule {}
