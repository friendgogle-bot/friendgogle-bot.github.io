# 原澈官網｜Post-Launch Frame 3｜Contact Delivery QA

2026-09-25 · GitHub Pages 靜態站 · 公開署名「原澈」

## Scope and status

- Source changes: hosted FormSubmit HTML POST, native CAPTCHA left enabled, honeypot, length limits, explicit third-party processing consent, official `mailto:` fallback.
- User-facing return page is deliberately **not** an inbox receipt. It says that returning to the site does not independently prove delivery.
- `scripts/verify-contact.mjs` is **static-only** QA. CI passing, HTTP 200, service JSON or redirect are **not** proof that the named inbox received a message.
- **DIRECT_CONTACT_DELIVERY=OPEN** until the official mailbox activation, one end-to-end test, and the failure case have evidence.
- Third-party service: FormSubmit.co, not similarly named FormSubmit.io. Reference: https://formsubmit.co/documentation

## Human activation gate (owner of official mailbox)

1. On a trusted browser, load the form from the review build or the published website once the feature is approved for release.
2. Enter a harmless test message, leave the hidden anti-spam field empty, check consent, and submit including CAPTCHA if challenged.
3. Search `yuanche.workflow@gmail.com` for the FormSubmit confirmation email. Verify the sender/domain and exact destination before clicking; don't share the activation token in a public issue, commit or screenshot.
4. Confirm the form via the service's activation email. If no email arrives, inspect Inbox / Spam and leave status OPEN.
5. Submit a **new** harmless message with a distinctive test identifier and timestamp. Verify the exact content reached the official Gmail account, not merely a provider thank-you page; record time, subject, mailbox arrival, and whether reply address is usable.
6. Repeat with browser-valid but network-offline attempt and with invalid/blank form to verify no false success; verify mailto remains usable.
7. On Chrome Android and Safari iPhone, check native form, CAPTCHA, the provider redirect, clear privacy consent, and readable failure fallback.

## Release gate

Merge PR only when owner agrees to use FormSubmit and the activation test is available; until then main remains the prior honest mailto-only contact form. After merge, verify Pages deployment and public HTTPS `/contact.html`, `/contact-received.html`, status semantics, and receipt in real Gmail. If activation is not complete, do **not** mark this frame as real delivery PASS.

## Security and data scope

- No credentials, API keys, Gmail tokens or server-side secrets in site files.
- Site sends only entered contact fields after explicit checkbox consent. The service handles delivery; visitor is instructed not to submit sensitive identity, health or banking data.
- Client-side field validation, honeypot and vendor CAPTCHA are basic controls, **not** server-controlled rate limiting and cannot guarantee zero abuse.
- No client response, confirmation page, or provider acceptance alone is represented as inbox delivery or assigned a fabricated receipt ID.
