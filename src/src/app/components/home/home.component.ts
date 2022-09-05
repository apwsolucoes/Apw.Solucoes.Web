import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/pages/portifolio/shared/portifolio.service';
import { IPortifolio } from '../../pages/portifolio/shared/models/portifolio.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  portifolioList: IPortifolio[] = [];
  selectedPortifolio: IPortifolio;

  constructor(private portifolioService: PortifolioService) {}

  ngOnInit(): void {
    this.getPortifolio();
  }

  onSelect(portifolio: IPortifolio) {
    this.selectedPortifolio = portifolio;
  }

  getPortifolio(): void {
    this.portifolioList = this.portifolioService.getPortifolio();
  }
}
