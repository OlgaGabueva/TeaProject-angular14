import { Injectable } from '@angular/core';
import {TeaType} from "../types/tea.type";


@Injectable({
  providedIn: 'root'
})

export class SaveSingleProductService {
  private tea: TeaType = {

    id: 0,
    description: '',
    image: '',
    price: 0,
    title: '',

  } ;

  constructor( )  {

  }

  saveProduct (product:TeaType){
   if (product) {
     this.tea = product;
   }


  }

  getProduct () {
    return this.tea;
  }

}
