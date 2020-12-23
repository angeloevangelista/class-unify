function keepZerosAtLeft(value: number, zeros: number): string {
  let textValue = String(value);

  while (textValue.length < (zeros || 2)) {
    textValue = '0' + textValue;
  }

  return textValue;
}

export default keepZerosAtLeft;
