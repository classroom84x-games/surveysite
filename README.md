# SurveyHub V1.1 — colorful survey rewards starter

A responsive, playful static frontend for a survey rewards platform. Demo mode is enabled by default; it does not provide real accounts, verified earnings, a live reward ledger, or actual gift-card payouts.

## Deploy in about 5 minutes

1. Extract the ZIP.
2. Upload `index.html`, `styles.css`, and `app.js` to your hosting public web root (for cPanel, commonly `public_html/`).
3. Visit your domain over HTTPS and confirm the page loads.
4. In Quick setup, add your brand and optional browser-safe BitLabs app token. Settings are saved in that browser only.

## Current integration status

- **BitLabs:** the button opens the offer wall with a user ID and app token. Use only a token issued for your approved publisher account. For real reward accounting, implement and verify server-side reward callbacks, duplicate protection, and reversal handling.
- **Tremendous:** payout UI is a placeholder. Add server-side order creation, idempotency, webhook verification, funding checks, and sandbox tests before enabling production payouts.
- **No live ledger/authentication:** balances are fixed demo placeholders. This starter has no database, member authentication, callback receiver, or real payout capability. Do not advertise demo values as actual earnings.
- **Reward timing disclosure:** the page states that rewards may take up to 36 hours to appear in a balance or account statements while provider data is processed and verified. Keep this wording aligned with actual provider terms and do not promise a timing window unless it is accurate for your program.

## Official docs

- BitLabs web integration: https://bitlabs.ai/integrations/web-integration
- BitLabs reward callbacks: https://developer.bitlabs.ai/docs/general-reward-callbacks
- Tremendous API introduction: https://developers.tremendous.com/docs/introduction

## Before accepting members

Implement secure authentication, database-backed balances, callback verification, transaction deduplication, reversal reconciliation, audit logs, admin controls, abuse prevention, privacy notice, terms, eligibility rules, support contact, and payout disclosures. Test all reward and payout flows in provider test/sandbox environments first.
