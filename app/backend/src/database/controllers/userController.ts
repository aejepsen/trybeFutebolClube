import { NextFunction, Request, Response } from 'express';
import { sign, SignOptions, verify, JwtPayload } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UserService from '../services/userService';
import User from '../models/userModel';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';
const errorToken = 'Token must be a valid token';

export interface IReq extends Request {
  user?: JwtPayload | string;
}

class UserController {
  static login = async (req: Request, res: Response, next: NextFunction) => {
    const { email: emailUser, password } = req.body;
    if (!emailUser || !password) {
      return next({ statusCode: 400, message: 'All fields must be filled' });
    }
    const userLogin = await UserService.getLogin(emailUser) as User;
    const { email, username, role, id } = userLogin;
    if (!userLogin) {
      return next({ statusCode: 401, message: 'Incorrect email or password' });
    }
    const decriptedPassword = bcrypt.compare(password, userLogin.password);
    if (!decriptedPassword) {
      return next({ statusCode: 401, message: 'Incorrect email or password' });
    }
    const jwtConfig: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };
    const token = sign({ email, username, role, id }, JWT_SECRET, jwtConfig);
    return res.status(200).json({ token });
  };

  static veryfyToken = async (req: IReq, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) { return next({ statusCode: 401, message: errorToken }); }
    let verifyData: JwtPayload | string;
    try {
      verifyData = verify(token, 'jwt_secret') as JwtPayload;
      const x = await UserService.getLogin(verifyData.email) as User;
      return res.status(200).json({ role: x.role });
    } catch (error) {
      next({ statusCode: 401, message: errorToken });
    }
  };
}

export default UserController;
