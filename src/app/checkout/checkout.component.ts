import { Component, OnInit } from '@angular/core';
import { CheckoutDetail } from '../checkout.model';
import { ShoppingCartService } from '../shopping-cart.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(public shoppingCarService: ShoppingCartService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  checkout(fullNameValue: string, emailValue: string, mobileValue: string) {
    const totalAmountValue = this.shoppingCarService.getTotalAmount();
    const redirectUrlValue = environment.redirectUrl;
    const errorUrlValue = environment.errorUrl;
    this.http.get(environment.apiBaseUrl + '/checkout1?totalamount=' + '123')
    .subscribe((data: string) => {
      console.log('response data');
      console.log(data);
      window.location.href = data["url"];
    });
  }
}
