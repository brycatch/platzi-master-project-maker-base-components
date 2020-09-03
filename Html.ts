export interface IHtml {
  tag: string;
  selfClose: boolean;
  classList: string[];
  attributes: IHtmlAttribute[];
  Children: IHtml[];
}

export interface IHtmlAttribute {
  key: string;
  value: string;
}