import { Component, OnInit } from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {tap} from "rxjs";
import {HttpProductService} from "../../../services/product.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(

               private HttpProductService:HttpProductService,
               private router: Router) { }

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

          },
            error: ( error )=> {
            console.log( error );
          }
          }
      )
  }

  onClick(product:TeaType) {
       this.router.navigate(['catalog/catalog-single-product'], {queryParams: {id: product.id}});
  }


}
