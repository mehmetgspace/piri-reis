/**
 * Calculates the Value Added Tax (VAT) amount for a given amount based on the Turkish VAT rate.
 *
 * @param amount - The amount to calculate the VAT for.
 * @param vatRate - The VAT rate to apply (as a percentage).
 * @returns The calculated VAT amount.
 */
export const calculateTurkishVAT = (amount: number, vatRate: number): number => {
  if (isNaN(amount) || isNaN(vatRate)) {
    throw new Error('Both amount and VAT rate must be numerical.');
  }

  return amount * (vatRate / 100);
}