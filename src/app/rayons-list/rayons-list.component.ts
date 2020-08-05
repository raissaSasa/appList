import { Component, OnInit } from '@angular/core';
import { Rayon} from '../rayon';

@Component({
  selector: 'app-rayons-list',
  templateUrl: './rayons-list.component.html',
  styleUrls: ['./rayons-list.component.css']
})
export class RayonsListComponent implements OnInit {
  public rayons: Rayon[] =[
    new Rayon('Épicerie salée','https://cdn.pixabay.com/photo/2018/02/12/09/00/the-market-3147758_960_720.jpg','conserves de légumes,condiments,conserves de poisson,plats préparés,huile...'),
    new Rayon('Rayon cave','https://img.freepik.com/photos-gratuite/bouteille-vin-remplissant-verre-vin_23-2148214969.jpg?size=626&ext=jpg','vin rouge, vin rosé, vin blanc, vin bio...'),
    new Rayon('Produits Frais libre-service','','pâtisserie industrielle,viennoiserie,crêpes,boucherie libre-service,fruits secs,charcuterie libre-service,plat préparé,salades,jus de fruit frais,beurre,fromage libre-service,yaourt,dessert frais,lait,crème,oeufs,surgelés,jus d’orange frais,poisson frais emballé...'),
    new Rayon('Produits Liquide','',''),
    new Rayon('Rayon Hygiène','','')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
