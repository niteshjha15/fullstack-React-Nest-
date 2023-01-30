import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GreetController } from './greet.controller';
import { GreetService } from './greet.service';
import { Greet, GreetSchema } from '../greetSchemas/greetSchema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nitesh_jha:bQOYn3PQLl9GFjIh@cluster0.61fm6xh.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Greet.name, schema: GreetSchema }]),
  ],
  controllers: [GreetController],
  providers: [GreetService],
})
export class GreetModule {}
