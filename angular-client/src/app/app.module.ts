import { CustomerService } from './customers/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersDetailsComponent } from './customers/customers-details/customers-details.component';
import { SearchCustomersComponent } from './customers/search-customers/search-customers.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersDetailsComponent,
    SearchCustomersComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
