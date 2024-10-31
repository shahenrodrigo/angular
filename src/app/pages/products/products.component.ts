import { Component } from '@angular/core';
import { ProductItemsComponent } from '../product-items/product-items.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
