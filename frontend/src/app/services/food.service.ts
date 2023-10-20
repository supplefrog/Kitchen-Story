import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food =>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getFoodById(foodId:string):any{
    return this.getAll().find(food=>food.id==foodId)?? new Food();
  }

  getAllTags():any{
    return sample_tags;
  }

  getAllFoodByTag(tag:string):any{
    return tag==="All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  }
}