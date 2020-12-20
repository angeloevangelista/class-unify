import ClassType from '../enums/ClassType';

type Class = {
  _id?: string;
  type: ClassType;
  date: Date;
  link: string;
};

export default Class;
