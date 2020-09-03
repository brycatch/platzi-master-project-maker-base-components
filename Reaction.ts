import { User } from './User';
import { IDesign } from './Design';
import { IPortfolio } from './Portfolio';

export interface IReaction {
  _id: string;
  user: string | User;
  type: EReactionTypes;
  design?: string | IDesign;
  portfolio?: string | IPortfolio;
  created: Date;
}

enum EReactionTypes {
  "Favorite",
  "Like"
}