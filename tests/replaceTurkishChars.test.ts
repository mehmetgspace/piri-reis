import {replaceTurkishChars} from "../src/functions/replaceTurkishChars";

test('Replace Turkish characters with English counterparts', () => {
  const input = "Ölüdeniz çok güzel.";
  const expectedOutput = "Oludeniz cok guzel."

  expect(replaceTurkishChars(input)).toBe(expectedOutput);
});