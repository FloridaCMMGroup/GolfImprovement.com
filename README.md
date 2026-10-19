# golfimprovement.com

Instant Golf Improvement landing page for the book, *Instant Golf Improvement: The 6 Pillars to Golf Success*. A static one-page site on Cloudflare Pages. No form and no server code: the buy buttons link to the SureCart product pages on instantgolfimprovement.com, and the free-chapter buttons link to the existing free-chapter form on the IGI book page.

## What's in this folder

| File | What it does |
| --- | --- |
| `index.html` | The page: self-check, book and buy options, gift section, endorsements, free chapter, FAQ, search markup |
| `styles.css` | IGI brand styling (same base as orlandogolfschool.com) |
| `app.js` | The interactive six-pillar self-check, and the seasonal banner |
| `_headers`, `robots.txt`, `sitemap.xml`, `favicon.svg` | Security headers, search files, placeholder icon |
| `images/` | Add `book-cover.png` and `john-headshot.jpg` (see `images/README.txt`) |
| `redirects.csv` | golfimprovementnow.com and golfimprovementnow.net, plus www to the bare domain |

## Deploy

Same as the other landing pages: push to the GitHub repo, create a Cloudflare Pages project (no build command, output `/` or this folder), and add `golfimprovement.com` and `www.golfimprovement.com` as custom domains. No environment variables.

## Seasonal banner (automatic)

| Period | Banner |
| --- | --- |
| Until December 24, 2026 | "The gift for the golfer who has everything: paperback + eBook, $19.99." |
| December 25, 2026, to January 31, 2027 | "Make 2027 the year your scores finally drop." |
| From February 1, 2027 | No banner |

Christmas shipping lines in the gift section also switch on their own:

| Period | Gift section line |
| --- | --- |
| Until December 22, 2026 | "Order the paperback by December 22 for delivery before Christmas." |
| December 23 to 25 | "Too late for shipping? The eBook arrives instantly." |
| From December 26 | "Want it right away? The eBook arrives instantly." (the Christmas shipping FAQ is hidden) |

Edit `SEASONS`, `CUTOFF` and `CHRISTMAS` in `app.js` to change the messages or dates.

## Links

| Button | Goes to |
| --- | --- |
| Get the bundle, Give the book | https://instantgolfimprovement.com/products/the-6-pillars-to-golf-success/ |
| Get the eBook | https://instantgolfimprovement.com/products/the-6-pillars-to-golf-success-ebook/ |
| Free chapter | https://instantgolfimprovement.com/golf-insights/book/the-6-pillars-to-golf-success/ |

## Redirects and analytics

Same process as the other pages: add the domains in `redirects.csv` to Cloudflare, switch nameservers at GoDaddy, add proxied `AAAA @ 100::` records, import the CSV into Bulk Redirects, and turn on Cloudflare Web Analytics.
