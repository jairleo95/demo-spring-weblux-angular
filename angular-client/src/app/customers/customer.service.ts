import { Customer } from './customer';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  
  private baseUrl = 'http://localhost:8080/api/customers';
  private customersList: Customer[] = new Array();
  private customersListSearch: Customer[] = new Array();

  constructor(private http: HttpClient) {
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    this.customersList = new Array();

    return Observable.create((observer) => {
      const eventSource = new EventSource(`${this.baseUrl}`);
      eventSource.onmessage = (event) => {
        console.log('eventSource.onmessage: ', event);
        const json = JSON.parse(event.data);
        this.customersList.push(new Customer(json['id'], json['name'], json['age'], json['active']));
        observer.next(this.customersList);
      };

      eventSource.onerror = (error) => observer.error('eventSource.onerror: ' + error);

      return () => eventSource.close();
    });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }

  findCustomers(name): Observable<any> {
    this.customersListSearch = new Array();

    return Observable.create((observer) => {
      const eventSource = new EventSource(`${this.baseUrl}` + `/findbyname?name=` + name);
      eventSource.onmessage = (event) => {
        console.log('eventSource.onmessage: ', event);
        const json = JSON.parse(event.data);
        this.customersListSearch.push(new Customer(json['id'], json['name'], json['age'], json['active']));
        observer.next(this.customersListSearch);
      };

      eventSource.onerror = (error) => observer.error('eventSource.onerror: ' + error);

      return () => eventSource.close();
    });
  }
}
