# RanVault Brand Guidelines

Source: Brand_Overview_Logo_RanVault.pdf — use this as the canonical reference for all visual/brand decisions on the website.

---

## Colors

| Name | Hex | Usage |
|---|---|---|
| Healthcare Blue | `#10638C` | Primary brand color — hero background, primary buttons, headers |
| Velvet Black | `#272727` | Body text, dark sections, secondary backgrounds |
| White Cap | `#fafafa` | Light backgrounds, reversed text on dark sections |
| Teal Accent | `#24BCBC` | Accent color — highlights, secondary CTAs, hover states, icons |

Only these four colors should be used for brand elements (logo, buttons, key UI accents). Do not introduce new brand colors without explicit approval.

---

## Typography

**Logo wordmark font:** DM Sans SemiBold (used specifically for "RANVAULT" wordmark, all caps, letter-spaced)

**Body/UI font:** Not yet specified for general site copy — recommend pairing DM Sans (Regular/Medium for body, SemiBold for headings) for visual consistency with the logo, unless a different system font is preferred for performance. Flag this as an open decision before scaffolding typography in Tailwind config.

---

## Logo

**Construction & meaning:** The mark combines a padlock (security), a shield (protection), a medical cross (healthcare/care), and the letter "R" (brand identity) into a single combined icon.

**Available variations:**
- Vertical (icon stacked above wordmark)
- Horizontal (icon beside wordmark) — recommended for site nav bar
- Icon only (lock+shield+R mark, no wordmark) — usable for favicon, small UI spaces

**Logo files provided:** Asset_16_2x.png, Asset_19_2x.png, Asset_21_2x.png, Asset_22_2x.png (icon and wordmark variants — confirm which corresponds to which variation before implementation)

### Logo Usage Rules (strict — do not violate)
- Do NOT change the logo color outside the approved palette above
- Do NOT apply tint or opacity to the logo
- Do NOT rotate the logo
- Do NOT crop the logo
- Do NOT add shadows or other effects
- Do NOT place the logo over busy backgrounds, photos, or illustrations without sufficient contrast/clear space
- Maintain clear space around the logo equal to roughly the height of the lock icon on all sides — no text, images, or other elements should enter this zone

---

## Brand Voice & Tone

(Derived from RanVault's messaging framework — apply consistently across all site copy)

- **Clear, not technical** — plain English, as if speaking to a colleague, not a security expert
- **Warm and empathetic** — show genuine care about the clinic's mission and patients
- **Confident and calm** — the reassuring voice in a stressful topic; avoid alarmist or fear-based framing
- **Healthcare-fluent** — reference real clinical workflows and compliance terms (HIPAA, 42 CFR Part 2) naturally, not generically
- **Trust-rooted** — avoid words that could undercut trust (e.g. avoid leading with "outsourced" or "nearshore" in external-facing copy; lead with "U.S.-based" instead)

**Tagline:** "Healthcare Secured. Always Assured."

---

## Brand Identity Summary

- **Name:** RanVault
- **Industry:** Cybersecurity for behavioral/mental health clinics (U.S.)
- **Website hero line (reference):** "Cybersecurity for Mental Health Clinics" (positioning reference — see home-page-content.md for locked, final hero copy)
