import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TeaType} from "../../../types/tea.type";
import {SaveSingleProductService} from "../../../services/save-single-product.service";
import {tap} from "rxjs";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor( private  http: HttpClient, private SaveSingleProductService: SaveSingleProductService ) { }

  products: TeaType[] = [];
  loader: boolean = false;



  ngOnInit(): void {
    this.loader = true;
    this.http.get<TeaType[]>('https://testologia.ru/tea')
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
