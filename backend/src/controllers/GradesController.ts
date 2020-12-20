import { Request, Response } from 'express';

import Grade from '../enums/Grade';
import IResult from '../views/IResult';
import ResultView from '../views/ResultView';

class GradesController {
  public async index(request: Request, response: Response<IResult>) {
    const result = new ResultView(Grade);

    return response.json(result);
  }
}

export default GradesController;
