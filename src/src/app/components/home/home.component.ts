import { Component } from '@angular/core';
import { portifolio } from 'src/app/pages/portifolio/shared/models/portifolio.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  portifolioMock = portifolio;
}
