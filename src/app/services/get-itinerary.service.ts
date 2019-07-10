import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetItineraryService {

  url = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

  search(id: string) {
    return this.http.get<any[]>(`${this.url.concat(id)}`);
  }

}
