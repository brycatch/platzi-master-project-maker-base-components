export interface IAuthenticatedBy {
  socialNetwork: ESocialNetwork;
  userName: string;
  photo?: string;
  confirmed: boolean;
}

enum ESocialNetwork {
  "Facebook",
  "Twitter",
  "GitHub",
}