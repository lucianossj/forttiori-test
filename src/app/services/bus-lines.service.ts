import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusLinesService {

  url = null;

  constructor(private http: HttpClient) {}

  search() {

    this.url = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o';
    return this.http.get<any[]>(`${this.url}`);

  }

}
