import { Injectable, Get, Body, NotFoundException } from '@nestjs/common';
import { Student } from './student.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {

    constructor(@InjectModel(Student.name) private studentModel: Model<Student>,)  {}  

    findAll() {
        return this.studentModel.find().exec();
    }


    async create(@Body() body): Promise<Student> {
        const studentData = {
            name: body.name,
            password: body.password,
        }
        const student = new this.studentModel(studentData);
        return await student.save();
    }
    
    
    async findOne(id: string) {
        const student = this.studentModel.findOne({_id: id});
        if (!student) {
            throw new NotFoundException(`Student #${id} not found`)
        }
        return student
    }

    async updateStudent(id, body): Promise<Student> {
        return await this.studentModel.findByIdAndUpdate(id, body).exec();
    }

    async deleteUser(id) {
        return await this.studentModel.findByIdAndDelete(id)
    }

}
