/**
 * Validates a given Turkish National ID.
 *
 * @param {string} nationalID - The Turkish National ID to validate.
 * @returns {boolean} true if the given ID is a valid Turkish National ID, otherwise false.
 */
export const isTRNationalIDValid = (nationalID: string): boolean => {
  // Convert ID to a string
  const value = nationalID.toString();

  // If the length isn't 11, or it doesn't contain only digits, it's not valid
  if (value.length !== 11 || !/^\d+$/.test(value)) {
   return false;
  }

  // Convert each digit in the ID to an array
  const digits = value.split('').map(d => parseInt(d, 10));

  // If the first digit is 0, it's not valid
  if (digits[0] === 0) {
    return false;
  }

  // Calculate the 10th digit
    const calculated10thDigit = ((digits[0] + digits[2] + digits[4] + digits[6] + digits[8]) * 7
      - (digits[1] + digits[3] + digits[5] + digits[7])) % 10;

  // Check if the 10th digit is correct
  const check10thDigit = calculated10thDigit === digits[9];

  // Check if the 11th digit is correct
  const check11thDigit = (digits.slice(0, 10).reduce((acc, val) => acc + val) % 10) === digits[10];

  // Return true if all checks pass
  return check10thDigit && check11thDigit;
};