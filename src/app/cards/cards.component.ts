import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModelComponent } from './card-model/card-model.component';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards!: Card[];
  constructor(public dialog: MatDialog, private cardService: CardService) {}
  ngOnInit() {
    this.getCards();
  }
  openCardModal(): void {
    const emo = this.dialog.open(CardModelComponent, {
      width: '400px',
    });
    emo.afterClosed().subscribe( res=>{
      if(res){
        this.getCards()
      }
    })
  }
  
  getCards(): void {
    this.cardService.getCards().subscribe((res: Card[]) => {
      this.cards = res;
    });
  }
}
