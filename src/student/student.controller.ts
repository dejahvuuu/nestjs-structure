import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get('all')
    obtainStudents () {
        return this.studentService.findAll();
    }

    @Post()
    createStudents(@Body() body) {
        return this.studentService.create(body)
    }

    @Get(':id') 
    findOne(@Param('id') id) {
        return this.studentService.findOne(id)
    }

    @Put(':id')
    updateStudent(@Param('id') id, @Body() body) {
        return this.studentService.updateStudent(id, body)
    }

    @Delete(':id')
    deleteUser(@Param('id') id) {
        return this.studentService.deleteUser(id)
    }
}
