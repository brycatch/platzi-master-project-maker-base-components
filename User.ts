import { Record } from "./Record";
import { IAuthenticatedBy } from './AuthenticatedBy';
import { IReaction } from './Reaction';

export interface User {
  _id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  authenticatedBy: IAuthenticatedBy[];
  reactions: IReaction[];
  records: Record[];
  interests: string[];
  demography: IUserDemography;
  created: Date;
  modified: Date;
  active: boolean;
}

export interface IUserDemography {
  age: number;
  // TODO: Profession debe tener una fuente de datos para que sean valore predefinidos
  profession: string;
  language: string;
  // TODO: comparar con otras plataformas sobre cómo muestran ellos este dato
  gender: string;
  country: string;
  city: string;
}