import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Greet, GreetDocument } from '../greetSchemas/greetSchema';
import { Id } from './greet.types';

@Injectable()
export class GreetService {
  constructor(
    @InjectModel(Greet.name) private GreetModel: Model<GreetDocument>,
  ) {}

  async create(Greet: GreetDocument): Promise<Greet> {
    const createdGreet = new this.GreetModel(Greet);
    return createdGreet.save();
  }

  async getAllGreet() {
    const allGreets = await this.GreetModel.find().exec();
    return allGreets;
  }

  async updateGreet(id: any, Greet: GreetDocument) {
    const updateGreet = await this.GreetModel.findByIdAndUpdate(id, Greet, {
      new: true,
    });
    return updateGreet;
  }

  async deleteGreet(id: Id) {
    const deletedGreet = await this.GreetModel.findByIdAndRemove(id);
    return deletedGreet;
  }
}
