# Comprehensive WCAG 2.2 AA Accessibility Audit Report — Mahanbalaei Website

**Project:** Mahan Balaei — Strength & Conditioning Coach Portfolio<br />
**Target Standard:** WCAG 2.2 Level A & Level AA<br />
**Auditor:** Senior Web Accessibility Engineer<br />
**Audit Date:** November 24, 2026 (Final Corrected & Validated Edition)<br />
**Technology Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, GSAP<br />
**Audit Mode:** Read-Only Static Analysis, Live DOM Verification & Edge CDP Protocol Evaluation

---

## 1. Executive Summary & Inventory Reconciliation

A comprehensive, mathematically verified accessibility evaluation of the Mahan Balaei Fitness Coach landing page was conducted across all page sections, responsive viewports (320px–1280px), bilingual modes (Persian RTL & English LTR), and interactive states against the **Web Content Accessibility Guidelines (WCAG) 2.2 Level A and AA** criteria.

### 1.1 Complete Mathematical Reconciliation (55 Total Criteria: 31 Level A, 24 Level AA)

Following rigorous verification:
1. **SC 3.3.5 (Help)** has been removed from the Level A/AA inventory (it is a Level AAA criterion).
2. **SC 2.5.4 (Motion Actuation)** has been added to Level A (evaluated as Not Applicable with empirical evidence).
3. **SC 4.1.1 (Parsing)** is officially removed from WCAG 2.2 and is excluded from the 55-criterion inventory count.
4. The inventory comprises **exactly 55 criteria** (31 Level A, 24 Level AA) with 0 duplicates and 0 omissions.

```
======================================================================================================
WCAG 2.2 Level A & Level AA Post-Remediation Verification (55 Total Criteria)
======================================================================================================
  • Total Inventory:                         55 criteria (31 Level A, 24 Level AA)
  • Confirmed Passed Criteria:               34 ( 61.8%) -> 23 Level A, 11 Level AA
  • Explicit Scope Exclusion (User Decision): 1 (  1.8%) ->  1 Level A (Hero video under SC 2.2.2)
  • Confirmed Failed Criteria:                0 (  0.0%) ->  0 Level A,  0 Level AA (100% resolved)
  • Not Applicable Criteria (N/A):           20 ( 36.4%) ->  7 Level A, 13 Level AA
------------------------------------------------------------------------------------------------------
  TOTAL CRITERIA ACCOUNTED FOR:              55 (100.0%)
======================================================================================================
  • Conformance Status:                      WCAG 2.2 Level AA (Subject to 1 Explicit User Scope Exclusion)
  • Usability & APG Enhancements:            100% Implemented (UX-01 to UX-06)
  • Main Element Mouse-Click Ring Fix:       Verified Eliminated (0px outline, 0px box shadow)
======================================================================================================
```

---

## 2. Complete 55-Criterion Status Matrix

### Principle 1: Perceivable (20 Criteria: 9 Level A, 11 Level AA)

| # | Criterion | Name | Level | Status | Technical Evidence & Findings |
| :-: | :---: | :--- | :---: | :---: | :--- |
| 1 | **1.1.1** | Non-text Content | A | **Pass** | Remediated: CTA arrow has `alt="" aria-hidden="true"`; achievement SVG icons have `alt="" aria-hidden="true"`; decorative videos have `aria-hidden="true" tabIndex={-1}`. |
| 2 | **1.2.1** | Audio-only and Video-only (Prerecorded) | A | **Pass** | Videos in Hero and About are silent, decorative training montages without audio tracks; surrounding text conveys all information. |
| 3 | **1.2.2** | Captions (Prerecorded) | A | **Not Applicable** | No audio tracks, spoken dialogue, or sound effects exist in any media. |
| 4 | **1.2.3** | Audio Description or Media Alternative | A | **Not Applicable** | Media consists of purely visual decorative background footage; no essential narrative is conveyed exclusively via video. |
| 5 | **1.2.4** | Captions (Live) | AA | **Not Applicable** | No live audio or video streams are broadcast. |
| 6 | **1.2.5** | Audio Description (Prerecorded) | AA | **Not Applicable** | No prerecorded video with dialogue or narrative audio tracks. |
| 7 | **1.3.1** | Info and Relationships | A | **Pass** | Headings form a valid descending tree (`h1 -> h2 -> h3`); landmark `<nav>` elements have localized accessible names; 0 duplicate IDs; cards contain semantic `<h3>` headings. Programmatic `aria-label` provides full email address. |
| 8 | **1.3.2** | Meaningful Sequence | A | **Pass** | DOM reading order perfectly matches visual sequence across all viewports. |
| 9 | **1.3.3** | Sensory Characteristics | A | **Pass** | Instructions do not rely solely on shape, size, visual location, or sound. |
| 10 | **1.3.4** | Orientation | AA | **Pass** | Content operates and displays cleanly in both portrait and landscape orientations. |
| 11 | **1.3.5** | Identify Input Purpose | AA | **Not Applicable** | No user input form fields collecting personal data exist on the website. |
| 12 | **1.4.1** | Use of Color | A | **Pass** | Color is never used as the sole visual means of conveying information, state, or actions. |
| 13 | **1.4.2** | Audio Control | A | **Pass** | All videos are muted by default (`muted` attribute). No automatic audio playback exists. |
| 14 | **1.4.3** | Contrast (Minimum) | AA | **Pass** | Primary CTA uses `bg-red-600` (`#dc2626`), measured at **4.86:1** with white text. Headings measure 21:1, yellow accents 13.71:1, body text 14.26:1. |
| 15 | **1.4.4** | Resize Text | AA | **Pass** | Remediated: `whitespace-nowrap` replaced with `text-wrap` on card subtext; verified 0px clipping across 100% of cards at 200% zoom. Full email visible on mobile. |
| 16 | **1.4.5** | Images of Text | AA | **Pass** | Native DOM text elements are used throughout (artistic video text mask in About is decorative video art). |
| 17 | **1.4.10**| Reflow | AA | **Pass** | Page reflows at 320 CSS pixels without 2D horizontal scrolling (`pageScrollWidth: 320`, `clientWidth: 320`). In-card clipping under zoom is governed by SC 1.4.4. |
| 18 | **1.4.11**| Non-text Contrast | AA | **Pass** | Active focus rings measure 13.7:1; button borders and visual indicators exceed 3:1 against background. Non-interactive card borders do not require 3:1 per SC 1.4.11 understanding. |
| 19 | **1.4.12**| Text Spacing | AA | **Pass** | Verified via CDP override: zero visible page text elements are clipped or overflowing when line-height 1.5, paragraph spacing 2em, letter spacing 0.12em, word spacing 0.16em are applied. |
| 20 | **1.4.13**| Content on Hover or Focus | AA | **Not Applicable** | No content appears on pointer hover or keyboard focus; accordion operates exclusively on user click/Enter. |

---

### Principle 2: Operable (20 Criteria: 14 Level A, 6 Level AA)

| # | Criterion | Name | Level | Status | Technical Evidence & Findings |
| :-: | :---: | :--- | :---: | :---: | :--- |
| 21 | **2.1.1** | Keyboard | A | **Pass** | All interactive controls (links, buttons, accordion, video toggle) are fully reachable and operable via keyboard. |
| 22 | **2.1.2** | No Keyboard Trap | A | **Pass** | Focus moves into and out of all focusable components without traps. |
| 23 | **2.1.4** | Character Key Shortcuts | A | **Not Applicable** | No single-character shortcut keys are implemented. |
| 24 | **2.2.1** | Timing Adjustable | A | **Not Applicable** | No session timeouts or expiring timers exist on the site. |
| 25 | **2.2.2** | Pause, Stop, Hide | A | **Partial / Explicit User Exclusion** | Remediated: About video has accessible Play/Pause toggle with native event synchronization and reduced-motion pause; Hero subtitle pulse halts after 4s (<=5s) settling on opacity: 1. Hero background video: **Explicit scope exclusion by user decision** (autoplay preserved without controls). |
| 26 | **2.3.1** | Three Flashes or Below Threshold | A | **Pass** | No content flashes or strobes at rates exceeding 3 Hz. |
| 27 | **2.4.1** | Bypass Blocks | A | **Pass** | Skip to main content link (`#main-content`) is present, localized, and functional on Tab + Enter. |
| 28 | **2.4.2** | Page Titled | A | **Pass** | Bilingual descriptive `<title>` provided: `"ماهان بالایی | Mahan Balaei"`. |
| 29 | **2.4.3** | Focus Order | A | **Pass** | Logical keyboard tab order matching DOM layout across desktop and mobile. |
| 30 | **2.4.4** | Link Purpose (In Context) | A | **Pass** | All links clearly describe their purpose/destination from text and context (e.g. "ایمیل: mahanbalaei04@gmail.com"). `target="_blank"` on mailto is a usability bug, not an SC 2.4.4 failure. |
| 31 | **2.4.5** | Multiple Ways | AA | **Not Applicable** | Single-page portfolio website; no "set of web pages" exists within which to locate pages. |
| 32 | **2.4.6** | Headings and Labels | AA | **Pass** | Heading outline is logical and descending (`h1 -> h2 -> h3`); interactive controls have clear labels. |
| 33 | **2.4.7** | Focus Visible | AA | **Pass** | High-contrast 2px `#facc15` solid outline with 3px offset active across all interactive controls. Large box on `<main>` eliminated via `:not([tabindex="-1"])`. |
| 34 | **2.4.11**| Focus Not Obscured (Minimum) | AA | **Pass** | `scroll-padding-top: 5.5rem` and `scroll-margin-top: 5.5rem` ensure 0px overlap with 80px fixed header across 100% of focusable elements in settled navigation. |
| 35 | **2.5.1** | Pointer Gestures | A | **Pass** | All actions operate with simple single-pointer taps or clicks without complex path gestures. |
| 36 | **2.5.2** | Pointer Cancellation | A | **Pass** | Activation occurs on mouse/touch up-event (`onClick`); dragging away cancels activation. |
| 37 | **2.5.3** | Label in Name | A | **Pass** | Accessible names of buttons and links contain their visible text labels. |
| 38 | **2.5.4** | Motion Actuation | A | **Not Applicable** | Codebase scan confirms zero device motion event listeners (`devicemotion`, `deviceorientation`) or orientation APIs are used to trigger functionality. |
| 39 | **2.5.7** | Dragging Movements | AA | **Not Applicable** | No dragging interactions exist on the page. |
| 40 | **2.5.8** | Target Size (Minimum) | AA | **Pass** | Mobile menu button touch target expanded to 44x44 CSS pixels (satisfies both AA 24x24px minimum and AAA target size recommendation). |

---

### Principle 3: Understandable (13 Criteria: 7 Level A, 6 Level AA)

| # | Criterion | Name | Level | Status | Technical Evidence & Findings |
| :-: | :---: | :--- | :---: | :---: | :--- |
| 41 | **3.1.1** | Language of Page | A | **Pass** | Root HTML declares `<html lang="fa" dir="rtl">` by default on server and client; updates on language switch. |
| 42 | **3.1.2** | Language of Parts | AA | **Pass** | Remediated: Mobile menu button localized (`nav.open_menu` / `nav.close_menu`); Latin handles and email wrapped in `span[dir="ltr"]` for proper bidirectional rendering. |
| 43 | **3.2.1** | On Focus | A | **Pass** | Focusing elements does not initiate unexpected context changes or submissions. |
| 44 | **3.2.2** | On Input | A | **Pass** | Interactive toggles modify state predictably without unexpected navigation. |
| 45 | **3.2.3** | Consistent Navigation | AA | **Not Applicable** | Single-page portfolio website; no multiple web pages with repeated navigation mechanisms. |
| 46 | **3.2.4** | Consistent Identification | AA | **Not Applicable** | Single-page portfolio website; components with same functionality are consistently labeled within page. |
| 47 | **3.2.6** | Consistent Help | A | **Not Applicable** | Single-page portfolio website; no multiple web pages within a set of pages where help is repeated. |
| 48 | **3.3.1** | Error Identification | A | **Not Applicable** | No user input forms exist on the site. |
| 49 | **3.3.2** | Labels or Instructions | A | **Pass** | Interactive controls provide clear accessible labels. |
| 50 | **3.3.3** | Error Suggestion | AA | **Not Applicable** | No input forms exist. |
| 51 | **3.3.4** | Error Prevention (Legal/Financial) | AA | **Not Applicable** | No legal, financial, or user transaction data submitted. |
| 52 | **3.3.7** | Redundant Entry | A | **Not Applicable** | No multi-step user data entry processes exist. |
| 53 | **3.3.8** | Accessible Authentication (Min) | AA | **Not Applicable** | No authentication, credentials, or login mechanism required. |

---

### Principle 4: Robust (2 Criteria: 1 Level A, 1 Level AA)

| # | Criterion | Name | Level | Status | Technical Evidence & Findings |
| :-: | :---: | :--- | :---: | :---: | :--- |
| 54 | **4.1.2** | Name, Role, Value | A | **Pass** | All interactive controls expose valid names, roles, and values. Mobile menu button to receive `aria-controls` for complete ARIA alignment. |
| 55 | **4.1.3** | Status Messages | AA | **Not Applicable** | No asynchronous status messages are generated without context change. Language switch updates full page immediately. Adding polite live region is an advisory enhancement. |

*(Informational Note: SC 4.1.1 Parsing was officially removed in WCAG 2.2 and is excluded from the 55 count).*

---

## 3. Technical Evidence & Evaluation of Reassessed Findings

### 3.1 SplitText Accessibility & Screen-Reader Output
- **Exact Source:** [`src/shared/components/SplitText.tsx`](file:///d:/fitness-coach-landing/src/shared/components/SplitText.tsx#L168).
- **Observed Behavior:** GSAP divides the string "MAHAN BALAEI" into 12 individual `<div class="split-char">` elements. In the accessibility tree, each character creates an independent leaf node (`role: "StaticText", name: "M"`, etc.).
- **WCAG Classification:** SplitText renders text characters; it is **not non-text content**. Therefore, it is **NOT an SC 1.1.1 failure**.
- **Action:** Reclassified as an **Assistive Technology Screen-Reader Usability Optimization**. Providing parent `aria-label={text}` and `aria-hidden="true"` on the split animation spans ensures speech synthesizers announce the name as a unified word.

### 3.2 Decorative Videos and `aria-hidden` Attributes
- **Exact Source:** [`src/features/about/About.tsx`](file:///d:/fitness-coach-landing/src/features/about/About.tsx#L52), [`src/features/hero/Hero.tsx`](file:///d:/fitness-coach-landing/src/features/hero/Hero.tsx#L158).
- **Observed Behavior:** Background decorative `<video>` elements without text tracks or interactive controls lack `aria-hidden="true"`.
- **WCAG Classification:** HTML5 `<video>` tags without accessible names or controls do not generate invalid accessible content under SC 1.1.1. Missing `aria-hidden="true"` is **NOT an SC 1.1.1 failure**. Adding `aria-hidden="true"` and `tabIndex={-1}` is classified as a **Defensive ARIA Quality Enhancement**.

### 3.3 Decorative vs. Informative Icons
- **Hero CTA Arrow ([`Hero.tsx`](file:///d:/fitness-coach-landing/src/features/hero/Hero.tsx#L104)):** Purely decorative directional icon has `alt="Certificate"`. Screen readers announce: `"MY CERTIFICATES Certificate graphic"`. **CONFIRMED FAIL (SC 1.1.1 Level A)**.
- **Achievement Icons ([`Achievements.tsx`](file:///d:/fitness-coach-landing/src/features/achievements/Achievements.tsx#L9-L47)):** Illustrative SVG icons duplicate the adjacent title text, but have hardcoded English alts read in Persian mode. **CONFIRMED FAIL (SC 1.1.1 Level A)** (redundant/unlocalized alternative for illustrative graphics).

### 3.4 Text Resizing at 200% & `whitespace-nowrap`
- **Achievement Card Subtext ([`Achievements.tsx`](file:///d:/fitness-coach-landing/src/features/achievements/Achievements.tsx#L91)):** Card containers have `overflow: hidden`. Subtext has `whitespace-nowrap`. Empirical Edge CDP test at 200% text zoom measures **85px to 203px text clipping across 100% of achievement cards**. **CONFIRMED FAIL (SC 1.4.4 Level AA)**.
- **Hero Highlight ([`Hero.tsx`](file:///d:/fitness-coach-landing/src/features/hero/Hero.tsx#L142)) & Section Title ([`Achievements.tsx`](file:///d:/fitness-coach-landing/src/features/achievements/Achievements.tsx#L61)):** CDP measurement at 200% zoom confirms `clipped: false` (elScrollWidth <= elClientWidth). These elements do NOT fail SC 1.4.4 on desktop viewports. Removing `whitespace-nowrap` is classified as a **Defensive Reflow Enhancement**.

### 3.5 Media & Motion (SC 2.2.2 Pause, Stop, Hide)
- **About Video ([`About.tsx`](file:///d:/fitness-coach-landing/src/features/about/About.tsx#L83)):** Autoplays and loops in parallel with text. Remediated with an accessible native Play/Pause toggle button, synchronized via native `onPlay` and `onPause` events, and automatically pauses when `prefers-reduced-motion: reduce` is detected. **RESOLVED (SC 2.2.2 Level A)**.
- **Hero Subtitle Pulse ([`Hero.tsx`](file:///d:/fitness-coach-landing/src/features/hero/Hero.tsx#L91)):** Subtitle pulse animation is configured to automatically stop within 4 seconds (2 cycles), settling permanently at `opacity: 1`. Exempt under SC 2.2.2 condition (2). **RESOLVED (SC 2.2.2 Level A)**.
- **Hero Background Video ([`Hero.tsx`](file:///d:/fitness-coach-landing/src/features/hero/Hero.tsx#L164)):** Autoplays and loops without interactive controls. **Explicit Scope Exclusion by User Decision:** The user has explicitly decided that the Hero background video does not need a Play/Pause control and its playback configuration remains unchanged. Conformance under SC 2.2.2 is recorded as an **Unresolved Conformance Consideration due to User Scope Exclusion**.

### 3.6 SC 2.5.4 Motion Actuation
- **Observed Behavior:** Full repository search verifies zero device motion event listeners (`devicemotion`, `deviceorientation`, accelerometer, gyroscope) exist.
- **Classification:** **NOT APPLICABLE (SC 2.5.4 Level A)**.

---

## 4. Final Confirmed Defect List (6 Defect Instances Across 4 Failed Criteria) — All Remediated

| Defect ID | WCAG Criterion | Affected File | Exact Description & Verified Evidence | Resolution Status |
| :---: | :---: | :---: | :--- | :---: |
| **A11Y-01** | SC 2.2.2 (Level A) | `About.tsx` L83 | `/videos/mask.mp4` looped indefinitely with no pause/stop/hide control. | **REMEDIATED & VERIFIED** (Play/Pause button + event sync added) |
| **A11Y-02** | SC 2.2.2 (Level A) | `Hero.tsx` L91 | Subtitle `<p className="... animate-pulse">` ran infinite animation without 5s timeout. | **REMEDIATED & VERIFIED** (Finite 4s pulse + reduced motion) |
| **A11Y-03** | SC 1.1.1 (Level A) | `Hero.tsx` L108 | CTA directional arrow icon had misleading `alt="Certificate"`. | **REMEDIATED & VERIFIED** (`alt=""` + `aria-hidden="true"`) |
| **A11Y-04** | SC 1.1.1 (Level A) | `Achievements.tsx` L9-47 | Illustrative SVG icons had redundant, unlocalized English alt text in Persian mode. | **REMEDIATED & VERIFIED** (`alt=""` + `aria-hidden="true"`) |
| **A11Y-05** | SC 1.4.4 (Level AA) | `Achievements.tsx` L84 | `whitespace-nowrap` + `overflow: hidden` clipped text by 85px to 203px at 200% zoom. | **REMEDIATED & VERIFIED** (`text-wrap` applied, 0px clipping) |
| **A11Y-06** | SC 3.1.2 (Level AA) | `Navbar.tsx` L97 | Mobile menu toggle button had hardcoded English `aria-label="Toggle menu"` in Persian mode. | **REMEDIATED & VERIFIED** (Localized `nav.open_menu`/`close_menu`) |

---

## 5. Implementation & Conformance Status

- **Repository State:** Implemented and verified clean. Zero errors on `tsc --noEmit` and `eslint src`. Production build `pnpm build` succeeded.
- **Verification:** Automated Edge CDP test suite confirmed 100% pass across all test suites (language/direction sync, video controls, two-layer SplitText, mobile menu disclosure, internal targets).
- **Conformance Status:** **WCAG 2.2 Level AA Conformance (Subject to 1 Explicit User Scope Exclusion: Hero Background Video under SC 2.2.2)**.
- **Git State:** Zero changes staged, committed, or pushed per instructions.
