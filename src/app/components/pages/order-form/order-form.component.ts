import {Component,  OnInit} from '@angular/core';
import {TeaType} from "../../../types/tea.type";
import {data} from "../../../types/data.type";
import {SaveSingleProductService} from "../../../services/save-single-product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {HttpProductService} from "../../../services/product.service";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  product: TeaType | undefined;
  data: data | undefined ;

  form_name:string;
  showError: boolean = false;
  showForm: boolean = true;
  loader: boolean = false;



  constructor( private SaveSingleProductService:SaveSingleProductService,
               private  HttpProductService: HttpProductService,
               private fb: FormBuilder,) {
    this.form_name = 'Сделать заказ';

  }

  form= this.fb.group({
    product_title: [''],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    phone: ['', Validators.required],
    country: ['', Validators.required],
    index: ['', Validators.required],
    address: ['', Validators.required],
    comment: ['', Validators.required],
  })



  ngOnInit(): void {
    this.product = this.SaveSingleProductService.getProduct();
    this.form.patchValue({ product_title: this.product.title  });
    this.form.get('product_title')?.disable();
  }




  sendOrder():void {
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
      }

      console.log(this.data);
    }

    //запрос на сервер

    if (this.data) {
      this.loader = true;
      this.HttpProductService.order(this.data)
        .pipe(
          tap(()=> {
            this.loader = false;
          })
        )
        .subscribe(response  => {
          console.log(response);
          if ( response && response.success === 1) {
            this.form_name= 'Спасибо за заказ!  Мы свяжемся с вами в ближайшее время!';
            this.showForm = false;
          } else {
            this.showError = true;
          }

        });
    } else {
      this.showError = true;
    }


  }

}
