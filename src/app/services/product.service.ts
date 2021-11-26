import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) {
  }

  public getProducts(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `bearer ${this._authService.user?.token}`
    });
    return this._http.post('https://codingchallenge.quartzsales.com/WS/quartz.svc/GetProducts', {}, {
      headers
    }).pipe(map((result: any) => {
      return result.body.map(product => new Product(product));
    }));
  }
}
