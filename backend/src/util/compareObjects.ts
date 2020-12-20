interface IObject {
  [key: string]: any;
}

function compareObjects(objectA: IObject, objectB: IObject): boolean {
  const keysA = Object.keys(objectA);
  const keysB = Object.keys(objectB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key of keysA) {
    if (objectA[key] !== objectB[key]) {
      return false;
    }
  }

  return true;
}

export default compareObjects;
