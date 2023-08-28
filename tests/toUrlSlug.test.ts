import {toUrlSlug} from "../src/functions/toUrlSlug";

describe('toUrlSlug function', () => {

  test('should convert regular sentences to URL-friendly slugs', () => {
    const sampleSentence = "Merhaba dünya!";
    expect(toUrlSlug(sampleSentence)).toBe("merhaba-dunya");
  });

  test('should handle multiple spaces and special characters', () => {
    const sampleSentence = "Merhaba,   bu çok _özel_ bir  cümle!";
    expect(toUrlSlug(sampleSentence)).toBe("merhaba-bu-cok-ozel-bir-cumle");
  });

  test('should return an empty string for a string with only special characters', () => {
    const sampleSentence = "!_!!";
    expect(toUrlSlug(sampleSentence)).toBe("");
  });

});