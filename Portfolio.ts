import { User } from './User';
import { IDesign } from './Design';
import { IPortfolioPage } from './PortfolioPage';
export interface IPortfolio {
  _id: string;
  user: string | User;
  design: string | IDesign;
  path: string;
  pages: IPortfolioPage[];
  tags: string[];
  created: Date;
  modified: Date;
  active: boolean;
}