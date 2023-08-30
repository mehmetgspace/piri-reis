import {formatTurkishLira} from "../src/functions/formatTurkishLira";

test('should format numbers to Turkish Lira correctly', () => {
  expect(formatTurkishLira(1500)).toBe('₺1.500,00');
  expect(formatTurkishLira(250.75)).toBe('₺250,75');
  expect(formatTurkishLira(1000000)).toBe('₺1.000.000,00');
});