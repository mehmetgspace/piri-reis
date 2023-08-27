import {formatDate} from "../src/functions/formatDate";

test('Date formatting function', () => {
  const sampleDate = new Date('2023-08-27');
  expect(formatDate(sampleDate)).toBe('27.08.2023');
});