import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Watch} from './models/watch';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatchesService {

  private apiUrl = 'http://localhost:8080/api/watches';

  constructor(private httpClient: HttpClient) { }

  getWatches(): Observable<Watch[]>{
    return this.httpClient.get<Watch[]>(this.apiUrl);
  }
  getWatch(id: number): Observable<Watch>{
    return this.httpClient.get<Watch>(this.apiUrl + '/' + id);
  }
  addWatch(data): Observable<Watch>{
    return  this.httpClient.post<Watch>(this.apiUrl, data);
  }
  updateWatch(id: number, data): Observable<Watch>{
    return this.httpClient.put<Watch>(this.apiUrl + '/' + id, data);
  }
  deleteWatch(id: number): Observable<Watch>{
    return this.httpClient.delete<Watch>(this.apiUrl + '/' + id);
  }
}
