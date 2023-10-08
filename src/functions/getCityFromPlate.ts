import {PLATE_CODES} from "../constants/plateCodes";

/**
 * Retrieves the city name based on the provided Turkish plate code.
 *
 * @param {string} plateNumber - A string representation of the Turkish plate code (e.g., '01', '34').
 * @returns {string|null} The name of the city corresponding to the plate code, or null if the plate code is not recognized.
 */
export const getCityFromPlate = (plateNumber: string): string | null => {
  return PLATE_CODES[plateNumber] || null;
}