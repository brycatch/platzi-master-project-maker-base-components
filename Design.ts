import { IDesignPage } from './DesignPage';
export interface IDesign {
  _id: string;
  name: string;
  path: string;
  pages: IDesignPage[];
  tags: string[];
  created: Date;
  modified: Date;
}