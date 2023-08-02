import { Component, OnInit } from '@angular/core';
import { StatisticService } from './statistic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  getUser: any;
  dataSource: any[] = []; // Data dari API akan disimpan di sini
  displayedColumns: string[] = ['id', 'name', 'email'];

  constructor(private service: StatisticService,
    private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.service.getData().subscribe((res) => {
  //     this.getUser = res;
  //   });
  // }

  ngOnInit(): void {
    this.getDataFromAPI().subscribe((data) => {
      this.dataSource = data;
    });
  }

  getDataFromAPI() {
    const apiUrl = 'http://localhost:8080/users'; // Ganti dengan URL API backend Anda
    return this.http.get<any[]>(apiUrl);
  }

}
