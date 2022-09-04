import { Component } from '@angular/core';
import { portifolioMock } from 'src/app/pages/portifolio/shared/models/portifolio.mock';
import { IPortifolio } from '../../pages/portifolio/shared/models/portifolio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  portifolioList = portifolioMock;
  selectedPortifolio: IPortifolio;

  onSelect(portifolio: IPortifolio){
    this.selectedPortifolio = portifolio;
  }
}
