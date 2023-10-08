import {getCityFromPlate} from "../src/functions/getCityFromPlate";
import {PLATE_CODES} from "../src/constants/plateCodes";

test('City determination from plate code', () => {
  expect(getCityFromPlate('01')).toBe('Adana');
  expect(getCityFromPlate('34')).toBe('İstanbul');

  // It should return null for an unknown plate code
  expect(getCityFromPlate('99')).toBeNull();

  // Let's run a test for each city in the current PLATE_CODES object
  for (let plate in PLATE_CODES) {
    expect(getCityFromPlate(plate)).toBe(PLATE_CODES[plate]);
  }
});