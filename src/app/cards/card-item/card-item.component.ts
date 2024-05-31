import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Card } from 'src/app/models/card';
import { CardModelComponent } from '../card-model/card-model.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})

export class CardItemComponent {
  @Input() card!:Card;

  constructor(
    private dialog:MatDialog
  ) {}

  openUpdateCard(card:Card):void{
      this.dialog.open(CardModelComponent,{
        width:'400px',
        data:card
      } )
  }
}
