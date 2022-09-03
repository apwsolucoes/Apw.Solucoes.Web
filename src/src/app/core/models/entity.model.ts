export interface IEntity {
  id?: any;
}

export abstract class Entity {
  constructor(values: IEntity = {}) {
      for ( const value in values ) {
          if ( value !== null ) {
              this[value] = values[value];
          }
      }
  }
}
