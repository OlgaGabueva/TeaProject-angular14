import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgwWowModule} from "ngx-wow";
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/common/header/header.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { CatalogSingleProductComponent } from './components/pages/catalog-single-product/catalog-single-product.component';
import { OrderFormComponent } from './components/pages/order-form/order-form.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogComponent,
    CatalogSingleProductComponent,
    OrderFormComponent,


  ],
  imports: [
    BrowserModule,
    NgwWowModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
