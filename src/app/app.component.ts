import { Component } from '@angular/core';
import { Rayon} from './rayon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appList';

  rayon = new Rayon("Épicerie salée",'https://cdn.pixabay.com/photo/2018/02/12/09/00/the-market-3147758_960_720.jpg','conserves de légumes,condiment,conserves de poisson,plats préparés,huile');
}
