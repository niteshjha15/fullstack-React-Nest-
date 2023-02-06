import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  AuthService: any;
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Req() req: Request, @Res() response: Response) {
    try {
      console.log('login', req.body);
      const res = await this.authService.authanticate(
        req.body.username,
        req.body.password,
      );
      return response.status(HttpStatus.OK).json({ res });
    } catch (error) {
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ msg: 'no user found' });
    }
  }

  @Post('/register')
  async register(@Req() req: Request, @Res() response: Response) {
    try {
      console.log(req.body);
      const res = await this.authService.registerUser(req.body);

      console.log({ res });
      return response.status(HttpStatus.OK).json({ res });
    } catch (error) {
      console.log(error);
      return response
        .status(HttpStatus.NOT_FOUND)
        .json({ msg: 'no user found' });
    }
  }
}
