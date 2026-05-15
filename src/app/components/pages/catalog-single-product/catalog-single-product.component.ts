import {Component, OnInit} from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {SaveSingleProductService} from "../../../services/save-single-product.service";

@Component({
  selector: 'app-catalog-single-product',
  templateUrl: './catalog-single-product.component.html',
  styleUrls: ['./catalog-single-product.component.css']
})

export class CatalogSingleProductComponent implements OnInit {

  constructor( private SaveSingleProductService:SaveSingleProductService ) {

  }

  product: TeaType | undefined;

  ngOnInit(): void {

      this.product = this.SaveSingleProductService.getProduct();
      console.log(this.product);


  }

}
