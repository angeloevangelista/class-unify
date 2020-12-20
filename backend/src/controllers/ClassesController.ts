import { Request, Response } from 'express';

import IResult from '../views/IResult';
import ClassType from '../enums/ClassType';
import ResultView from '../views/ResultView';

class ClassesController {
  public async index(request: Request, response: Response<IResult>) {
    const result = new ResultView(ClassType);

    return response.json(result);
  }
}

export default ClassesController;
