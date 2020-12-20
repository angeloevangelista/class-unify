import mongoose from 'mongoose';
import { isAfter, isBefore, parseISO, isEqual } from 'date-fns';
import { Request, Response } from 'express';

import AppError from '../errors/AppError';
import ResultView from '../views/ResultView';

import Student from '../mongoose/schemas/Student';
import IResult from '../views/IResult';
import Class from '../entities/Class';
import ClassType from '../enums/ClassType';

class ScheduleController {
  public async index(request: Request, response: Response<IResult>) {
    const { student_id } = request.params;

    const studentIdIsValid = mongoose.Types.ObjectId.isValid(student_id);

    if (!studentIdIsValid) throw new AppError('Invalid Student ID.');

    const studentSchedule = await Student.findById(student_id).select(
      'classes',
    );

    if (!studentSchedule) throw new AppError('Student not found.');

    // const classes = studentSchedule?.classes.filter((studentClass) =>
    //   isAfter(studentClass.date, new Date()),
    // );

    return response.json(new ResultView(studentSchedule.classes));
  }

  public async create(request: Request, response: Response<IResult>) {
    const { student_id } = request.params;
    const { classes } = request.body;

    let classTypesAreValid = true;

    (<Array<Class>>classes).forEach((studentClass) => {
      if (!Object.keys(ClassType).includes(studentClass.type))
        classTypesAreValid = false;
    });

    if (!classTypesAreValid) throw new AppError('Invalid class types.');

    const checkedClasses: Class[] = (<Array<Class>>classes).map(
      (studentClass) => ({
        ...studentClass,
        date: parseISO(String(studentClass.date)),
      }),
    );

    const thereAreClassesInThePast = checkedClasses.some(
      ({ date: classDate }) => isBefore(classDate, new Date()),
    );

    if (thereAreClassesInThePast)
      throw new AppError('You can only book future classes.');

    const studentIdIsValid = mongoose.Types.ObjectId.isValid(student_id);

    if (!studentIdIsValid) throw new AppError('Invalid Student ID.');

    const student = await Student.findById(student_id);

    if (!student) throw new AppError('Student not found.');

    const joinedClasses = [
      ...student.classes,
      ...checkedClasses,
    ].filter((studentClass) => isAfter(studentClass.date, new Date()));

    let hasClassTimeConflicts = false;

    joinedClasses.forEach((studentClass) => {
      const hasMoreThanOneClassForThisTime =
        joinedClasses.filter((innerStudentClass) =>
          isEqual(innerStudentClass.date, studentClass.date),
        ).length > 1;

      if (hasMoreThanOneClassForThisTime) hasClassTimeConflicts = true;
    });

    if (hasClassTimeConflicts)
      throw new AppError('There are conflicts with the class schedule.');

    student.classes = joinedClasses;

    await student.save();

    return response.json(new ResultView(student.classes));
  }
}

export default ScheduleController;
