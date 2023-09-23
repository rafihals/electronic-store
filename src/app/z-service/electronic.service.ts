import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
  private apiUrl = 'api/public/api/v1/electronic/macbook';
  private apiUrlStoreItems = 'http://localhost:3000/item';

  constructor(private http: HttpClient) { }

  // CREATE
  createProduct(data: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrlStoreItems, data);
  }

  // READ (GET All)
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlStoreItems);
  }

  // READ (GET by ID)
  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // UPDATE (PUT)
  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrlStoreItems}/${id}`, data);
  }

  // DELETE
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlStoreItems}/${id}`);
  }
}
