import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './auth.schema';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async authanticate(username: string, password: string) {
    const loginUser = await this.UserModel.findOne({
      username: username,
      password: password,
    }).exec();
    if (!loginUser) throw new NotFoundException('Invalid Credentials');
    const token = sign({ ...loginUser }, 'secret');
    return { token, loginUser };
  }

  async registerUser(User: any) {
    const register = new this.UserModel(User);
    await register.save();
    if (!register) throw new NotFoundException('Failed to add a user');
    const token = sign({ ...register }, 'secret');
    return { token, register };
  }
}
