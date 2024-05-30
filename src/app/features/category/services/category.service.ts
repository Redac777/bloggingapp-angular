import { Observable } from 'rxjs';
import { AddCategoryRequest } from './../models/add-category-request.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  addCategory(model:AddCategoryRequest):Observable<void>{
    return this.http.post<void>(`http://localhost:5094/api/Categories`,model);
  }
}
