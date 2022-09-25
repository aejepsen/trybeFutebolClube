import { JwtPayload, verify } from 'jsonwebtoken';
import { Request, NextFunction, Response } from 'express';
import 'express-async-errors';

const JWT_SECRET = 'jwt_secret';

const errorToken = [
  {
    statusCode: 401,
    message: 'Token must be a valid token',
  },
  {
    statusCode: 401,
    message: 'Token must be a valid token',
  },
];

export interface IReq extends Request {
  user?: JwtPayload | string;
}

const verifyToken = (req: IReq, _res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) { return next(errorToken[0]); }
    const decoded = verify(token, JWT_SECRET);
    req.user = decoded;
    if (!decoded) { next(errorToken[1]); }
    next();
  } catch (error) {
    next(errorToken[1]);
  }
};

export default {
  verifyToken,
};
