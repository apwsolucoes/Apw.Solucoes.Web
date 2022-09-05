import { Component, OnInit } from '@angular/core';
import { PortifolioService } from 'src/app/pages/portifolio/shared/portifolio.service';
import { IPortifolio } from '../../pages/portifolio/shared/models/portifolio.model';
import { MessageService } from '../messages/shared/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  portifolioList: IPortifolio[] = [];
  selectedPortifolio: IPortifolio;

  constructor(
    private portifolioService: PortifolioService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getPortifolio();
  }

  onSelect(portifolio: IPortifolio) {
    this.messageService.add(`${portifolio.name} selected.`);
    this.selectedPortifolio = portifolio;
  }

  getPortifolio(): void {
    // console.log('got value ' + JSON.stringify(value, null, 2));

    // this.portifolioService.getPortifolio().subscribe(
    //   (value) => this.portifolioList = value,
    //   (err) => console.warn(err)
    // );

    this.portifolioService
      .getPortifolio()
      .subscribe((portifolio) => (this.portifolioList = portifolio));
  }
}
