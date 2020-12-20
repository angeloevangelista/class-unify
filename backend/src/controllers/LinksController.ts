import mongoose from 'mongoose';
import { isAfter } from 'date-fns';
import { Request, Response } from 'express';

import AppError from '../errors/AppError';
import ResultView from '../views/ResultView';

import Student from '../mongoose/schemas/Student';
import IResult from '../views/IResult';

class LinksController {
  public async find(request: Request, response: Response<IResult>) {
    const { student_id } = request.params;

    const studentIdIsValid = mongoose.Types.ObjectId.isValid(student_id);

    if (!studentIdIsValid) throw new AppError('Invalid Student ID.');

    const student = await Student.findById(student_id);

    if (!student) throw new AppError('Student not found.');

    if (student.classes.length === 0)
      throw new AppError('The student has no booked classes.');

    const nextClass = student.classes
      .filter((studentClass) => isAfter(studentClass.date, new Date()))
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0];

    return response.json(new ResultView(nextClass));
  }

  public async update(request: Request, response: Response<IResult>) {
    const { student_id } = request.params;
    const { class_id, link } = request.body;

    const studentIdIsValid = mongoose.Types.ObjectId.isValid(student_id);

    if (!studentIdIsValid) throw new AppError('Invalid Student ID.');

    const classIdIsValid = mongoose.Types.ObjectId.isValid(class_id);

    if (!classIdIsValid) throw new AppError('Invalid Class ID.');

    const student = await Student.findById(student_id);

    if (!student) throw new AppError('Student not found.');

    if (student.classes.length === 0)
      throw new AppError('The student has no booked classes.');

    const indexOfClass = student.classes.findIndex((studentClass) =>
      new mongoose.Types.ObjectId(class_id).equals(studentClass._id!),
    );

    if (indexOfClass === -1) throw new AppError('Class not found.');

    student.classes[indexOfClass].link = link;

    student.markModified('classes');
    await student.save();

    return response.json(new ResultView(student.classes));
  }
}

export default LinksController;
