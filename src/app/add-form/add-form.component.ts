import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {

  productForm!: FormGroup;
  productObj: Product = {
    id: '',
    name: '',
    desc: ''
  }
  constructor(public fb: FormBuilder, private hero: HeroService) {

    //form creation
    this.productForm = this.fb.group({
      name: ['',Validators.required],
      desc: ['',Validators.required]
    })
  }


  

  addProduct() {
    const { value } = this.productForm
    console.log(value)

    this.productObj.id='',
    this.productObj.name=value.name,
    this.productObj.desc=value.desc



    this.hero.addProduct(this.productObj).then((res)=>{
      if(res) {
        alert("Data added")
      }
      this.productForm.reset()
    })
  }

 





}
