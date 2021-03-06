import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, PaginationResponse } from '../book';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books?: PaginationResponse;
  bookTitle: string;

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.getAllBooks(0);
  }

  getAllBooks(pageNo: number) {
    this.productService.getAllBooks(pageNo).subscribe((response: PaginationResponse) => {
      this.books = response;
    });
  }

  addToCart(book: Book) {
    this.shoppingCartService.addToCart(book);
  }
}
