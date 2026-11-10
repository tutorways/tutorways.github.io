---
name: TutorWays
description: The TW mark as a route. One thick square-ended stroke runs down the page through the brand's three grounds.
colors:
  ink: "#14172B"
  light: "#F4F5F7"
  coral: "#F0553A"
  white: "#FFFFFF"
  ink-soft: "#3A3F5C"
  light-soft: "#C4C8D8"
  rule-light: "#D9DCE5"
  rule-ink: "#2C3150"
typography:
  display:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(2.75rem, 6.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline-story:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
  action:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1
  nav:
    fontFamily: "Outfit, Avenir Next, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 500
    lineHeight: 1
  label:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    lineHeight: 1.2
  mono:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.88em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 4vw, 64px)"
  stem: "clamp(14px, 3.4vw, 56px)"
  stem-left: "clamp(16px, 9vw, 150px)"
  col: "calc(var(--stem-left) + var(--stem) + clamp(20px, 3.6vw, 64px))"
  station: "calc(var(--stem) + clamp(16px, 2vw, 28px))"
  fillet: "calc(var(--stem) * 1.5)"
  section-y: "clamp(96px, 11vw, 176px)"
  step-y: "clamp(28px, 4vw, 48px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.light}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "18px 26px"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.light}"
  button-coral:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "18px 26px"
  button-coral-hover:
    backgroundColor: "{colors.light}"
    textColor: "{colors.ink}"
  link-action:
    typography: "{typography.action}"
    padding: "8px 0 6px"
  header-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.light}"
    rounded: "{rounded.none}"
    height: "max(64px, calc(var(--stem) * 1.6))"
  station:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.none}"
    size: "{spacing.station}"
  panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  panel-terminal:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.light}"
    rounded: "{rounded.none}"
---

# Design System: TutorWays

<!-- PENDING USER CONFIRMATION: the fillet rule. The direction contract originally specified U-bends where grounds change; the builder amended OWN-WORLD and FORM to quarter-circle fillets, and that amendment has not been signed off. This file records the build as shipped (fillets). If the user restores U-bends, update Shapes, the Route component and The Mark's Curves Rule. -->

## Overview

**Creative North Star: "The Route"**

The TutorWays mark is a T whose stem drops and bends into a W. The system treats that stem as a route: one thick stroke, square at its ends, runs down the left of the page from the header to the footer, and every section hangs off it. The header's ink bar is the T's crossbar, centred on the stroke. Each surface the tutor reaches is a stop on the line, and the page opens on a photograph of a laptop on a desk at night whose screen shows a map of that line: all eight surfaces branching off one trunk. The camera pushes into the screen and then flies through each surface. Where the page changes ground, the stroke widens into the next ground through quarter-circle fillets, and at the foot of the page the route closes as the TW mark itself.

The world is built from the brand's three avatar grounds (Light, Ink, Coral) used as full-bleed bands in sequence, Outfit ExtraBold display (the wordmark's own face) over Atkinson Hyperlegible text, and hard rectangular geometry everywhere except the curves that belong to the mark. It is plain and confident: big tight headlines, generous vertical rhythm, thin rules between list rows, no ornament that is not the route. Density is low in the narrative and moderate inside the mock product panels, which carry real tutor replies.

Motion follows the stroke. The surface map zooms from one stop to the next as each shot crosses the middle of the viewport, the route draws on with scroll where the browser supports scroll-driven animation, and every effect has a static fallback.

**Key Characteristics:**
- One stroke, square terminals, weight one sixth of the mark's width, always in the colour that contrasts with its ground.
- Three grounds in sequence: Light, Ink, Coral; never a gradient between them.
- Every content column aligns to a single left edge set by the stroke.
- No rounded corners on any box; the only curves are the mark's semicircles and the fillets.
- Coral is scarce: the Ferret ground, the one final primary action, the active stop, the focus ring.

## Colors

Three brand colours carry the system; four quiet neutrals handle secondary text and rules on each ground.

### Primary
- **Route Ink** (#14172B): the page's anchor. Text on Light and Coral grounds, the Ink ground itself, the header bar, the stroke on Light and Coral, primary buttons, panel borders.

### Secondary
- **Signal Coral** (#F0553A): the Ferret section's ground, the final "Read the docs" button on Ink, the active stop on the map and in the stop index, the setup-guide link underlines in tour cards, and the focus outline. Text on Coral is always Ink.

### Neutral
- **Paper Light** (#F4F5F7): the default page ground, text and stroke on Ink, the inner background of mock posts and code.
- **Card White** (#FFFFFF): only for surfaces that sit on a ground: stops, the map hub, tour cards on Light, mock product panels, surface-logo tiles.
- **Slate** (#3A3F5C): secondary text on Light (ledes, group labels, captions); also the primary button hover.
- **Mist** (#C4C8D8): secondary text on Ink.
- **Rule Light** (#D9DCE5): hairline rules between rows on Light.
- **Rule Ink** (#2C3150): hairline rules on Ink. On Coral, rules are Ink at 25% alpha.

### Named Rules
**The Contrast Stroke Rule.** The stroke always takes the colour that contrasts with its ground: Ink on Light and Coral, Light on Ink. Each ground sets `--route`, `--soft` and `--rule` together; components read those, never a fixed colour.

**The Scarce Coral Rule.** Inside Light and Ink sections Coral marks only the active stop and focus. It becomes a ground once (Ferret) and a button once (the closing primary action). Coral is never used for text on Light or Ink.

## Typography

**Display Font:** Outfit (with Avenir Next, sans-serif), self-hosted at 500, 700, 800
**Body Font:** Atkinson Hyperlegible (with Segoe UI, system-ui), self-hosted at 400, 400 italic, 700
**Label/Mono Font:** ui-monospace stack for code, commands and terminal output

**Character:** Outfit ExtraBold is the wordmark's letterform, so headlines read as the brand speaking; Atkinson Hyperlegible keeps the explanatory text plain and accessible.

### Hierarchy
- **Display** (800, clamp 2.75 to 6rem, 0.98; clamp 2.6 to 4.75rem beside the map on wide screens): the opening headline only, capped at about 11ch.
- **Headline** (800, clamp 2.4 to 4.5rem, 1): section headlines for Benchmark, Ferret and Close, 12 to 14ch.
- **Headline, story** (800, clamp 2.1 to 3.4rem, 1.02): the tour cards that open each half of the map and the closing card.
- **Title** (800, clamp 1.6 to 2.2rem, 1.05): each surface card's name, led by its 40px logo tile.
- **Lede** (400, clamp 1.125 to 1.3rem, 1.55): the paragraph under the opening and Ferret headlines, about 46 to 52ch.
- **Body** (400, 1.125rem, 1.55): running text, 54 to 60ch.
- **Action** (Outfit 700, 1.05 to 1.1rem, 1): buttons, underlined action links, definition terms, panel title bars.
- **Nav** (Outfit 500, 1.05rem, 1): header and footer links.
- **Label** (Atkinson 700, 0.85 to 0.95rem, 1.2, sentence case): the "Students ask" line, in the ground's soft colour.

### Named Rules
**The Wordmark Voice Rule.** Every heading is Outfit 800 with negative tracking (about -0.02em) and balanced wrapping. Outfit at 500 and 700 is reserved for navigation and actions; it never sets paragraphs.

**The Sentence Case Rule.** Labels are short, bold, sentence case and sit inside the content they describe. No uppercase tracking, no labels floating above headlines.

## Layout

The page is a single vertical route. The stroke sits at `stem-left` from the viewport edge with width `stem`; every section's content starts at `col` (stroke, plus a gap of 20 to 64px), so headlines, tour cards and footer text share one left edge. The right edge is the `gutter`.

- **The tour (opening and surfaces):** at 960px wide and 620px tall and above, a full-viewport stage sticks for the whole section. On these screens the tour is an Ink ground with grain. The stage holds the laptop photo (feathered into the Ink at its edges), the stem and the stop index. The headline and lede sit in Light on the left with the laptop to their right; a beat pushes the camera into the screen until it fills the stage, and then one shot per camera position (100svh each) scrolls a card over the stage's left side while the map zooms so its target fills the space right of the card. Below that size the tour stays on Light and the photo is a still picture under the headline, cropped to the laptop, and each surface card carries its own copy of the window, divided by hairline rules. Without JavaScript the map is hidden and the cards read as a list.
- **Benchmark, Ferret:** two columns, text and figure, vertically centred, with large section padding (96 to 176px).
- **Footer:** the stroke stops short of the TW mark by the mark's own T-to-W gap, and the mark sits centred on the stroke's axis.

Breakpoints: 960px wide and 620px tall (the sticky tour stage and zoom), 640px (header bar goes full width, the footer mark shrinks to 64px and moves to the left edge), 420px (the in-page "Surfaces" nav link drops). All spacing is fluid `clamp()`; there is no fixed grid.

### Named Rules
**The One Edge Rule.** All section content aligns to the column set by the stroke. Nothing starts at the gutter except the header's nav and the footer's right-hand links.

## Elevation & Depth

Depth comes from grounds and borders. Flat bands of colour set the stage; the stroke and every structural element are flat. Soft, long, negative-spread drop shadows appear only under mock product panels and the Ferret exchange, so those read as objects lifted off the ground. The active stop index tile uses a solid 5px Coral ring, a state marker, not elevation.

### Shadow Vocabulary
Shadows are layered to behave like one soft light from above: a contact shadow, a near shadow and a long far shadow.
- **Lift** (`--lift`): mock product panels on Light.
- **Lift, dark** (`--lift-dark`): panels on Ink, and the tour cards over the dark stage.
- **Exchange** (`--lift` plus a long 60px fall): the Ferret exchange on Coral.
- **Active ring** (`box-shadow: 0 0 0 5px #F0553A`): the active stop in the index only.
- **Tour card** (Panel on Light or Panel on Ink): the floating cards over the map; inactive cards drop to 40% opacity.

### Grain and settle
- **Grain:** Ink and Coral grounds carry a 7% white fractal-noise tile (`--grain`) so large dark and coral fields read as material, not flat fills. Light grounds have none.
- **Settle:** the benchmark diagram and the Ferret exchange tilt back to flat as they enter (14deg rotateX, 56px rise, 0.96 scale and 0.2 opacity to none), driven by a CSS view timeline. Static where unsupported or with reduced motion.

### Named Rules
**The Flat Route Rule.** The stroke, the grounds, the header bar, buttons and stops are never shadowed. Lift is for the mock product panels and tour cards only.

## Shapes

Every box is square-cornered (0px): bars, buttons, stations, panels, logo tiles, code chips. Borders are heavy where they are structural (2px panel and card frames, 3px action underlines, 4px stop borders, 8px stops and hub on the map) and 1px where they only divide rows.

The only curves come from the mark. The TW mark's semicircles appear in the mark itself (header wordmark, benchmark diagram, footer). Where the stroke crosses from one ground into another, it meets the boundary through quarter-circle fillets of radius 1.5 x stem, so the stroke appears to pour into the next ground (bottom of a section) or the next ground narrows into the stroke (top of a section). The fillet rule is pending user confirmation; see the note at the top of this file.

### Named Rules
**The Mark's Curves Rule.** A curve is allowed only if it is one of the mark's own: its semicircles, or the quarter-circle fillet where the stroke meets a ground (pending confirmation). No border-radius on boxes, no pill buttons, no rounded cards.

**The Square Terminal Rule.** The stroke ends square, as the mark's strokes do. It is never capped round.

## Components

### Buttons
Solid, square and heavy-lettered.
- **Shape:** square (0px).
- **Primary:** Route Ink background, Paper Light text, Outfit 700 at 1.1rem, 18px by 26px padding, a trailing 1em arrow or external-link icon.
- **Hover / Focus:** background shifts to Slate (on Coral ground, to Paper Light with Ink text) over 0.2s; focus is the global 3px Coral outline at 3px offset (Ink outline on the Coral ground).
- **Coral:** Signal Coral with Ink text, used once, as the closing primary action on Ink. Hover goes to Paper Light.

### Action links
- **Style:** Outfit 700, inline-flex with a trailing arrow, a 3px underline in the current colour drawn as a bottom border. The arrow slides 4px right on hover.
- **Active step:** the underline turns Coral.
- **Text links** inside prose use a 2px underline at 0.2em offset.

### Navigation
- **Header:** the Ink crossbar holds the white wordmark at 70% of the bar height. The bar's width is twice the stroke's centre line, so the crossbar is centred on the stem. Links are Outfit 500, no underline at rest, underline on hover; external links carry a small out-arrow icon.
- **Mobile:** the bar goes full width, links wrap beneath it at the content column, and a stroke segment continues down from the bar.

### Hero photograph (signature)
`assets/img/hero/laptop.{webp,jpg}`: a laptop on a desk at night, lamp on the left, light strip and glass on the right. The source (`_brand/hero/laptop-source.png`) was colour-graded by `_brand/hero/grade.py`: a gradient map from near-black through Ink and Slate to a warm coral-white for the lamp and light strip, blended 80/20 with a mostly desaturated original so it still reads as a photograph. The violet of the source is gone. The script also fills the screen with near-black so no old pixels survive under the overlay.
- **Screen overlay:** the surface map is laid onto the photo's screen with one affine `matrix()` computed in `site.js` from the measured screen corners (top-left 316,106; top-right 1351,106; bottom-left 310,712 in photo px).
- **Glass:** a faint diagonal reflection and an inset edge falloff sit over the screen and fade out once the camera is inside it.
- **Focus pull:** a second copy, blurred and dimmed (`laptop-soft`), crossfades in (opacity only, 1s) whenever the camera is inside the screen. It reads as depth of field and hides the photo's 1672px resolution at high zoom.
- **Edges:** the photo never shows a frame. The stage behind it is `--night` (#11131F), the photo's own darkest wall colour, not Ink, so the two meet without a step. On wide screens an eased, multi-stop radial mask centred on the laptop dissolves it (a two-stop fade leaves a visible ring); on phones a vertical fade blends it top and bottom into the same dark opening. One grain layer covers the whole stage, photo included, and lifts away once the camera is inside the screen.

### Surface map
Inside the laptop screen (clipped to it). One fixed-size map (2600 x 1518 CSS px, the screen's aspect). Its left half is the Light ground (Local CLI, Slack, Discord, Jupyter); its right half is Ink (Grok Bot, Muse, Dots, Claude Duet). Each ground runs far past the world's edges so a zoomed camera never shows a gap, and the seam between them is a hard vertical edge.
- **Trunk:** a 28px route-colour stroke across the middle of each half, square-ended at the outermost branch.
- **Branches and stops:** each window hangs 80px off the trunk on a 28px branch; where the branch meets the trunk sits a 64px white stop with an 8px route-colour border. The active surface's stop fills Coral.
- **Hub:** the TW mark on a 220px white tile with an 8px Ink border, centred on the seam, labelled "Data 8 tutor".
- **Windows:** the mock product panels at 480px wide. While the camera is on one surface, the others fade to 35%.
- **Camera:** one CSS transform on the photo (translate plus scale, origin top left), eased over 1.25s with `cubic-bezier(.65, 0, .25, 1)`. The order is the laptop (right of the headline), the screen filling the stage, each half, each window, then back out to the laptop. Close-ups cap the map itself at 1.3x; targets inside the screen are projected through the overlay matrix. Clicking a window jumps to its shot. Reduced motion jumps without easing.

### Stop index
- **Style:** a column of 48px white squares centred on the stage's stem, each bordered 4px in the route colour and holding the surface logo, with the surface name as visually hidden link text. The stem and borders switch to Light when the ground behind the stem is Ink.
- **Active:** `aria-current="step"`, border turns Coral, scale 1.12, a 5px solid Coral ring.

### Tour cards
Square cards (max 440px or 34vw) that scroll over the stage's left side: Card White with a 2px Ink border on the self-hosted half, Route Ink with a 2px Light border on the agent half. Surface cards open with a 40px logo tile and name, then the copy, the "Students ask" line and the setup guide link, whose underline is Coral.

### Mock product panels
Frames that show a real tutor reply on each surface.
- **Corner Style:** square.
- **Background:** Card White with Ink text, or Route Ink for the terminal.
- **Border:** 2px Ink (Light on the Ink ground); a 2px title bar with the surface logo at 24px.
- **Shadow Strategy:** panel shadows from Elevation.
- **Internal Padding:** 18 to 28px fluid. Code and bot posts sit on Paper Light; captions in Slate at 0.9rem say what is real and what is illustrative.
- **On the map:** all eight panels are visible at once; the camera, not the panel, moves. Inactive panels fade to 35% opacity over 0.6s while zoomed in.

### The Route (signature)
The stem on the tour stage, the trunk across the surface map, the full-height stroke in each later section, the fillets at ground changes, and the TW mark that closes it in the footer. It draws on (scaleY from the top) with the section's view timeline, and the bottom fillets fade in as the section exits. Without scroll-driven animation support, or with reduced motion, it renders fully drawn.

## Do's and Don'ts

### Do:
- **Do** run one square-ended stroke (stem, clamp 14 to 56px) down the page at the same left offset in every section, including the tour stage, coloured by the ground (Ink on Light and Coral, Light on Ink).
- **Do** align every section's content to the column set by the stroke.
- **Do** set grounds as full-bleed bands of Light, Ink or Coral, each setting its own route, soft and rule colours.
- **Do** set every heading in Outfit 800 with about -0.02em tracking; set running text in Atkinson Hyperlegible at 1.125rem / 1.55.
- **Do** keep every box square (0px) and use heavy structural borders (2px frames, 3px action underlines, 4px stops).
- **Do** use Coral for the active stop, the focus ring, the Ferret ground and the single closing primary action.
- **Do** ship a static, fully drawn fallback for every scroll effect, and honour reduced motion.
- **Do** use the route ease (`cubic-bezier(.16, 1, .3, 1)`) for state movement.

### Don't:
- **Don't** round any box corner or use pill shapes; curves come only from the mark (its semicircles and the stroke's fillets).
- **Don't** cap the stroke round or draw it thin; it carries the mark's weight.
- **Don't** set Coral text on Light or Ink, or use Coral as decoration inside Light and Ink sections.
- **Don't** shadow the stroke, grounds, header bar, buttons or stops; drop shadows belong to mock product panels and tour cards.
- **Don't** blend grounds with gradients; ground changes are hard edges met by the stroke's fillets.
- **Don't** add uppercase tracked labels above headlines.
