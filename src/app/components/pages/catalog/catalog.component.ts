import { Component, OnInit } from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {SaveSingleProductService} from "../../../services/save-single-product.service";
import {tap} from "rxjs";
import {HttpProductService} from "../../../services/product.service";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(
               private SaveSingleProductService: SaveSingleProductService ,
               private HttpProductService:HttpProductService) { }

  products: TeaType[] = [];
  loader: boolean = false;



  ngOnInit(): void {
    this.loader = true;
    this.HttpProductService.getProducts()
      .pipe(
        tap( () => {
          this.loader = false;
        })
      )
      .subscribe(   {
          next: ( response:TeaType[] )=> {
            this.products = response;
            console.log(this.products);
          },
            error: ( error )=> {
            console.log( error );
          }
          }
      )
  }

  onClick(product:TeaType) {
    this.SaveSingleProductService.saveProduct(product);
  }


}
