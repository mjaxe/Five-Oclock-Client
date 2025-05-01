import { Injectable } from '@angular/core';
import { Area } from '../models/area';
import { Zone } from '../models/zone';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private httpClient: HttpClient) { }
  // Use if railway shuts down
  // backendUrl: string = 'https://five-oclock-server.onrender.com/zones'
  backendUrl: string = 'https://five-oclock-server-production.up.railway.app/zones'

  getAreaThroughBackend(): Observable<Area> {
    console.log(`Hitting: `)
    return this.httpClient.get<Area>(this.backendUrl)
  }

  getAreaHardCoded(): Observable<Area> {
    return of(this.area)
  }

  area: Area = new Area(new Zone('America/Montevideo','Uruguay',null,'Montevideo'), `Medio y Medio. \n- 1 1/2 oz white wine (preferably Uruguayan)\n- 1 1/2 oz sparkling wine (preferably Uruguayan)\n- Splash of lemon-lime soda (optional, for some extra fizz)\n- Slice of lemon, for garnish`)
  

}
