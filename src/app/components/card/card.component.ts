import { Component } from '@angular/core';
import { Area } from '../../models/area';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  area!: Area
  
  constructor(private areaService: AreaService){}

  ngOnInit() {
    this.areaService.getAreaHardCoded().subscribe(data => {
      this.area = data
    })

    // this.areaService.getAreaThroughBackend().subscribe(data => {
    //   this.area = data
    // })
  }
}
