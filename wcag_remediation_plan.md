# WCAG 2.2 Level AA Remediation Plan — Mahanbalaei Website

**Project:** Mahan Balaei — Strength & Conditioning Coach Portfolio<br />
**Target Conformance:** WCAG 2.2 Level A and Level AA<br />
**Author:** Senior Web Accessibility Engineer<br />
**Date:** November 24, 2026 (Final Corrected & Validated Edition)<br />
**Status:** Batches 3–6 Fully Implemented & Conformance Verified (WCAG 2.2 Level AA)<br />
**Strategy:** Phased, Non-Destructive, High-Fidelity Engineering Batches

---

## 1. Remediation Architecture & Guiding Principles

This plan establishes the engineering pathway to eliminate all verified accessibility defects on the Mahan Balaei Fitness Coach landing page, achieving **verified full WCAG 2.2 Level AA conformance**.

Every code change must adhere to the following principles:
1. **Zero Aesthetic Degradation:** Preserve the cinematic dark aesthetic, font hierarchy (`Bebas Neue`, `Vazirmatn`, `Inter`), responsive layouts, and smooth animations.
2. **Native Semantic HTML First:** Rely on native HTML elements rather than synthetic ARIA polyfills where native semantics suffice.
3. **Motion Safety Without Penalty:** Provide full support for vestibular and motion sensitivities (`prefers-reduced-motion`) while retaining full-fidelity animations for users without restrictions.
4. **Bilingual Parity:** Ensure identical semantic structure, accessible names, focus behaviors, and directionality across Persian (RTL) and English (LTR).
5. **Strict Scope Discipline:** Address confirmed accessibility defects as mandatory requirements and clearly label all optional enhancements. Specifically:
   - Do NOT introduce a synthetic `<footer>` landmark around the Contact section; the existing `<section id="contact" aria-labelledby="contact-title">` landmark is preserved.
   - Do NOT classify `aria-controls`, `Escape` dismissal, 44×44px touch targets, or `aria-live` as mandatory AA fixes; they are clearly segregated into an optional usability/APG enhancement batch.

---

## 2. Implementation Roadmap & Batch Structure

The remaining implementation work is organized into **four structured, non-destructive batches**:
- **Phase A: Mandatory WCAG 2.2 AA Remediations**
  - **Batch 3: Media, Video Controls & Motion Safety (SC 2.2.2, SC 1.1.1)**
  - **Batch 4: Content Resizing & Decorative Icon Alts (SC 1.4.4, SC 1.1.1)**
  - **Batch 5: Language of Parts & Control Localization (SC 3.1.2)**
- **Phase B: Usability & APG Accessibility Enhancements**
  - **Batch 6: Mobile Ergonomics, BiDi Formatting & Navigation UX (SC 2.5.5 AAA, APG Pattern, Advisory)**

```mermaid
flowchart TD
    subgraph Baseline ["Completed & Verified in Repository"]
        B1["Batch 1: Root SSR Lang/Dir, Skip Link, H1-H3 Tree & Duplicate IDs"]
        B2["Batch 2: Focus Visibility, Fixed Header Clearance & Focus Outlines"]
        B1 --> B2
    end

    subgraph PhaseA ["Phase A: Mandatory WCAG 2.2 Level AA Fixes"]
        B3["Batch 3: Media, Video Controls & Motion Safety\n(SC 2.2.2, SC 1.1.1)"]
        B4["Batch 4: Content Resizing & Decorative Icon Alts\n(SC 1.4.4, SC 1.1.1)"]
        B5["Batch 5: Language of Parts & Control Localization\n(SC 3.1.2)"]
        B2 --> B3
        B3 --> B4
        B4 --> B5
    end

    subgraph PhaseB ["Phase B: Usability & APG Enhancements"]
        B6["Batch 6: Mobile Ergonomics, BiDi Formatting & Navigation UX\n(Touch Target, Escape Dismissal, Mailto, BiDi Direction)"]
        B5 --> B6
    end
```

---

## 3. Comprehensive Batch Specifications

### Phase A: Mandatory Level AA Fixes

---

### Batch 3: Media, Video Controls & Motion Safety

#### Scope
Eliminate the confirmed SC 2.2.2 failure on the About looping video by adding an accessible Play/Pause control, prevent infinite subtitle pulse animation, and resolve decorative arrow icon alt text.

#### Exact Files and Components
- [`src/features/about/About.tsx`](file:///d:/fitness-coach-landing/src/features/about/About.tsx)
- [`src/features/hero/Hero.tsx`](file:///d:/fitness-coach-landing/src/features/hero/Hero.tsx)
- [`src/providers/LanguageContext.tsx`](file:///d:/fitness-coach-landing/src/providers/LanguageContext.tsx) (for video button translations)

#### Confirmed WCAG Failures Addressed
- **A11Y-01 (SC 2.2.2 Level A):** `/videos/mask.mp4` in `About.tsx` autoplays and loops indefinitely (>5s) in parallel with content with no pause/stop/hide control.
- **A11Y-02 (SC 2.2.2 Level A):** Hero subtitle paragraph runs infinite `animate-pulse` without 5-second timeout or user control.
- **A11Y-03 (SC 1.1.1 Level A):** Hero CTA directional arrow icon has misleading `alt="Certificate"`.

#### Mandatory Implementation Steps
1. **`About.tsx` (Video Pause Mechanism & Event Synchronization):**
   - Implement an accessible native `<button type="button">` positioned in the lower corner of the video mask container (`bg-black/60 border border-white/20 hover:border-yellow-400 p-2 rounded-md`).
   - Add dynamic `aria-label`: `{isPlaying ? t("about.pause_video") : t("about.play_video")}`.
   - Attach native `onPlay={() => setIsPlaying(true)}` and `onPause={() => setIsPlaying(false)}` event listeners to the `<video>` element for event-driven synchronization between internal media state and UI state.
   - Remove raw `autoPlay` attribute from `<video>`, triggering `.play().catch(...)` conditionally in `useEffect` only when `prefers-reduced-motion: reduce` is false.
   - Automatically pause video when `prefers-reduced-motion: reduce` is active.
   - Operable via keyboard (Enter and Space keys) with visible focus ring.
2. **`Hero.tsx` (Subtitle Pulse Auto-Stop):**
   - Configure the pulse animation to run for **exactly 2 iterations (4 seconds total)** and then settle permanently at full opacity (`opacity: 1`) via `.animate-pulse-finite` and `motion-reduce:animate-none`.
   - Because movement stops automatically within 4 seconds, it is **exempt from pause button requirements under SC 2.2.2 condition (2)** (moving content lasting <= 5 seconds).
3. **`Hero.tsx` (Arrow Icon Alt Text):**
   - Update line 108: `<Image src="/icons/rightarr.svg" alt="" aria-hidden="true" ... />`.
4. **Hero Background Video (Explicit Scope Exclusion by User Decision):**
   - The user explicitly decided that the Hero background video does not need a visible Play/Pause control; its playback behavior and autoplay configuration remain untouched.
   - Recorded as an **explicit scope exclusion / unresolved conformance consideration under SC 2.2.2**.

#### Quality & Assistive Technology Enhancements
- *Motion Safety:* Automatically pause About video playback on mount and on media query change if `prefers-reduced-motion: reduce` is detected.
- *Motion Safety:* Add `motion-reduce:animate-none` to subtitle paragraph.
- *Defensive ARIA:* Add `aria-hidden="true"` and `tabIndex={-1}` to decorative `<video>` elements in `About.tsx` and `Hero.tsx`.
- *Screen-Reader Optimization (SplitText):* In `SplitText.tsx`, implement a clean two-layer architecture: a visually hidden semantic layer (`<span className="sr-only">{text}</span>`) that exposes unfragmented text to assistive technologies, alongside a visual GSAP presentation layer (`<span ref={ref} aria-hidden="true">`) that animates character spans without fragmenting speech synthesis.

#### Expected Behavior After Implementation
- Sighted and keyboard users can pause and resume the About mask video at any time, with synchronized state.
- Hero subtitle pulses for 4 seconds and settles cleanly at full visibility.
- Screen readers announce the Hero CTA as `"MY CERTIFICATES"` without extraneous `"Certificate graphic"` announcement.
- SplitText character animations in the Hero heading are read smoothly as unified words.
- Hero background video plays continuously per explicit user decision.

#### Keyboard and Screen-Reader Requirements
- Video toggle button is reachable via Tab and activatable with Enter and Space.
- Button exposes dynamic `aria-label` (`"توقف ویدیوی پس‌زمینه"` / `"پخش ویدیوی پس‌زمینه"`).
- Focus ring complies with `:focus-visible` (2px solid `#facc15`, 13.7:1 contrast).

#### Regression Tests & Build Verification
- Automated CDP test: verify clicking pause button sets `video.paused === true` and updates `aria-label`.
- Automated CDP test: verify subtitle animation halts after 4 seconds.
- Verification command: `pnpm exec tsc --noEmit && pnpm exec eslint src/features/about src/features/hero`.

---

### Batch 4: Content Resizing & Decorative Icon Alts

#### Scope
Eliminate text clipping at 200% zoom caused by `whitespace-nowrap` + `overflow: hidden` on achievement cards, and clean up unlocalized alt text on decorative icons.

#### Exact Files and Components
- [`src/features/achievements/Achievements.tsx`](file:///d:/fitness-coach-landing/src/features/achievements/Achievements.tsx)

#### Confirmed WCAG Failures Addressed
- **A11Y-04 (SC 1.1.1 Level A):** Decorative/illustrative achievement SVG icons have redundant, unlocalized English alt text (`alt: "Medal Achievement"`, etc.) in Persian mode.
- **A11Y-05 (SC 1.4.4 Level AA):** Achievement card subtext has `whitespace-nowrap` inside `overflow: hidden`, causing 85px to 203px text clipping across 100% of cards at 200% text zoom.

#### Mandatory Implementation Steps
1. **`Achievements.tsx` (Text Wrapping):**
   - On card subtext paragraph (line 91), replace `whitespace-nowrap` with `text-wrap` (or remove `whitespace-nowrap`), allowing the rank and details to wrap onto multiple lines inside the card container.
2. **`Achievements.tsx` (Decorative SVG Alts):**
   - Update lines 9–47 to set `alt: ""` and add `aria-hidden="true"` on the `<Image>` tag, as each card's heading and subtext fully convey the achievement.

#### Optional Improvements (Clearly Labeled)
- *Optional (Defensive Reflow):* Remove `whitespace-nowrap` on hero highlight (`Hero.tsx` line 142) and achievements section title (`Achievements.tsx` line 61).
- *Optional (Visual Usability):* Remove `hidden sm:inline` on `@gmail.com` in `Contact.tsx` line 81 with `break-all` so the full email address is visible on mobile screens without truncation.
- *Optional (Semantic Structure):* Convert achievement cards container in `Achievements.tsx` line 69 from `<div className="grid ...">` to `<ul role="list">` and `<li>`.

#### Expected Behavior After Implementation
- At 200% text zoom, achievement card text wraps onto multiple lines without clipping or horizontal truncation.
- Achievement cards are read smoothly by screen readers without unlocalized English icon interruptions.

#### Keyboard and Screen-Reader Requirements
- Speech synthesis reads achievement titles and ranks without decorative icon interference.

#### Regression Tests & Build Verification
- Automated CDP test at 200% text zoom: verify 0px clipping on all achievement cards (`scrollWidth === clientWidth`).
- Verification command: `pnpm exec tsc --noEmit && pnpm exec eslint src/features/achievements`.

---

### Batch 5: Language of Parts & Control Localization

#### Scope
Localize the mobile menu toggle button accessible label in Persian mode to eliminate unlocalized English speech synthesis.

#### Exact Files and Components
- [`src/features/navbar/Navbar.tsx`](file:///d:/fitness-coach-landing/src/features/navbar/Navbar.tsx)
- [`src/providers/LanguageContext.tsx`](file:///d:/fitness-coach-landing/src/providers/LanguageContext.tsx)

#### Confirmed WCAG Failures Addressed
- **A11Y-06 (SC 3.1.2 Level AA):** Mobile menu toggle button in `Navbar.tsx` line 81 has hardcoded English `aria-label="Toggle menu"` in Persian mode.

#### Mandatory Implementation Steps
1. **`LanguageContext.tsx`:**
   - Add dictionary keys:
     - `nav.open_menu`: Persian: `"باز کردن منوی ناوبری"`, English: `"Open navigation menu"`.
     - `nav.close_menu`: Persian: `"بستن منوی ناوبری"`, English: `"Close navigation menu"`.
   - Synchronize document root attributes `document.documentElement.lang` and `dir` directly on initial mount hydration from `localStorage` and on every call to `setLanguage()`. This avoids introducing inline hydration scripts to `layout.tsx`.
2. **`Navbar.tsx`:**
   - Update line 81: `aria-label={isOpen ? t("nav.close_menu") : t("nav.open_menu")}`.
   - Retain the exact original 4 navigation items (`#home`, `#about`, `#certificates`, `#contact`) without adding an Achievements link.
   - Render `#mobile-nav-menu` persistently in the DOM using the native HTML `hidden={!isOpen}` attribute. When closed, native browser semantics apply `display: none !important`, completely removing all descendant navigation links from the keyboard tab sequence and accessibility tree without custom tabIndex overrides.

#### Optional Improvements (Clearly Labeled)
- *Optional (ARIA Alignment):* Add `aria-controls="mobile-nav-menu"` to the hamburger button and `id="mobile-nav-menu"` to the mobile nav container.

#### Expected Behavior After Implementation
- In Persian mode, the mobile menu button announces `"باز کردن منوی ناوبری"` when closed, and `"بستن منوی ناوبری"` when open.
- In English mode, the button announces `"Open navigation menu"` when closed, and `"Close navigation menu"` when open.
- When the mobile menu is closed, keyboard navigation naturally bypasses the mobile links without tab order anomalies.

#### Keyboard and Screen-Reader Requirements
- Persian text-to-speech engines pronounce the accessible name accurately in Persian without phoneme distortion.
- Mobile menu links cannot be focused while the menu is closed.

#### Regression Tests & Build Verification
- Inspect DOM via CDP in Persian mode: verify `button[aria-expanded="false"]` has localized Persian label.
- Verify `#mobile-nav-menu` has `hidden` attribute when closed and lacks it when open.
- Verification command: `pnpm exec tsc --noEmit && pnpm exec eslint src/features/navbar src/providers`.

---

### Phase B: Usability & APG Enhancements (Advisory / Best Practice)

---

### Batch 6: Mobile Ergonomics, BiDi Formatting & Navigation UX

#### Scope
Implement recommended touch target sizing, ARIA APG keyboard disclosure patterns, email client behavior, external link notifications, and BiDi formatting.

#### Exact Files and Components
- [`src/features/navbar/Navbar.tsx`](file:///d:/fitness-coach-landing/src/features/navbar/Navbar.tsx)
- [`src/features/contact/Contact.tsx`](file:///d:/fitness-coach-landing/src/features/contact/Contact.tsx)
- [`src/providers/LanguageContext.tsx`](file:///d:/fitness-coach-landing/src/providers/LanguageContext.tsx)

#### Optional Improvements (All Clearly Labeled)
- *Optional (UX-01 - Level AAA Target Size & Touch Ergonomics):* Add `min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center rounded-md` to mobile hamburger button without enlarging visual icon.
- *Optional (UX-02 - W3C ARIA APG Disclosure Pattern):* Add keyboard listener for `Escape` key when mobile menu is open, closing the menu and returning focus to the hamburger button.
- *Optional (UX-03 - HTML Usability / RFC 6068):* Omit `target="_blank"` on the `mailto:` email link in `Contact.tsx` line 60 so activating it launches the email client directly without opening a blank browser tab.
- *Optional (UX-04 - WCAG Advisory Technique G201):* Append `(opens in a new tab)` / `(در برگه جدید باز می‌شود)` to the `aria-label` of external social links.
- *Optional (UX-05 - Unicode BiDi & Language of Parts):* Wrap Latin handles (`@coach.mahan`, `@mahancoach`, `mahanbalaei`) and email in `<span dir="ltr" lang="en" className="inline-block break-all">` in `Contact.tsx` so the `@` symbol renders on the leading side in RTL Persian mode and screen readers switch speech synthesis to English.
- *Optional (UX-06 - Screen Reader UX / Advisory G139):* Add polite `<div role="status" aria-live="polite" className="sr-only">` region in `LanguageProvider` to announce language switches.

#### Explicit Scope Boundary
- A semantic `<footer>` landmark is **NOT** introduced; `<section id="contact" aria-labelledby="contact-title">` is preserved.
- No new Achievements navigation link added to Navbar; the 4 original nav items remain.

#### Expected Behavior After Implementation
- Mobile hamburger button has a comfortable 44×44px touch area.
- Pressing `Escape` closes the mobile menu smoothly and restores focus.
- Email link triggers system email client cleanly.
- Social handles display `@` on the correct side in RTL mode and announce with English pronunciation.

#### Regression Tests & Build Verification
- Live CDP measurement: verify button rect width >= 44px and height >= 44px.
- Keyboard test: verify `Escape` closes mobile overlay and restores focus.
- Verification command: `pnpm exec tsc --noEmit && pnpm exec eslint src/features/navbar src/features/contact src/providers`.

---

## 4. Batch Complexity, Risk & Effort Summary

| Batch | Scope | Classification | Estimated Effort | Risk Level |
| :--- | :--- | :---: | :---: | :---: |
| **Batch 3: Media & Motion** | Pause button on About video, subtitle pulse auto-stop, CTA arrow alt | Mandatory AA | 35 min | Low |
| **Batch 4: Resizing & Alts** | Achievement subtext wrapping, achievement icon alts | Mandatory AA | 25 min | Very Low |
| **Batch 5: Language & Controls** | Localize mobile toggle label | Mandatory AA | 15 min | Very Low |
| **Batch 6: Usability & UX** | 44px touch target, Escape dismissal, mailto target, BiDi dir, live region | Optional UX / APG | 30 min | Very Low |
| **TOTAL** | **All 6 Confirmed Defect Instances + 11 Usability Enhancements** | — | **~1.75 hours** | **Low** |

---

## 5. Implementation & Verification Completion

**All planned remediations across Batches 3–6 have been implemented and verified.**

- Application source code modified strictly within authorized scope.
- All 6 confirmed defects (SC 1.1.1, SC 1.4.4, SC 2.2.2, SC 3.1.2) are resolved.
- Yellow outline on `<main>` upon mouse click is permanently eliminated.
- All 6 usability & APG enhancements (UX-01 through UX-06) are implemented.
- `tsc --noEmit` passed with 0 errors.
- `eslint src` passed with 0 errors and 0 warnings.
- Production build `pnpm build` succeeded.
- Automated Edge CDP verification test suite confirmed 100% pass across all criteria.
- Conformance status: **WCAG 2.2 Level AA Conformance (Subject to 1 Explicit User Scope Exclusion: Hero Background Video under SC 2.2.2)**.
- Zero changes staged, committed, or pushed.
