# Elite Horizon Catering — Maintenance Guide
### For the Business Owner (Non-Technical Edition)

---

## How to Use This Guide

This guide tells you exactly which file to open and what to change, for every common update you will ever need to make to your website. No coding knowledge required. You only need a text editor (even Notepad works).

**Golden rule:** When in doubt, only edit the files listed in Section 3 (the safe list). Everything else can wait for a developer.

---

## Section 1: What to Edit, and Where

### Homepage Headline and Intro Text
**File:** `i18n/locales/en.json`
**Find this section:**
```
"hero": {
  "headline": "...",
  "subheadline": "..."
}
```
Change the text inside the quotes. Do the same in `ar.json`, `ms.json`, `tr.json`, `ur.json` for other languages.

---

### Homepage Images (Hero background, snapshots)
**Folder:** `public/assets/images/`
Replace the image files directly. Keep the exact same filename. The website will automatically show the new image without any code change.

| What you see on homepage | Image filename |
|---|---|
| Hero background (large banner) | `hero/hero-bg-01.jpg` |
| Central Kitchen snapshot | `facility/facility-kitchen-hall-01.jpg` |
| About section photo | `about/about-team-01.jpg` |

---

### Services Content (names, descriptions)
**File:** `i18n/locales/en.json`
**Find this section:**
```
"services": {
  "headline": "...",
  "items": [ ... ]
}
```
Each item inside `items` has a `title` and `desc`. Edit those.

---

### Sectors Content (Hajj, Hotels, Healthcare, etc.)
**File:** `i18n/locales/en.json`
**Find this section:**
```
"sectors": {
  "items": [ ... ]
}
```
Each sector has a `title` and `desc`. Edit those.

---

### Facility Content (zone descriptions, floor descriptions)
**File:** `i18n/locales/en.json`
**Find this section:**
```
"facility": {
  "zones": [ ... ],
  "fullPage": { ... }
}
```
Edit the `title` and `desc` of each zone, and the floor descriptions inside `fullPage.floors.items`.

---

### Gallery Images
**Folder:** `public/assets/images/gallery/`
Files are named `gallery-01.jpg` through `gallery-12.jpg`.
To replace a photo: save your new photo with the same filename (e.g. `gallery-03.jpg`) and drop it into this folder. Done.
To add more photos: name them `gallery-13.jpg`, `gallery-14.jpg`, etc., and ask your developer to add them to the gallery list (a 2-minute task).

---

### Contact Information (phone, email, address)
**File:** `i18n/locales/en.json`
**Find this section:**
```
"contact": {
  "info": {
    "phone": "+966 53 366 6850",
    "email": "el8hzn.cater@gmail.com",
    "whatsapp": "+966 53 366 6850",
    "address": "Makkah, Kingdom of Saudi Arabia"
  }
}
```
Replace the placeholder values with your real details. Do the same in all other language files.

---

### WhatsApp Button (the green chat button)
The WhatsApp number is read from the same `contact.info.whatsapp` field above. Change it there and it updates everywhere automatically — the CTA section, the contact page, and the floating button.

**Format:** Always include the country code with no spaces or dashes, e.g. `+966501234567`

---

### Inquiry Form Fields (the dropdown options)
**File:** `i18n/locales/en.json`
**Find this section:**
```
"contact": {
  "form": {
    "sectors": [ "Hajj & Umrah", "Hotels & Hospitality", ... ],
    "serviceTypes": [ "Mass Catering", "Healthy & Diet Meals", ... ]
  }
}
```
You can add, remove, or rename options in these two lists.

---

### Footer Content (tagline, links, copyright)
**File:** `i18n/locales/en.json`
**Find this section:**
```
"footer": { ... }
```
Edit the tagline, address, and any footer text here.
To change footer links or add new pages to the footer menu, ask your developer (it's a quick task in `components/layout/Footer.tsx`).

---

### SEO Metadata (Google search title and description)
**File:** `i18n/locales/en.json`
**Find this section:**
```
"meta": {
  "home": {
    "title": "...",
    "description": "..."
  },
  "about": { ... },
  "services": { ... },
  ...
}
```
Each page has its own `title` (what shows in browser tab and Google results) and `description` (the text snippet under the link in Google). Edit both for each page.

---

## Section 2: Full Image Placeholder List

These are all the image slots in the website. Every path starts from the `public/` folder.

### Homepage
| Section | Image path | Recommended size |
|---|---|---|
| Hero background | `assets/images/hero/hero-bg-01.jpg` | 1920×1080px |
| About snapshot | `assets/images/about/about-team-01.jpg` | 800×600px |
| Central Kitchen snapshot | `assets/images/facility/facility-kitchen-hall-01.jpg` | 800×1000px |
| Gallery preview (item 1) | `assets/images/gallery/gallery-01.jpg` | 800×800px |
| Gallery preview (item 2) | `assets/images/gallery/gallery-02.jpg` | 800×600px |
| Gallery preview (item 3) | `assets/images/gallery/gallery-03.jpg` | 800×1000px |

### About Page
| Section | Image path | Recommended size |
|---|---|---|
| Team photo | `assets/images/about/about-team-01.jpg` | 1200×800px |
| Company story image | `assets/images/about/about-story-01.jpg` | 800×600px |

### Facility Page
| Section | Image path | Recommended size |
|---|---|---|
| Hero background | `assets/images/facility/facility-kitchen-hall-01.jpg` | 1920×1080px |
| Main hall interior | `assets/images/facility/facility-kitchen-hall-01.jpg` | 1200×675px |

### Gallery Page (12 slots)
| Slot | Image path |
|---|---|
| Photo 1 | `assets/images/gallery/gallery-01.jpg` |
| Photo 2 | `assets/images/gallery/gallery-02.jpg` |
| Photo 3 | `assets/images/gallery/gallery-03.jpg` |
| Photo 4 | `assets/images/gallery/gallery-04.jpg` |
| Photo 5 | `assets/images/gallery/gallery-05.jpg` |
| Photo 6 | `assets/images/gallery/gallery-06.jpg` |
| Photo 7 | `assets/images/gallery/gallery-07.jpg` |
| Photo 8 | `assets/images/gallery/gallery-08.jpg` |
| Photo 9 | `assets/images/gallery/gallery-09.jpg` |
| Photo 10 | `assets/images/gallery/gallery-10.jpg` |
| Photo 11 | `assets/images/gallery/gallery-11.jpg` |
| Photo 12 | `assets/images/gallery/gallery-12.jpg` |

### Sectors Page
| Sector | Image path |
|---|---|
| Hajj & Umrah | `assets/images/sectors/sector-hajj-umrah.jpg` |
| Hotels | `assets/images/sectors/sector-hotels.jpg` |
| Healthcare | `assets/images/sectors/sector-healthcare.jpg` |
| Education | `assets/images/sectors/sector-education.jpg` |
| Industrial | `assets/images/sectors/sector-industrial.jpg` |
| Events | `assets/images/sectors/sector-events.jpg` |
| Charity | `assets/images/sectors/sector-charity.jpg` |
| Camps | `assets/images/sectors/sector-camps.jpg` |

---

## Section 3: Files You Will Edit Regularly (The Safe List)

These are the only files you need to touch for day-to-day updates:

```
i18n/locales/en.json        ← All English text on the entire website
i18n/locales/ar.json        ← All Arabic text
i18n/locales/ms.json        ← All Malay text
i18n/locales/tr.json        ← All Turkish text
i18n/locales/ur.json        ← All Urdu text

public/assets/images/       ← All photos and images (replace files here)
```

That is the complete list. Everything else is for developers.

---

## Section 4: Files You Should Not Touch

Avoid these files unless a developer is guiding you. Editing them incorrectly can break the website:

| File | Why to avoid |
|---|---|
| `app/` (any file inside) | Controls how pages are built. One wrong character breaks a page. |
| `components/` (any file inside) | Controls visual layout. Easy to accidentally break the design. |
| `middleware.ts` | Controls language routing. Breaking this makes all pages return errors. |
| `next.config.mjs` | Core website configuration. Touch only with developer help. |
| `tailwind.config.ts` | Controls colors and fonts site-wide. One typo = wrong colors everywhere. |
| `package.json` | Lists all tools the website depends on. Never edit manually. |
| `tsconfig.json` | Technical settings. No reason to ever touch this. |
| `i18n/config.ts` | Defines which languages exist. Only touch if adding a new language. |
| `i18n/request.ts` | How translations load. Do not touch. |

---

## Section 5: Safe Editing Guide for Translation Files (JSON)

### What you CAN safely edit

Only the text values — the part after the colon, inside quotation marks.

Example — this is safe to change:
```json
"headline": "Elite Catering for Every Scale"
```
You can change `Elite Catering for Every Scale` to anything you want.

---

### What you must NOT change

**The keys** (the words before the colon). These are like file folder names — the website looks for them by exact name.

Example — do NOT change `headline` to `title` or `heading`:
```json
"headline": "Elite Catering for Every Scale"
```

**The structure** (the curly braces `{}`, square brackets `[]`, commas, and colons). These hold everything together. Moving or deleting one breaks the file.

**The file names** — `en.json`, `ar.json`, etc. Do not rename them.

---

### Common mistakes to avoid

**Mistake 1: Deleting a comma**
Every item except the last one must end with a comma. Missing commas crash the translation system.
```json
"phone": "+966 50 123 4567",   ← needs comma (more items follow)
"email": "info@example.com"    ← no comma (this is the last item)
```

**Mistake 2: Using "smart quotes"**
Some word processors (Microsoft Word, Pages) automatically change straight quotes `"` into curly quotes `"`. JSON files only accept straight quotes. Always use a plain text editor like Notepad (Windows) or TextEdit in plain text mode (Mac).

**Mistake 3: Editing only one language file**
If you update the English phone number but forget to update the Arabic file, Arabic visitors will see the old number. Always update all 5 language files for contact details.

**Mistake 4: Accidentally deleting a closing bracket**
Every `{` must have a matching `}`. Every `[` must have a matching `]`. If you accidentally delete one, the whole file stops working.

**How to check your work:** After saving, go to [jsonlint.com](https://jsonlint.com), paste your entire file, and click Validate. It will immediately tell you if something is broken and which line the problem is on.

---

## Section 6: Safe Editing Guide for Replacing Images

### The simple rule
**Same filename = automatic update.** You never need to touch any code.

### Step-by-step: Replacing an existing photo

1. Prepare your new photo on your computer
2. Rename it to exactly match the existing filename (e.g. `gallery-05.jpg`)
3. Open the folder `public/assets/images/` and find the subfolder
4. Drag your new photo in and confirm to replace the old one
5. Refresh the website — done

### Image format and size tips

- Use `.jpg` for photos (smaller file size, faster loading)
- Use `.png` only if the image needs a transparent background
- Keep photos under **500KB** each. Larger files slow down the website noticeably.
- For hero/banner images: at least **1920px wide**
- For general photos: **800–1200px wide** is enough

### What NOT to do with images

- Do not upload a `.jpg` to replace a `.png` or vice versa — the website won't find it
- Do not use spaces in filenames. Use hyphens instead: `kitchen-photo-2024.jpg` not `kitchen photo 2024.jpg`
- Do not upload images directly from a phone without compressing them first. Phone photos are often 4–8MB each and will make your pages load slowly. Use [squoosh.app](https://squoosh.app) (free, browser-based) to compress before uploading.
- Do not delete images without replacing them — the page will show a broken image placeholder

---

## Section 7: Project Structure (Maintenance Perspective Only)

Think of the project as three rooms:

**Room 1 — The Content Room** (`i18n/locales/`)
This is where all the words live. Five files, one per language. This is your room. You have full permission to edit here.

**Room 2 — The Assets Room** (`public/assets/images/`)
This is where all the photos live. You can replace photos freely. Just keep the filenames the same.

**Room 3 — The Engine Room** (everything else)
This is where the website's mechanics live — how pages load, how menus work, how the form submits, how languages switch. You do not need to enter this room. When something in this room needs changing (adding a new page, changing the menu structure, connecting a real email system to the form), you call a developer. It will rarely need attention.

**The three-minute rule:** If an update takes you more than three minutes in the content or assets rooms, stop and check this guide again. If it requires the engine room, call a developer instead of experimenting.

---

## Quick Reference Card

| Task | File to open |
|---|---|
| Change any text | `i18n/locales/en.json` (+ other languages) |
| Replace a photo | `public/assets/images/` — same filename |
| Update phone number | `i18n/locales/[all 5 files]` → `contact.info.phone` |
| Update WhatsApp | `i18n/locales/[all 5 files]` → `contact.info.whatsapp` |
| Update email | `i18n/locales/[all 5 files]` → `contact.info.email` |
| Change page title (SEO) | `i18n/locales/en.json` → `meta.[page].title` |
| Add gallery photo | Replace `gallery-XX.jpg` in `public/assets/images/gallery/` |
| Add a new page | Call a developer |
| Change site colors | Call a developer (`tailwind.config.ts`) |
| Connect form to email | Call a developer |

---

*Last updated by Claude — April 2026*
