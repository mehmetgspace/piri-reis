/**
 * Replaces Turkish characters in a string with their English counterparts.
 *
 * @param input - The string containing Turkish characters to be replaced.
 * @returns A string with Turkish character replaced by their English equivalents.
 */
export const replaceTurkishChars = (input: string): string => {
  const turkishToEnglish: { [key: string]: string } = {
    'ç': 'c',
    'Ç': 'C',
    'ğ': 'g',
    'Ğ': 'G',
    'ı': 'i',
    'İ': 'I',
    'ö': 'o',
    'Ö': 'O',
    'ş': 's',
    'Ş': 'S',
    'ü': 'u',
    'Ü': 'U'
  };

  return input.split('').map(char => turkishToEnglish[char] || char).join('');
}