import {Component, OnInit} from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {HttpProductService} from "../../../services/product.service";
import {tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-catalog-single-product',
  templateUrl: './catalog-single-product.component.html',
  styleUrls: ['./catalog-single-product.component.css']
})

export class CatalogSingleProductComponent implements OnInit {


  constructor(
               private HttpProductService:HttpProductService,
               private router: Router,
               private activatedRoute:ActivatedRoute) {

  }

  product: TeaType | undefined;
  products: TeaType[] = [];
  loader: boolean = false;
  id: number = 0;
  title: string | undefined = "";

  ngOnInit(): void {


    this.loader = true;

    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params['id'];

    })

    this.HttpProductService.getProducts()
      .pipe(
        tap( () => {
          this.loader = false;
        })
      )
      .subscribe(   {
          next: ( response:TeaType[] )=> {
            this.products = response;
            this.product = this.products.find( item => item.id == this.id);

          },
          error: ( error )=> {
            console.log( error );
          }
        }
      )

  }

  onClick() {
    this.title = this.product?.title;
    this.router.navigate(['catalog/catalog-single-product/order-form'], {queryParams: {title: this.title}});
  }

}
