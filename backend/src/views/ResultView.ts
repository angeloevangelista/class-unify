import IResult from './IResult';

class ResultView implements IResult {
  success: boolean;
  message: string | null;
  data: object | null | undefined;

  constructor(
    data: object | null | undefined,
    success = true,
    message: string | null = null,
  ) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}

export default ResultView;
