import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {ProductAddComponent} from "./components/product-add/product-add.component";

const routes: Routes = [
  { path: "products", component:ProductsComponent},
  { path: "newProduct", component:ProductAddComponent},
  { path: "editProduct/:id", component:ProductEditComponent},
  { path: "", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
