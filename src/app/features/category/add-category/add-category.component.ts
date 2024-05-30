import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

//define component name
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy{

  //create binding variable model
  model:AddCategoryRequest
  //create subscription variable
  private addCategorySubscription?: Subscription
  constructor(private categoryService:CategoryService){
    this.model={
      name:'',
      urlHandle:''
    }
  }

  //on submit call function onFormSubmit
  onFormSubmit(){
    // console.log(this.model)
    this.addCategorySubscription = this.categoryService.addCategory(this.model).subscribe({
      next:(response)=>{
        console.log("this was successfull")
      },
    })
  }
  
  //on component destroy unsubscribe
  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
