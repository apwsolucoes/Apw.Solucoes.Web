import { Injectable } from '@angular/core';
import { portifolioMock } from './models/portifolio.mock';
import { IPortifolio } from './models/portifolio.model';


@Injectable({
  providedIn: 'root'
})
export class PortifolioService {

  getPortifolio(): IPortifolio[]{
    return portifolioMock;
  }
}
