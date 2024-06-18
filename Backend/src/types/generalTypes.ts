import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface servicesReturnTypes {
  data: any;
  statusCode: number;
}

// export interface generateJWTTypes {
//   email: string;
//   firstName?: string;
//   phone?: string;
// }

export interface ExtendedRequest extends Request {
  user?: any;
}

export interface payloadTypes extends JwtPayload {
  email: string;
  userName: string;
}
