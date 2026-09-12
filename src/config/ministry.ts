// Dates the copy counts from. Nothing here needs touching from year to year: the pages
// compute "since", "N years", and the copyright year from these at build time.

/** June 2013: Vicki's first trip, the start of the thread. */
export const FOUNDED_YEAR = 2013;

/** Whole years since the founding, as of the build. */
export function yearsSinceFounding(now: Date = new Date()): number {
  return now.getFullYear() - FOUNDED_YEAR;
}

const ONES = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
  'eighteen', 'nineteen',
];
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

/** "thirteen", "twenty-one"… for headline copy; falls back to digits past ninety-nine. */
export function numberWord(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 99) return String(n);
  if (n < 20) return ONES[n];
  const tens = TENS[Math.floor(n / 10)];
  return n % 10 ? `${tens}-${ONES[n % 10]}` : tens;
}

/** Capitalised for the start of a sentence: "Thirteen". */
export function numberWordCap(n: number): string {
  const w = numberWord(n);
  return w.charAt(0).toUpperCase() + w.slice(1);
}
