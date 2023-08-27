/**
 * Converts a given Date object into a string formatted for the Turkish locale.
 *
 * @param date - A Date object that needs to be formatted.
 * @returns Formatted date string in the 'dd.mm.yyyy' format.
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('tr-TR');
}