import { IDesign } from './Design';
import { IPortfolio } from './Portfolio';
import { User } from './User';

export interface Record {
  _id: string;
  user: string | User;
  design?: string | IDesign;
  portfolio: string | IPortfolio;
  created: Date;
}