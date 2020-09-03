import { IHtml } from "./Html";

export interface IDesignPage {
  _id: string;
  name: string;
  path: string;
  html: IHtml;
  css: string;
  created: Date;
  modified: Date;
  active: boolean;
}