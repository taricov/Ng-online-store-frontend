import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from 'types/types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(){}
  @Input() product!: Product;

}
