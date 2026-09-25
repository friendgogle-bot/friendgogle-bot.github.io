# 原澈官網｜Formspree 替代候選｜2026-09-25

## Why this branch exists
FormSubmit.co correctly accepted an HTTPS POST but no activation email or real inbox receipt appeared in yuanche.workflow@gmail.com. A working mailto fallback and a successful manually sent iCloud message prove the official mailbox is not generally unable to receive mail. Do not turn provider acceptance into a delivery assertion.

## Human setup gate
1. The official mailbox owner signs up at https://formspree.io/ with yuanche.workflow@gmail.com and completes Formspree account email verification.
2. Create one form named 原澈官網｜站內留言; ensure email action target is the verified yuanche.workflow@gmail.com. Formspree dashboard stores submissions independently of Gmail notifications.
3. Copy only the publicly embeddable form endpoint in the shape https://formspree.io/f/XXXXXXXX (not password, login link, account token, API bearer).
4. Replace FORM_ID_REQUIRED in contact.html, then run node scripts/verify-contact-formspree.mjs, review PR, and test from HTTPS preview / staged route, not file://.
5. Send harmless unique code YC-F5-20260925-FORMSPREE-01. Verify both: (a) Formspree dashboard submission entry, (b) genuine email in official Gmail. Provider acceptance alone is not enough for the email receipt acceptance.
6. Test mobile input, blank/invalid email, consent, spam challenge, form offline, and mailto fallback. Do not claim CAPTCHA or honeypot makes spam impossible.
7. Only after evidence: merge PR into main, verify Pages live site, send new code YC-F5-20260925-PROD-02 and confirm dashboard+official inbox; then remove prior unlisted FormSubmit activation test from deployment and codebase and document closure.

## Safety and release gate
This branch deliberately uses FORM_ID_REQUIRED; its GitHub Pages deploy workflow fails on the placeholder. The PR must stay DRAFT and not merge until owner provides an actual form ID and proves delivery. No sensitive data, login secrets or credentials in GitHub. A Formspree ID is a public form endpoint; not an account secret.

Formspree current docs: https://help.formspree.io/articles/building-your-form/building-an-html-form
Official honeypot is _gotcha: https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering
Notification target must be configured/verified in dashboard: https://help.formspree.io/articles/form-and-project-settings/changing-a-form-email-address
