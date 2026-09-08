# Adding a letter to News

Every letter is a folder in this directory: `index.md` plus its photos.

```
src/content/news/
  october-2026/
    index.md
    at-the-airport.jpg
    first-day-of-class.jpg
```

The folder name becomes the letter's web address (`/news/october-2026/`), so keep it
short, lowercase, and hyphenated. The site lists letters newest first by their `date`.

## index.md

```md
---
title: "October 2026"
date: 2026-10-14
author: Vicki Quellhorst
cover: ./first-day-of-class.jpg
coverAlt: "The beginner class on their first morning, each at a machine"
summary: "One sentence about what the letter covers; it shows up in link previews and on the home page."
---

Dear Hands of Grace Supporter,

![The beginner class on their first morning, each at a machine](./first-day-of-class.jpg "right")

Write the letter exactly as you would in an email. Blank lines separate paragraphs. Put the
first photo after the greeting, as above, so phones show the greeting before the picture.
```

- `title` is the name the letter goes by (the site has used the month and year).
- `date` is the day it is posted, written year-month-day.
- `cover` is the photo used when someone shares the letter's link. `coverAlt` describes it
  in a sentence for people who cannot see it.
- `author` can be left out; it defaults to Vicki.

## Placing photos

A photo on its own line becomes a print laid on the page. The word in quotes after the
file name says where it goes:

```md
![What the photo shows](./photo.jpg "left")
![What the photo shows](./photo.jpg "right")
![What the photo shows](./photo.jpg "wide")
```

- `left` and `right` tuck the print into that side, and the paragraphs that follow wrap
  around it. Put the line just before the paragraph you want beside the photo.
- `wide` lays the print full width between paragraphs. This is also what you get if you
  leave the word out.
- Add a caption after a `|`: `"left | Celine on her wedding day"`.
- The text in square brackets is the photo's description for screen readers. Say what is
  in the picture.

Give each photo a sensible file name, and keep photos around 2000 pixels on the long side
so the site stays quick to build. Straight from a phone is fine.

## Lists and emphasis

- A line starting with `- ` becomes a bullet; `1. `, `2. ` become a numbered list.
- `*italic*` and `**bold**` work as written.
