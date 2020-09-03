import { IHtml } from './Html';
import { IField } from './Field';
export interface IPortfolioPage {
  _id: string;
  name: string;
  path: string;
  html: IHtml;
  css: string;
  fields: IField[];
  created: Date;
  modified: Date;
  active: boolean;
}