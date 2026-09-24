import {readFileSync} from "node:fs";
import assert from "node:assert/strict";
const html=readFileSync("contact.html","utf8");
const js=readFileSync("contact.js","utf8");
const css=readFileSync("style.css","utf8");
const receipt=readFileSync("contact-received.html","utf8");
const required=[
  /<form[^>]*id="contact-compose"[^>]*method="POST"[^>]*action="https:\/\/formsubmit\.co\/yuanche\.workflow@gmail\.com"/,
  /name="_honey"/,
  /name="_subject"/,
  /name="_next" value="https:\/\/friendgogle-bot\.github\.io\/contact-received\.html"/,
  /name="email" type="email"/,
  /name="message"[^>]*minlength="3"[^>]*maxlength="1800"/,
  /name="consent"[^>]*required/,
  /FormSubmit 處理並轉寄/,
  /mailto:yuanche\.workflow@gmail\.com/
];
required.forEach((rule,index)=>assert.match(html,rule,"contact check "+(index+1)));
assert.doesNotMatch(html,/name="_captcha" value="false"/,"retain default CAPTCHA");
assert.match(css,/\.contact-honeypot/);
assert.doesNotMatch(js,/window\.location\.href\s*=\s*["'`]mailto:/);
assert.match(receipt,/noindex,nofollow/);
assert.match(receipt,/不代表信箱送達已獲確認/);
assert.match(receipt,/mailto:yuanche\.workflow@gmail\.com/);
console.log("CONTACT_FORM_STATIC=PASS (10 form checks + client + receipt; live delivery remains UNVERIFIED)");
