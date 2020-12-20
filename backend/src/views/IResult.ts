interface IResult {
  success: boolean;
  message: string | null;
  data: object | null | undefined;
}

export default IResult;
