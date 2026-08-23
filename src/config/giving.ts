// Giving configuration.
//
// The Givebutter campaign id is confirmed: the Wix Donate page embeds
// <givebutter-widget id="pXPKNp">. The account id that the widget script
// URL needs (?acct=...) was not present anywhere in the captured Wix
// donate page HTML — only the <givebutter-widget> tag itself was found, no
// <script src="https://widgets.givebutter.com/..."> tag. Replace the
// placeholder below with the real Givebutter account id before shipping.

// REPLACE: Givebutter account id
export const GIVEBUTTER_ACCOUNT_ID = 'GIVEBUTTER_ACCOUNT_ID';

export const campaignId = 'pXPKNp';

export const givebutterWidgetScriptSrc = `https://widgets.givebutter.com/latest.umd.cjs?acct=${GIVEBUTTER_ACCOUNT_ID}&p=`;

export const givebutterHostedUrl = `https://givebutter.com/${campaignId}`;
