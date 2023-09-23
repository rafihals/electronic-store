import { Component, OnInit } from '@angular/core';
import { ElectronicService } from '../z-service/electronic.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  constructor(private listService: ElectronicService) { }
  dataList: any;
  ngOnInit(): void {

  }

}

