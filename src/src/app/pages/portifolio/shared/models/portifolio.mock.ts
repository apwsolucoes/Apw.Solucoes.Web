import { IPortifolio } from './portifolio.model';

export const portifolioMock: IPortifolio[] = [
  {
    name: 'Apw Soluções',
    description: 'Apw Soluções Website',
    status: 'Ativo',
    url: 'http://www.apwsolucoes.com.br',
    imageUrl: 'apw-sol',
    order: 1,
  },
  {
    name: 'Espresso Speciale Cafeteria',
    description: 'Espresso Speciale Website',
    status: 'Ativo',
    url: 'http://www.espressospeciale.com.br',
    imageUrl: 'apw-ess',
    order: 2,
  },
  {
    name: 'Oficina de Artes Jundiaí',
    description: 'Oficina de Artes Jundiaí Website',
    status: 'Ativo',
    url: 'http://www.oficinadeartesjundiai.com.br/',
    imageUrl: 'apw-oaj',
    order: 3,
  },
  {
    name: 'Gestor Line',
    description: 'Sistema de gestão Line',
    status: 'Ativo',
    url: 'http://www.gestorline.com.br/',
    imageUrl: 'ges-lin',
    order: 4,
  },
];
