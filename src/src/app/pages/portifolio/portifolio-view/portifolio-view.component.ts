import { Component, Input } from '@angular/core';
import { IPortifolio } from '../shared/models/portifolio.model';

@Component({
  selector: 'app-portifolio-view',
  templateUrl: './portifolio-view.component.html',
  styleUrls: ['./portifolio-view.component.scss'],
})
export class PortifolioViewComponent {
  @Input() portifolio?: IPortifolio;
}
