import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GreetController } from './greet.controller';
import { ChatController } from 'src/chatGpt/chatgpt.controller';
import { GreetService } from './greet.service';
import { Greet, GreetSchema } from '../greetSchemas/greetSchema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { User, UserSchema } from 'src/auth/auth.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nitesh_jha:bQOYn3PQLl9GFjIh@cluster0.61fm6xh.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      { name: Greet.name, schema: GreetSchema },
      { name: User.name, schema: UserSchema },
    ]),
    PassportModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
  ],
  controllers: [GreetController, ChatController, AuthController],
  providers: [GreetService, JwtStrategy, AuthService],
})
export class GreetModule {}
