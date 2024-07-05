import { Component } from '@angular/core';
import { ProductService } from '@services/product.service';
import { Product, Products } from 'types/types';
import { AccordionModule } from 'primeng/accordion';
import { ProductComponent } from '@components/product/product.component';
import { BannerComponent } from '@components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccordionModule,
    ProductComponent,
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

constructor(private productsService: ProductService){}

  // Variables:
  products: Product[] = []
  rows: number = 0;
  totalRecords: number = 0;

  fetchProducts(page: number, perPage: number) {
    this.productsService
      .getProducts('http://localhost:3000/clothes', { page, perPage })
      .subscribe({
        next: (data: Products) => {
          this.products = data.items;
          this.totalRecords = data.total;
          console.log(this.products)
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit(){
    this.fetchProducts(0, this.rows);
  }
}
