import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
  private apiUrl = 'api/public/api/v1/electronic/macbook'; // Gantilah dengan URL API Anda

  constructor(private http: HttpClient) { }

  // CREATE
  createProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // READ (GET All)
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // READ (GET by ID)
  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // UPDATE (PUT)
  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  // DELETE
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
