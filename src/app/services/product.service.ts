import {Injectable} from "@angular/core";
import { TeaType } from "../types/tea.type";
import {HttpClient} from "@angular/common/http";
import {data} from "../types/data.type";

@Injectable({
  providedIn: 'root'
})

export class HttpProductService {

  data: data | undefined ;

  constructor( private http: HttpClient ) {}

  getProducts() {
    return this.http.get<TeaType[]>('https://testologia.ru/tea');
  }


  order(data:data) {
    return this.http.post<{response:boolean, success:number, message:string }>('https://testologia.ru/order-tea', data)
  }


}
