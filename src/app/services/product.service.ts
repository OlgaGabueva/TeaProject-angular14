import {Injectable} from "@angular/core";
import { TeaType } from "../types/tea.type";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {
  private products: TeaType[]= [];

  constructor( private http: HttpClient ) {}

  getProducts() {
    return this.http.get<TeaType[]>('https://testologia.ru/tea');
  }

  getProductById(id: number) {
    this.http.get<TeaType>(`https://testologia.ru/tea?id=${id}`);

    // return this.products.find(product => (product.id === id));
  }


}
