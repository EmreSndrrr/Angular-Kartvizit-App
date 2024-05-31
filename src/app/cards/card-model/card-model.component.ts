import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.css']
})
export class CardModelComponent {
 cardFrom!:FormGroup;


 constructor(private fb:FormBuilder,
    private cardService:CardService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Card
  ) {
  
 }
 ngOnInit(){
  this.cardFrom = this.fb.group({
   
    name: [this.data?.name || '', Validators.maxLength(50)],
    title: [this.data?.title || '', [Validators.required, Validators.maxLength(255)]],
    phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(20)]],
    email: [this.data?.email || '', [Validators.email, Validators.maxLength(50)]],
    address: [this.data?.adress || '', Validators.maxLength(255)],

  })
 }
 addCard(){
  // console.log(this.cardFrom.value);
  this.cardService.addCard(this.cardFrom.value)
    .subscribe((res:any)=>{
    console.log(res);
    this._snackBar.open(res||'Kartvizit başarılı','',{
      duration:2000,
    })
  });
 }
updateCard():void{
  this.cardService.updateCard(this.cardFrom.value,this.data.id)
  .subscribe((res:any)=>{
    console.log(res)
    console.log("sds")
  })
} 
 
};

