import {calculateTurkishVAT} from "../src/functions/calculateTurkishVAT";

describe('calculateTurkishVAT', () => {
  it('correctly calculates VAT for a given amount and rate', () => {
    expect(calculateTurkishVAT(100, 18)).toBe(18);
    expect(calculateTurkishVAT(200, 8)).toBe(16);
  });

  it('handles zero VAT rate', () => {
    expect(calculateTurkishVAT(100, 0)).toBe(0);
  });
});