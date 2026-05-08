import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {CatalogSingleProductComponent} from "./components/pages/catalog-single-product/catalog-single-product.component";
import {OrderFormComponent} from "./components/pages/order-form/order-form.component";

const routes: Routes = [
  {path:'', component: MainComponent },
  {path:'catalog', component: CatalogComponent},
  {path:'catalog/catalog-single-product', component: CatalogSingleProductComponent},
  {path:'catalog/catalog-single-product/order-form', component: OrderFormComponent},
];

 @NgModule({
   imports: [RouterModule.forRoot(routes,  {anchorScrolling:'enabled'})],
   exports: [RouterModule]
 })

export class AppRoutingModule { }
