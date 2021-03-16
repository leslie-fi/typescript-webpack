export interface SessionToken {
  tokenId: string;
  username: string;
  valid: boolean;
  expirationTime: Date;
  accessRights: AccessRights[];
}

export enum AccessRights {
  CREATE,
  READ,
  UPDATE,
  DELETE
}