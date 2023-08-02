import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http: HttpClient) { }

  httpOption: any;
  url = 'http://localhost:8080/users'

  getData() {
    return this.http.get(this.url, this.httpOption)
  }
}
