# Paperwork Kit

Four print-ready document tools that run in your browser. No account, no install, no API key, no upload.

## What is in the box

```
index.html            hub page
invoice/index.html    Invoice & Quote Maker
worksheet/index.html  K-5 Worksheet Maker
allergen/index.html   Allergen Matrix
activity/index.html   KDP Activity Book Builder
```

## Quick start

1. Unzip the folder anywhere you can write (Desktop, Documents, a USB stick).
2. Double-click `index.html`.
3. Open a tool, fill the form, press **Print / Save as PDF**.

In the print dialog:

- Destination: **Save as PDF**
- Paper: **A4** for the invoice/quote (or US Letter), **US Letter** for the activity book
- Margins: **Default**
- Scale: **100% / Actual size**
- Headers and footers: **off**

The activity book is already 8.5 × 11 in. The invoice preview has an A4 / Letter switch.

## The four tools

**Invoice & Quote Maker** — line items with their own tax rate, VAT or US sales tax, percentage discount, payment terms, totals in words, GBP/USD/EUR/AUD/CAD, A4 or Letter. Exports a CSV ledger row and a JSON backup.

**K-5 Worksheet Maker** — addition, subtraction, multiplication, division or mixed; grade-appropriate ranges; worksheet on page 1, answer key on page 2; seed-deterministic.

**Allergen Matrix** — UK/EU 14 or US 9 allergens, one row per dish, print-ready grid, legend, contains summary, CSV export.

**KDP Activity Book Builder** — mazes, themed word searches, curated sudoku, cover, answer keys. 8.5 × 11 in pages, seed-deterministic.

## Privacy

Everything runs from local files. There is no `fetch`, no analytics, no cookie, no remote font. Drafts are stored in your browser's `localStorage` for that file path only. Clear site data or move the folder and the draft is gone.

## Printing tips

- If the browser adds a blank page at the end, turn off "Headers and footers" and set margins to Default.
- If a page is clipped, set scale to 100% (not "Fit to page").
- For double-sided printing, choose "Flip on long edge".
- The invoice totals use integer cents and round half-up; reprinting the same brief produces the same numbers.

## License

MIT. Use it commercially, modify it, ship it inside your own product. Attribution is appreciated but not required. See `LICENSE.md`.

## Support

This is a static pack: if a page does not open, try Chrome, Edge, Firefox or Safari (current versions). Very old browsers are not supported. If a calculation looks wrong, export the JSON and check the inputs before changing the code.
