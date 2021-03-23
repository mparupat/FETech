import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {

  subject: string;
  fileName: any;
  ReceiverEmail: string;
  senderEmail: string;
  channelName: any;
  fromDate: Date;
  toDate: Date;
  minDate: Date;
  maxDate: Date;
  es: any;
  invalidDates: Array<Date>
  pays: City[];
  totalRecords: number = 100;
  items = [
    { order_by: "ambika@virtusa.com", order_Date: "13-03-2021", budget_code: "A+E pays", ChannelName: "Some Channel", subject: "message", message: "ssskncklncndvjbd"},
    { order_by: "harshita@virtusa.com", order_Date: "18-03-2021", budget_code: "Client pays", ChannelName: "channel2", subject: "somehting", message: "ssskncklncndvjbd"},
    { order_by: "alok@virtusa.com", order_Date: "22-03-2021", budget_code: "other", ChannelName: "channel2", subject: "somehting", message: "ssskncklncndvjbd"}
  ]

  selectedPay: City;
  constructor() { 
    this.pays = [
      {name: 'A+E International Pays(505100)', code: 'NY'},
      {name: 'Client Pays ()', code: 'RM'},
      {name: 'Other', code: 'LDN'}
    ];
  }

  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "monday","Tuesday","wednesday","thursday","friday","satureday","sunday" ],
      dayNamesShort: [ "mon","tue","wed","thu","fri","sat","sun" ],
      dayNamesMin: [ "M","Tu","W","Th","F","Sa","Su" ],
      monthNames: [ "Jaunary","Februrary","march","april","may","june","july","agust","september","october","november","december" ],
      monthNamesShort: [ "jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec" ],
      today: 'Hoy',
      clear: 'Borrar'
    }

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];

  }

}
