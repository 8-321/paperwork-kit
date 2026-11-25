---
name: paperwork-kit
description: Four offline, print-ready document generators for small businesses, teachers and self-publishers - invoice and quotation with VAT/sales tax, K-5 math worksheets with answer keys, a UK/EU or US allergen matrix, and a KDP-style activity book with mazes, word searches and sudoku. Use when the user needs a clean PDF/printable without accounting software, a worksheet generator, an allergen chart, or a children's puzzle book. No network, no API key, no AI model - every page is produced deterministically in the browser.
license: MIT
---

# Paperwork Kit

A folder of four small tools. Each one is a single `index.html` that runs from disk in any modern browser. Nothing is installed, nothing is uploaded, and no model is called.

| Folder | Tool | What it makes |
|---|---|---|
| `invoice/` | Invoice & Quote Maker | A4/Letter invoice or quotation with per-line VAT/sales tax, discounts, totals in words, CSV ledger row |
| `worksheet/` | K-5 Worksheet Maker | Printable math worksheet plus a matching answer key |
| `allergen/` | Allergen Matrix | Dish × allergen grid for UK/EU 14 or US 9, with contains summary and CSV |
| `activity/` | KDP Activity Book Builder | 8.5 × 11 in book with mazes, themed word searches, sudoku, cover and answer keys |

Open `index.html` at the root for the hub, or open a tool folder directly.

## How to run

1. Unzip the pack anywhere.
2. Double-click `index.html` (or a tool's `index.html`).
3. Fill the form. The preview updates as you type.
4. Press **Print / Save as PDF**. In the print dialog choose **Save as PDF**, paper size as labelled, margins **Default**, scale **100% / Actual size**.

No server, no build step, no internet connection. Drafts are kept in `localStorage` for that browser only.

## Tool 1 - Invoice & Quote (`invoice/`)

Inputs: seller and client blocks, currency (GBP/USD/EUR/AUD/CAD), document number, issue date, payment terms, tax mode (VAT / sales tax / none), default rate, discount, line items (description, quantity, unit price, rate), notes and terms.

Rules the generator follows:
- Money is calculated in integer cents; each line is rounded half-up.
- Tax is calculated **per line**, then totalled. A 0% line stays 0% even when the default is 20%.
- Discount is applied proportionally to every line before tax; the discount line is the exact difference between gross and net.
- The total is written out in words with the right currency unit (pounds/dollars/euros; pence/cents).
- Quotation mode changes the labels and shows "valid until" (30 days) instead of a due date.
- A4 and US Letter are both supported. Use the page-size selector before printing.

Deliverables: print/PDF, a CSV ledger row (number, dates, client, currency, subtotal, tax, total), and a JSON backup of the brief.

## Tool 2 - K-5 Worksheet (`worksheet/`)

Inputs: title, grade (K–5), operation (add/subtract/multiply/divide/mixed), question count, seed, columns, teacher line, instruction line.

Rules:
- The seed determines every question. The same seed and settings always produce the same worksheet.
- Subtraction never goes below zero; division always divides exactly; multiplication factors scale with the grade.
- Duplicate questions are suppressed.
- Page 1 is the worksheet; page 2 is the answer key.
- "Regenerate" changes the seed. "Download JSON" exports the config and the problems with answers for a gradebook or LMS.

## Tool 3 - Allergen Matrix (`allergen/`)

Inputs: business name, allergen set (UK/EU 14 or US 9), review date, dishes, and a tick for every allergen each dish contains.

Rules:
- A blank cell means "not used in this recipe". Never guess: verify with the kitchen.
- The print sheet includes a vertical-header matrix, a legend, a "contains, by dish" summary and a footer note.
- CSV export is one row per dish, one column per allergen (`1` = contains, `0` = does not).
- This is a documentation tool, not legal advice. Local rules and recipe changes remain the operator's responsibility.

## Tool 4 - KDP Activity Book (`activity/`)

Inputs: title, subtitle, theme (animals/space/ocean/dinosaurs/food), sudoku level, counts for mazes, word searches and sudoku, seed, author.

Output: a multi-page 8.5 × 11 in book:
- cover with a "this book belongs to" box;
- mazes (10 × 12 cells) with START/FINISH;
- themed word searches (12 × 12, 8 words, across/down/diagonal);
- sudoku from a curated bank with verified unique solutions;
- answer keys at the back (maze paths, underlined word-search words, solved sudoku).

Rules:
- The seed determines the mazes, word placement and which sudoku puzzles are used. Same seed, same book.
- Print at 100% on US Letter. The page size is already set to 8.5 × 11 in.
- For KDP paperback interiors keep at least 0.5 in margins, no bleed for this layout, and an even page count.

## Determinism and privacy

- No `fetch`, no XHR, no WebSocket, no third-party script, no font download. The only files loaded are the local CSS/JS in this folder.
- No analytics, no cookies, no account.
- The sudoku bank is embedded in `activity/sudoku.js`; every puzzle was generated and checked for a unique solution before shipping.

## Failure handling

- **Print dialog shows extra blank pages**: set margins to Default, scale to 100%, and turn off "Headers and footers".
- **US Letter prints on A4**: choose the paper size in the print dialog; the document's `@page` rule is a hint, the printer dialog wins.
- **Draft disappeared**: `localStorage` is per browser and per file path. Moving the folder or using a private window starts fresh.
- **Nothing happens on double-click**: open the file with Chrome, Edge, Firefox or Safari. Very old browsers (IE) are not supported.
- **CSV opens with wrong characters**: the file is UTF-8 with a BOM-free header; import as UTF-8.

## Scope

In scope: invoices, quotations, K-5 math practice, allergen documentation, children's puzzle books.
Out of scope: tax filing, payroll, legal advice, medical advice, nutrition analysis, KDP upload automation.
