// Givebutter (the ministry's donation processor).
// ACCOUNT_ID: the 16-character Widgets account id (Dashboard → Settings → Developers → Widgets →
// Installation). Not a secret: Givebutter prints the same id in the public markup of
// givebutter.com/UuiShf, which is where this value was read from. Not to be confused with a
// widget id like pXPKNp. If emptied, the Give page falls back to linking to the hosted page.
export const GIVEBUTTER_ACCOUNT_ID = 'Am6Iry37cjZNAR9u';
export const GIVEBUTTER_CAMPAIGN = 'UuiShf'; // "Website Donations" campaign code
export const GIVEBUTTER_CAMPAIGN_URL = `https://givebutter.com/${GIVEBUTTER_CAMPAIGN}`;
export const GIVEBUTTER_WIDGETS_SRC = `https://widgets.givebutter.com/latest.umd.cjs?acct=${GIVEBUTTER_ACCOUNT_ID}`;
// SIGNUP_WIDGET_ID: the id of a "Signup form" widget created in the Dashboard (Account →
// Integrations → Widgets → New widget → Signup form → Publish → Embed). Not a secret, same as
// the account id. If empty, the Contact page links to the Giving Hub instead of embedding.
export const GIVEBUTTER_SIGNUP_WIDGET_ID = '';
export const GIVEBUTTER_SIGNUP_URL = 'https://givebutter.com/together-with-grace'; // Giving Hub, the hosted fallback

export type GiveFrequency = 'once' | 'monthly' | 'quarterly' | 'yearly';

/** Hosted campaign URL with optional prefilled amount/frequency (documented Givebutter URL params). */
export function givebutterUrl(opts: { amount?: number; frequency?: GiveFrequency } = {}): string {
  const params = new URLSearchParams();
  if (opts.amount) params.set('amount', String(opts.amount));
  if (opts.frequency) params.set('frequency', opts.frequency);
  const query = params.toString();
  return query ? `${GIVEBUTTER_CAMPAIGN_URL}?${query}` : GIVEBUTTER_CAMPAIGN_URL;
}
