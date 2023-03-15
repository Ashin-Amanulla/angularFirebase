import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Product } from '../interface/product';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  productForm!: FormGroup;
  productObj: Product = {
    id: '',
    name: '',
    desc: ''
  }
  constructor(public fb: FormBuilder, private hero: HeroService, private router: Router) {

    //form creation
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required]
    })
  }

  ngOnInit() {

    //to initialize the old value in the form before editing
    let id = localStorage.getItem("product_id")
    this.hero.getProductById(id).then((data: any) => {
      this.productForm = this.fb.group({
        name: [data.name],
        desc: [data.desc]
      })
    })
  }


  editProduct() {
    let id = localStorage.getItem("product_id")
    const { value } = this.productForm
    console.log(value)

    this.productObj.id != id,
      this.productObj.name = value.name,
      this.productObj.desc = value.desc



    this.hero.updateProduct(id, this.productObj).then((res) => {
      console.log(res)
      alert("Data updated")
      localStorage.clear()
      this.router.navigate([''])
    })
  }




}
