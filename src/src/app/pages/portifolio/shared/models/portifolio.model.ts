import { IEntity } from 'src/app/core/models/entity.model';

export interface IPortifolio extends IEntity {
  name?: string;
  description?: string;
  status?: string;
  url?: string;
  order?: number;
}
