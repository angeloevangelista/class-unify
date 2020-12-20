import mongoose, { Schema, Document } from 'mongoose';
import Class from '../../entities/Class';

import Student from '../../entities/Student';
import ClassType from '../../enums/ClassType';

interface IStudentDocument extends Student, Document {}

const ClassSchema = new Schema<Class>({
  type: {
    type: ClassType,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
});

const StudentSchema = new Schema<Student>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  classes: {
    type: [ClassSchema],
    required: true,
  },
});

export default mongoose.model<IStudentDocument>('Student', StudentSchema);
