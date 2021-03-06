import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { ChipsModule } from 'primeng/chips';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderSendFileComponent } from './components/order/order-send-file/order-send-file.component';
import { OrderHistoryComponent } from './components/order/order-history/order-history.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReceiverComponent } from './components/receiver/receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    OrderSendFileComponent,
    OrderHistoryComponent,
    AdminComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    CheckboxModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    PaginatorModule,
    PanelModule,
    MenuModule,
    ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
