import { MathOperations } from "../Classes/MathOperations.js";

// Test edilecek metodun adını belirtir.
describe("MathOperations", () => {
  let mathOperations: MathOperations;

  // Her test çalışmadan önce yeni bir sınıf örneği başlatır.
  beforeEach(() => {
    mathOperations = new MathOperations();
  });

  describe("add", () => {
    //Test senaryosu tanımlar.
    it("should add multiple numbers", () => {
      expect(mathOperations.add(1, 2, 3)).toBe(6);
      expect(mathOperations.add(0, 0, 0)).toBe(0);
    });

    it("should return the same number when adding a single number", () => {
      expect(mathOperations.add(5)).toBe(5);
    });
  });

  describe("sub", () => {
    it("should subtract multiple number from the first number", () => {
      expect(mathOperations.sub(10, 2, 5)).toBe(3);
      expect(mathOperations.sub(0, 0, 0)).toBe(0);
    });

    it("should return the initial number if no numbers to subtract are provided", () => {
      expect(mathOperations.sub(5)).toBe(5);
    });
  });

  describe("multiply", () => {
    it("should multiply multiple numbers", () => {
      expect(mathOperations.multiply(10, 4, 2)).toBe(80);
      expect(mathOperations.sub(0, 0, 0)).toBe(0);
    });

    it("should return the initial number if no numbers to subtract are provided", () => {
      expect(mathOperations.sub(5)).toBe(5);
    });
  });

  describe("divide", () => {
    it("should divide the first number by the following numbers", () => {
      expect(mathOperations.divide(10, 2, 5)).toBe(1);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => mathOperations.divide(10, 0)).toThrow(
        "No number can be divided by zero",
      );
    });
  });
});
