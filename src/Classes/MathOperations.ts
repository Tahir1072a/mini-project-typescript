export interface IMathOperations {
  add(...numbers: number[]): number;
  sub(subtract: number, ...numbers: number[]): number;
  multiply(...numbers: number[]): number;
  divide(divided: number, ...numbers: number[]): number;
}

export class MathOperations implements IMathOperations {
  add(...numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current);
  }

  divide(divided: number, ...numbers: number[]): number {
    numbers.map((number) => {
      if (number !== 0) {
        divided /= number;
      } else throw new Error("No number can be divided by zero");
    });

    return divided;
  }

  multiply(...numbers: number[]): number {
    let result: number = 1;
    for (const number of numbers) {
      if (number === 0) return 0;
      else result *= number;
    }

    return result;
  }

  sub(subtract: number, ...numbers: number[]): number {
    return numbers.reduce((acc, number) => {
      return acc - number;
    }, subtract);
  }
}
