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

  backendUrl: string = 'https://five-oclock-server.onrender.com/zones'

  getAreaThroughBackend(): Observable<Area> {
    return this.httpClient.get<Area>(this.backendUrl)
  }

  getAreaHardCoded(): Observable<Area> {
    return of(this.area)
  }

  area: Area = new Area(new Zone('America/Halifax','Canada','Nova Scotia','Halifax'), `The 'Dark 'N' Stormy' is a popular cocktail in Halifax, Canada. It consists of:\n- 1.5 oz dark rum\n- 4 oz ginger beer\n- Lime wedge (for garnish)\n\nCombine rum and ginger beer in a glass, squeeze in lime juice, and garnish with a lime wedge.`)
  

}
