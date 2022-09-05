import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MessageService } from 'src/app/components/messages/shared/message.service';
import { portifolioMock } from './models/portifolio.mock';
import { IPortifolio } from './models/portifolio.model';

@Injectable({
  providedIn: 'root',
})
export class PortifolioService {
  constructor(private messageService: MessageService) {}

  getPortifolio(): Observable<IPortifolio[]> {
    const portifolio = of(portifolioMock);
    // return throwError(new Error('Cocorreu algum erro!'));
    this.messageService.add('PortifolioService: fetched portifolio');
    return portifolio;
  }
}
