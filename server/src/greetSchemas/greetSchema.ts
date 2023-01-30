import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GreetDocument = HydratedDocument<Greet>;

@Schema()
export class Greet {
  @Prop()
  name: string;
}

export const GreetSchema = SchemaFactory.createForClass(Greet);
