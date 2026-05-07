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

  ngOnInit(): void {

    //часть JQuery (аккордеон) из старого проекта

    $(document).ready(function () {

      $(function () {
        $("#accordion").accordion({
          active: 0,
          duration: 1000, // 1 секунда
          easing: 'easeInOutSine',
          icons: true,
          // icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" },
         });
      });

      // $('#index'). on ( 'keypress', function(event:any) {
      //   let char = String.fromCharCode(event.which);
      //   if (isNaN( char )) {
      //     event.preventDefault();
      //   }
      // });

      $('#button').click(function (event:any) {
        event.preventDefault();
        let nameInput = $('#name');
        let surnameInput = $('#surname');
        let phoneInput = $('#phone');
        let countryInput = $('#country');
        let indexInput = $('#index');
        let addressInput = $('#address');


        if (!nameInput.val()) {
          alert('Заполите имя!');
          return;

        }
        if (!surnameInput.val()) {
          alert('Заполите фамилию!');
          return;
        }
        if (!phoneInput.val()) {
          alert('Заполите телефон!');
          return;
        }
        if (!countryInput.val()) {
          alert('Заполите страну!');
          return;
        }

        if (!indexInput.val()) {
          alert('Заполите индекс!');
          return;
        }


        if (!(indexInput.val().length === 6)) {
          alert('Индекс должен быть  6 символов!');
          return;
        }


        if (!addressInput.val()) {
          alert('Заполите адрес!');
          return;
        }

        // $('#make_order').remove(); резко исчезнет
        $('#make_order').fadeOut(); // плавно исчезнет
        $('#order').removeClass('invisible');

        // плавно появится обратно
        setTimeout(() => {
          $('#make_order').fadeIn();
          $('#order').addClass('invisible');
        }, 2000);


        nameInput.val('');
        surnameInput.val('');
        phoneInput.val('');
        countryInput.val('');
        indexInput.val('');
        addressInput.val('');
      });

    });
  }

  //код текущего (нового) проекта












}

