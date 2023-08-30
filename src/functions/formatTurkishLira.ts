/**
 * Formats a number to Turkish Lira representation.
 *
 * @param amount - The number to be formatted.
 * @returns A string representing the amount in Turkish Lira format.
 */
export const formatTurkishLira = (amount: number): string => {
  return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(amount);
}