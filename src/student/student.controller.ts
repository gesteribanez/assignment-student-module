import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async createStudent(@Body() data: Partial<Student>): Promise<Student> {
    return this.studentService.createStudent(data);
  }

  @Get()
  async getStudent(): Promise<Student[]> {
      return this.studentService.getStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: number): Promise<Student> {
      return this.studentService.getStudentById(id);
  }

  @Put(':id')
  async updateStudent(
      @Param('id') id: number,
      @Body() data: Partial<Student>,
  ): Promise<Student> {
      return this.studentService.updateStudent(id, data);
  }
}
