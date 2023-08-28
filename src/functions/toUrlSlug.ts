import {replaceTurkishChars} from "./replaceTurkishChars";

/**
 * Converts a given sentence to a URL-friendly string.
 *
 * @param sentence - The sentence to be converted.
 * @returns A URL-friendly representation of the given sentence.
 */
export const toUrlSlug = (sentence: string): string => {
  // Convert Turkish characters to English equivalents
  const cleanedSentence = replaceTurkishChars(sentence);

  return cleanedSentence
    .toLowerCase() // Convert the entire string to lowercase
    .replace(/[\s_]+/g, '-') // Replace spaces or underscores with hyphens
    .replace(/[^a-z0-9-]/g, '') // Remove any characters that are not letters, numbers, or hyphens
    .replace(/-+/g, '-') // Collapse consecutive hyphens into a single hyphen
    .replace(/^-|-$/g, ''); // Remove any hyphens at the start or end of the string
}