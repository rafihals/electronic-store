import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  public getJsonValue: any;
  public displayColumn: string[] = ['id','name','email']
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.http.get('http://localhost:8080/users').subscribe((data) => {
      this.getJsonValue = data
      console.table(data)
    })
  }
}
