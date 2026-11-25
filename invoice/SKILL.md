---
name: invoice-quote-maker
description: Turn a job brief into a print-ready invoice or quotation with per-line VAT, US sales tax or no tax; GBP/USD/EUR/AUD/CAD; A4 or US Letter; discount, payment terms and totals in words. Use when a freelancer, studio or small business needs to bill or quote a client without accounting software.
license: MIT
---

# Invoice & Quote Maker

Open `index.html`. Fill the seller, client and line items; the preview is the document.

- **Tax**: choose VAT, sales tax or none. The default rate fills new lines; every line keeps its own rate, so mixed-rate invoices work.
- **Discount**: a percentage applied to every line before tax. The discount row is the exact difference between gross and net.
- **Totals**: integer cents, rounded half-up; tax is summed per rate and shown per rate; the total is written out in words.
- **Quote mode**: switch the document type to Quotation; the due date becomes a 30-day validity date and the labels change.
- **Paper**: use the page-size selector for A4 or US Letter, then Print → Save as PDF at 100%.

Exports: CSV ledger row and a JSON backup. Drafts stay in this browser.

No network, no account, no AI model.
