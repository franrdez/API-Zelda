import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    console.log('Servidor Http');
  }

  private UrlApi = "https://zelda.fanapis.com/api";

  public getData(opcion: string): Observable<any>{
    return this.http.get<any>(`${this.UrlApi}/${opcion}`);
  }
}
