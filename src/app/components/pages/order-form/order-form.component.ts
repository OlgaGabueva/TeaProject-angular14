import {Component,  OnInit} from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {SaveSingleProductService} from "../../../services/save-single-product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  product: TeaType | undefined;
  data: {
    name: string |null | undefined ;
    last_name: string |null | undefined ;
    phone: string |null | undefined ;
    country: string |null | undefined ;
    zip: string |null | undefined ;
    product: string |null | undefined ;
    address: string |null | undefined ;
    comment: string |null | undefined ;

  } ;

  form_name:string;
  showError: boolean = false;
  showForm: boolean = true;
  loader: boolean = false;



  constructor( private SaveSingleProductService:SaveSingleProductService,  private  http: HttpClient) {
    this.data = {
      name: '',
      last_name:'',
      phone:'',
      country:'',
      zip:'',
      product:'',
      address:'',
      comment:'',
    }

    this.form_name = 'Сделать заказ';




  }


  form = new FormGroup({
    product_title: new FormControl(''  ),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    index: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required])
  });



  ngOnInit(): void {
    this.product = this.SaveSingleProductService.getProduct();
    this.form.patchValue({ product_title: this.product.title  });
    this.form.get('product_title')?.disable();
  }






  sendOrder() {
    console.log(this.form.value);

    if(this.form.valid) {
      this.data = {
        name: this.form.value.name,
        last_name: this.form.value.surname,
        phone: this.form.value.phone,
        country: this.form.value.country,
        zip: this.form.value.index,
        product: this.product?.title,
        address: this.form.value.address,
        comment: this.form.value.comment,
      }  ;
    }

    console.log(this.data);

    //запрос на сервер
    this.loader = true;
    this.http.post<{response:boolean, success:number, message:string }>('https://testologia.ru/order-tea', this.data)
      .pipe(
        tap(()=> {
          this.loader = false;
        })
      )
      .subscribe(response => {
        console.log(response);
        if ( response && response.success === 1) {
          this.form_name= 'Спасибо за заказ!  Мы свяжемся с вами в ближайшее время!';
          this.showForm = false;

        } else {
          this.showError = true;

        }

      });





  }

}
