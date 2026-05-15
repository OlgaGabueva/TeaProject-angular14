import {Component, OnInit} from '@angular/core';
import {NgwWowService} from "ngx-wow";
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'TeaProject-angular';

  constructor( private wowService: NgwWowService ) {
     this.wowService.init();

  }

  ngOnInit(): void { }



}

