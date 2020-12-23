import { Request, Response } from 'express';

import AppError from '../errors/AppError';
import ResultView from '../views/ResultView';

import Grade from '../enums/Grade';
import Student from '../mongoose/schemas/Student';
import IResult from '../views/IResult';

class StudentsController {
  public async index(request: Request, response: Response<IResult>) {
    const students = await Student.find().select([
      '_id',
      'name',
      'email',
      'grade',
      'classes',
    ]);

    return response.json(new ResultView(students));
  }

  public async create(request: Request, response: Response<IResult>) {
    const { name, email, grade } = request.body;

    const emailIsAlreadyInUse = await Student.findOne({
      email,
    }).select('_id');

    if (emailIsAlreadyInUse) throw new AppError('Email is already in use.');

    const gradeIsValid = Object.keys(Grade).includes(grade);

    if (!gradeIsValid) throw new AppError('Invalid Grade.');

    const student = await Student.create({
      name,
      email,
      grade: (<any>Grade)[grade],
      classes: [],
    });

    return response.json(new ResultView(student));
  }
}

export default StudentsController;
