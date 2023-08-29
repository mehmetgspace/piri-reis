/**
 * Checks if a string contains any Turkish vowels.
 *
 * @param str The string to check.
 * @returns True if the string contains Turkish vowels, otherwise false.
 */
export const hasTurkishVowels = (str: string): boolean => {
  // Define a regex pattern to match Turkish vowels
  const turkishVowels = /[aeıioöuü]/;

  // Convert the input string to lowercase to ensure case-insensitive matching and check if it contains
  // any of the defined Turkish vowels
  return turkishVowels.test(str.toLowerCase());
}