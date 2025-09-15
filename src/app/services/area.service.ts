import { Injectable } from '@angular/core';
import { Area } from '../models/area';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient: HttpClient) { }
  backendUrl: string = 'https://five-oclock-server.vercel.app/zones'

  getAreaThroughBackend(): Observable<Area> {
    return this.httpClient.get<Area>(this.backendUrl)
  }
}
