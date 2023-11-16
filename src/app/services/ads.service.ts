import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Ads} from "../common/ads";

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private baseUrl = 'http://localhost:8080/api/adses'

  constructor(private httpClient: HttpClient) {
  }

  getAdsList(): Observable<Ads[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.adses))
  }
}

interface GetResponse {
  _embedded: {
    adses: Ads[];
  }
}
