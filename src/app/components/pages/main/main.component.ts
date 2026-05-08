import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private observable: Observable<string>;
  private subscription: Subscription | null | undefined;
  popup: string = 'invisible';

  constructor() {
    this.observable = new Observable( (observer)=> {
      setTimeout(()=>{
        observer.next('popupOpen');
      }, 10000)
    })


  }

  ngOnInit(): void {

    this.subscription = this.observable.subscribe( (value)=> {
      console.log(value);
      this.popup = 'visible';
    })

  }



  ngOnDestroy(){
    console.log('popupClose');
    this.subscription?.unsubscribe();
  }

}
