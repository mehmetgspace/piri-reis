/**
 * Formats a given Date object to a Turkish date string.
 *
 * @param date - The Date object to be formatted.
 * @returns - A string representing the date in the format 'dd.mm.yyyy'
 */
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('tr-TR');
}