import { Component, OnInit } from '@angular/core';
// import {MessageService} from 'primeng/api';
interface City {
  name: string,
  code: string
}
interface downl{
  item: number
}

@Component({
  selector: 'app-order-send-file',
  templateUrl: './order-send-file.component.html',
  styleUrls: ['./order-send-file.component.scss']
})


export class OrderSendFileComponent implements OnInit {

  value1: any;
  value2: any;
  value3: any;
  
  activeState: boolean[] = [true, false, false];

  checked1: boolean = false;
  checked2: boolean = false;
  channel: string;
  message: string;
  expiryDate: Date;
  minDate: Date;
  maxDate: Date;
  search: any;
  subject: string;
  es: any;
  invalidDates: Array<Date>

  pays: City[];
  downloads: downl[];
  
  selectedPay: City;
  selectedDownloads: downl;

    constructor() {
        this.pays = [
            {name: 'A+E International Pays(505100)', code: 'NY'},
            {name: 'Client Pays ()', code: 'RM'},
            {name: 'Other', code: 'LDN'}
        ];
        this.downloads = [
          {item: 1 },
          {item: 2 },
          {item: 3 },
          {item: 4 },
          {item: 5 },
          {item: 6},
          {item: 7 },
          {item: 8 },
          {item: 9 },
          {item: 10 }
        ]
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
