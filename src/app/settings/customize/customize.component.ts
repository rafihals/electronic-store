import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { ElectronicService } from 'src/app/z-service/electronic.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss']
})

export class CustomizeComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'itemName',
    'email',
    'price',
    'date',
    'quality',
    'address',
    'company',
    'completeness',
    'stock',
    'action',
  ];

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(
    private dialog: MatDialog,
    private svc: ElectronicService,
    private core: CoreService
  ) { }

  ngOnInit(): void {
    this.getItem()
  }

  openDialogItem() {
    const dialogRef = this.dialog.open(ItemDialogComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getItem()
        }
      }
    })
  }

  getItem() {
    this.svc.getProducts().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err)
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteItem(id: number) {
    this.svc.deleteProduct(id).subscribe({
      next: (res) => {
        this.core.openSnackBar('Item deleted!', 'done')
        this.getItem()
      },
      error: console.log,
    })
  }

  editItem(data: any) {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data,
    })
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getItem()
        }
      }
    })
  }
}
