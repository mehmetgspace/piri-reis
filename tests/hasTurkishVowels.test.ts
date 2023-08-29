import {hasTurkishVowels} from "../src/functions/hasTurkishVowels";

describe('hasTurkishVowels function', () => {

  test('should return true for strings containing Turkish vowels', () => {
    const sampleString1 = "Merhaba";
    const sampleString2 = "öğrenci";
    expect(hasTurkishVowels(sampleString1)).toBe(true);
    expect(hasTurkishVowels(sampleString2)).toBe(true);
  });

  test('should return false for strings without Turkish vowels', () => {
    const sampleString = "tr";
    expect(hasTurkishVowels(sampleString)).toBe(false);
  });

})