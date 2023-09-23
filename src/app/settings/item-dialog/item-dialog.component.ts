import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ElectronicService } from 'src/app/z-service/electronic.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class ItemDialogComponent implements OnInit {

  ItemForm: FormGroup;

  addres: string[] = [
    "Central Java",
    "East Java",
    "West Java",
    "Kalimantan",
    "Sulawesi",
  ]

  constructor(
    private fb: FormBuilder,
    private svc: ElectronicService,
    private dialog: MatDialogRef<ItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private core: CoreService

  ) {

    this.ItemForm = this.fb.group({
      itemName: '',
      email: '',
      price: '',
      date: '',
      quality: '',
      address: '',
      company: '',
      completeness: '',
      stock: '',
    })
  }

  ngOnInit(): void {
    this.ItemForm.patchValue(this.data);
  }

  onSubmitItems() {
    if (this.ItemForm.valid) {
      if (this.data) {
        this.svc.updateProduct(this.data.id, this.ItemForm.value).subscribe({
          next: (val: any) => {
            this.core.openSnackBar('Item Update')
            this.dialog.close(true);
          },
          error: (err: any) => {
            console.log(err)
          },
        });
      } else {
        this.svc.createProduct(this.ItemForm.value).subscribe({
          next: (val: any) => {
            this.core.openSnackBar('Item Added')
            this.dialog.close(true);
          },
          error: (err: any) => {
            console.log(err)
          },
        });
      }
    }
  }
}
