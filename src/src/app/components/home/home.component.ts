import { Component } from '@angular/core';
import { IPortifolio } from 'src/app/pages/portifolio/shared/models/portifolio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor() {}

  portifolio: IPortifolio = {
    id: '1',
    name: 'Apw Soluções',
    url: 'http://www.apwsolucoes.com.br/',
    order: 1
  };
}
