import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

// An instance of a model is called a Document

/*
1. Create entity
1.1 Define Schema
1.3 Extend Mongoose Model #Document 
1.4 Name Props @Prop
*/

@Schema()
export class Filtro extends Document {
    @Prop()
    name: string;
    @Prop()
    password: string;
}

export const FiltroSchema = SchemaFactory.createForClass(Filtro);