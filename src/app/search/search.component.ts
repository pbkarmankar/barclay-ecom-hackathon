import { Component, OnInit } from '@angular/core';
import { Book, PaginationResponse } from '../book';
import { ProductService } from '../product.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bookTitle: string;
  books?: PaginationResponse;
  
  constructor(private productService: ProductService,  private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

  async searchBooks(bookTitle: string, pageNo: number) {
    this.bookTitle = bookTitle;
    await this.productService.searchBooks(this.bookTitle, pageNo).subscribe((response: PaginationResponse) => {
      this.books = response;
    });
  }

  addToCart(book: Book) {
    this.shoppingCartService.addToCart(book);
  }
}
