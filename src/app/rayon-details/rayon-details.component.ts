import { Component, OnInit } from '@angular/core';
import { Rayon} from '../rayon';

@Component({
  selector: 'app-rayon-details',
  templateUrl: './rayon-details.component.html',
  styleUrls: ['./rayon-details.component.css']
})
export class RayonDetailsComponent implements OnInit {
  //public rayon = new Rayon('Épicerie salée','https://cdn.pixabay.com/photo/2018/02/12/09/00/the-market-3147758_960_720.jpg','conserves de légumes,condiments,conserves de poisson,plats préparés,huile');
  public rayon = new Rayon( 'Rayon cave','https://img.freepik.com/photos-gratuite/bouteille-vin-remplissant-verre-vin_23-2148214969.jpg?size=626&ext=jpg','vin rouge, vin rosé, vin blanc, vin bio...');
  constructor() { }

  ngOnInit(): void {
  }

}
