import Grade from '../enums/Grade';
import Class from './Class';

type Student = {
  name: string;
  email: string;
  grade: Grade;
  classes: Class[];
};

export default Student;
