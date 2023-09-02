import {isTRNationalIDValid} from "../src/functions/isTRNationalIDValid";

describe('isTRNationalIDValid function', () => {
  test('should return true for valid Turkish national ID numbers', () => {
    // please enter a valid tc ID number for testing
    expect(isTRNationalIDValid('___________')).toBeTruthy();
  });

  test('should return false for invalid Turkish national ID numbers', () => {
    expect(isTRNationalIDValid('11111111111')).toBeFalsy();
  });

  test('should return false for non-numeric values', () => {
    expect(isTRNationalIDValid('ABCDEFGHIJK')).toBeFalsy();
  });

  test('should return false for IDs that are not 11 digits', () => {
    expect(isTRNationalIDValid('12345')).toBeFalsy();
  });
});