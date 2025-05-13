import { Component } from '@angular/core';
import { Area } from '../../models/area';
import { AreaService } from '../../services/area.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  isLoading: boolean = true;
  area!: Area;
  drinkName: string = '';
  drinkIngredients: string[] = [];
  
  constructor(private areaService: AreaService){}

  getGoogleSearchLink(): string {
    const {country, state, city} = this.area.zone;

    const partsOfArea = [country, state, city].filter(Boolean)
    const location = partsOfArea.join(', ')
    return `https://www.google.com/search?q=${encodeURIComponent(location)}`;
  }

  showNewArea(){
    this.isLoading = true

    // this.areaService.getAreaHardCoded().subscribe(data => {
    //   this.area = data;
    //   this.drinkName = data.drink.split('\n')[0].replace('.','');
    //   this.drinkIngredients = data.drink.split('\n').slice(1).map(item => item.replace(/^\s*/, ''));
    // }) 

     this.areaService.getAreaThroughBackend().subscribe(data => {
      this.area = data
      this.drinkName = data.drink.split('\n')[0].replace('.','');
      this.drinkIngredients = data.drink.split('\n').slice(1).map(item => item.replace(/^\s*/, ''));
      this.isLoading = false
    })
  }

  ngOnInit() {
    // this.areaService.getAreaHardCoded().subscribe(data => {
    //   this.area = data;
    //   this.drinkName = data.drink.split('\n')[0].replace('.','');
    //   this.drinkIngredients = data.drink.split('\n').slice(1).map(item => item.replace(/^\s*/, ''));
    // })

    this.areaService.getAreaThroughBackend().subscribe(data => {
      this.area = data
      this.drinkName = data.drink.split('\n')[0].replace('.','');
      this.drinkIngredients = data.drink.split('\n').slice(1).map(item => item.replace(/^\s*/, ''));
      this.isLoading = false
    })
  }

}