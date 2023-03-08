import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public route: Router, private hero: HeroService) { }

  products!: Product[]

  ngOnInit() {
    this.getProduct();
    localStorage.clear()
  }

  addForm() {
    this.route.navigate(['/addform'])
  }

  getProduct() {
    this.hero.getProduct().subscribe((res: Product[]) => {
      this.products = res
    })
  }

  editProduct(product: Product) { 
    localStorage.setItem('product_id',product.id)
    this.route.navigate(['editform'])
  }

  deleteProduct(product: Product) {
    let okConfirm = confirm("Are you sure?")
    if (okConfirm) {
      this.hero.deleteProduct(product)
    }
  }
}
