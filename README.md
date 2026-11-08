# AIChE JUST Website

Static website (HTML, CSS, JS). No build step needed.

## Files
- index.html - page structure, footer
- css/style.css - design
- js/main.js - all page content, slider, countdown, gallery
- images/ - put your real photos here

## Edit content
Open js/main.js and change names, dates, text. Search for "Name", "Year", "email@example.com".
Countdown date: search for 2026-12-05T10:00:00+06:00.

## Use real photos
1. Copy photos into images/
2. In js/main.js find: var REAL={};
3. Add lines like: var REAL={"Events 1":"images/summit.jpg","Sports 2":"images/sports2.jpg"};
Names match the demo labels (Events 1-6, Workshops 1-6, Industrial Visits 1-6, Competitions 1-6, Sports 1-6, Event 1-3, Past Event 1-6, Workshop/Seminar, National AIChE Summit 2026).

## Deploy on Netlify
1. Go to app.netlify.com, Add new site, Deploy manually.
2. Drag the whole folder (the one containing index.html) into the box.
3. Done. Rename the site in Site settings.

## Deploy on Vercel
1. Put the folder on GitHub, then Add New Project on vercel.com and import it.
2. Framework Preset: Other. Leave build command empty. Deploy.
(Or run: npx vercel in the folder.)
