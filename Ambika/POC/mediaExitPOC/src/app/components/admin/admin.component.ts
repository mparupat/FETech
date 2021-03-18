import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
    [{ name:"Order by1", value: "ambika@virtusa.com"},{name: "Order Date1", value: "13-03-2021"},{ name: "budget code1", value: "A+E pays"}],
    [{ name:"Order by2", value: "ambika@virtusa.com"},{name: "Order Date2", value: "13-03-2021"},{ name: "budget code2", value: "A+E pays"}],
    [{ name:"Order by3", value: "ambika@virtusa.com"},{name: "Order Date3", value: "13-03-2021"},{ name: "budget code3", value: "A+E pays"}]

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
