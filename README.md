# Piri Reis

A collection of JavaScript/TypeScript functions tailored for Turkish web projects.

![Piri Reis Logo](piri-reis.png)

![npm](https://img.shields.io/npm/v/piri-reis)

## Installation

Using npm:

```
npm install piri-reis
```

## Functions

### formatDate.ts

Formats a given date to Turkish locale.

```
formatDate(date: Date): string
```

### formatTurkishLira.ts

Formats a given number into Turkish Lira representation.

```
formatTurkishLira(amount: number): string
```

### hasTurkishVowels.ts

Checks if a string contains Turkish vowels.

```
hasTurkishVowels(str: string): boolean
```

### replaceTurkishChars.ts

Replaces Turkish characters in a string with their English counterparts.

```
replaceTurkishChars(input: string): string
```

### toUrlSlug.ts

Converts a given string into a URL-friendly slug, considering Turkish characters.

```
toUrlSlug(sentence: string): string
```

### isTRNationalIDValid.ts

Validates a given Turkish National ID.

```
isTRNationalIDValid(nationalID: string): boolean
```

### getCityFromPlate.ts

Retrieves the city name based on the provided Turkish plate code.

```
getCityFromPlate(plateNumber: string): string | null
```

### calculateTurkishVAT.ts

Calculates the Value Added Tax (VAT) amount for a given amount based on the Turkish VAT rate.

```
calculateTurkishVAT(amount: number, vatRate: number): number
```

## Contributing

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/YourFeatureName`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a pull request.
