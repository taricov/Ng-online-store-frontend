import { Observable } from 'rxjs';
import { PaginationParams, Products } from 'types/types';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }


  // Getting products from the API
  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };
}
