import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'


@Schema()
export class Student extends Document {
    @Prop()
    name: string;
    @Prop()
    password: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
