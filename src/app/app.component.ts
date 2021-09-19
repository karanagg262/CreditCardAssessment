import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface monthType {
  month: string;
  monthNumber: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  creditFormControl = new FormControl('');
  title = 'creditCardForm';
  cardNameshow = '';
  cardNumbershow = '################';
  cardName = '';
  monthSelected = 'MM';
  yearSelected = 'YY';
  frontCard: boolean = true;
  monthsList?: monthType[];
  yearList?: monthType[];
  cardNumber?: Number;
  cardCvv?: Number;
  ngOnInit() {
    this.monthsList = [{month: 'January', monthNumber: '01'}, 
    {month: 'February', monthNumber: '02'},
    {month: 'March', monthNumber: '03'},
    {month: 'April', monthNumber: '04'},
    {month: 'May', monthNumber: '05'},
    {month: 'June', monthNumber: '06'},
    {month: 'July', monthNumber: '07'},
    {month: 'August', monthNumber: '08'},
    {month: 'September', monthNumber: '09'},
    {month: 'October', monthNumber: '10'},
    {month: 'November', monthNumber: '11'},
    {month: 'December', monthNumber: '12'}];

    this.yearList = [{month: '2021', monthNumber: '21'}, 
    {month: '2022', monthNumber: '22'},
    {month: '2023', monthNumber: '23'},
    {month: '2024', monthNumber: '24'},
    {month: '2025', monthNumber: '25'},
    {month: '2026', monthNumber: '26'},
    {month: '2027', monthNumber: '27'},
    {month: '2028', monthNumber: '28'},
    {month: '2029', monthNumber: '29'},
    {month: '2030', monthNumber: '30'},
    {month: '2031', monthNumber: '31'},
    {month: '2032', monthNumber: '32'}];
  }

  getChange(event: number){
    this.frontCard = true;
    this.cardNumbershow = '################';
    if(event){
      this.cardNumbershow = event.toString().padEnd(16,'#');
    }
  }

  getChangeFrontCard(){
    this.frontCard = true;
  }
  getChangeCvv(){
    this.frontCard = false;
  }
}
