import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';
import IResult from '../views/IResult';

function errorHandler(
  err: Error,
  request: Request,
  response: Response<IResult>,
  _: NextFunction,
) {
  let statusCode = 500;

  const responseBody: IResult = {
    success: false,
    message: 'Internal server error.',
    data: null,
  };

  if (err instanceof AppError) {
    statusCode = err.statusCode;

    responseBody.message = err.message;
  }

  let firstStackNode: string | undefined | null = null;
  if (err.stack) firstStackNode = err.stack?.split('\n')[1]?.split('/')?.pop();

  console.log(`❌  An error occurred: ${err.message}`);
  if (firstStackNode) console.log(`First stack node: ${firstStackNode}`);

  return response.status(statusCode).json(responseBody);
}

export default errorHandler;
