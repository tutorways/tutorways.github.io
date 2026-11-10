---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Homepage (index.html)

Mode: Persuade. Audience: instructors first; researchers routed to docs. Action: pick a surface and open its setup guide. Proof: eight live surfaces, real documented commands, Ferret as the concrete tutor. Constraints: no benchmark results or numbers; no "LLM Tutors For All"; avoid the startup SaaS look, academic dryness and scroll-jacking.

## Direction contract

THESIS: The TW mark is a route: one stem (the tutor) drops and bends into the places students already ask. The page draws that stroke down the scroll, and each surface is a stop on it. It refuses the AI-landing default of a logo strip over three feature cards.

OWN-WORLD: The brand's three avatar grounds in sequence: Light #F4F5F7, Ink #14172B, Coral #F0553A. One thick stroke at the mark's 1/6 weight with square terminals; its only curves are the mark's own (semicircles inside the mark, quarter-circle fillets where the stroke meets a ground). The stroke takes the contrasting colour of whatever ground it crosses. Outfit ExtraBold display (the wordmark's own face), Atkinson Hyperlegible body. Coral is the Ferret ground and the one final primary action (Read the docs); inside Light and Ink sections it marks only the active stop. Where grounds change, the stroke pours into the next ground through quarter-circle fillets (the mark's curve), and the route ends as the TW mark in the footer.

STORY: Visitors see one tutor reaching eight surfaces, learn that the surface is the variable TutorWays benchmarks, meet Ferret as the useful tutor, then open a setup guide or the docs.

FIRST VIEWPORT: On an Ink ground, the Outfit headline and lede in Light on the left; on the right, a colour-graded photograph of a laptop on a desk at night, feathered into the Ink, whose screen shows the surface map: the route as a trunk with all eight surface windows branching off it, self-hosted on a Light half and agents on an Ink half, the TW mark at the seam. The stem on the left carries a stop index linking to each surface. Nav: mark, Surfaces, Benchmark, Ferret, Docs, GitHub. (Revised 2026-11-09: the earlier picker list read as generic and was replaced by the map.)

FORM: seed: none (pinned). User: "look at our logos for design already"; "For the homepage we should use scrolly telling … showcase the various deployments"; then (2026-11-09) "have an image at the beginning that allows us to zoom into all of the diff features like discord slack cli etc." Then (2026-11-09) the user asked to zoom into "a PICTURE OF A REAL LAPTOP" instead of an illustration, and to "add dimension to the website without making it look like ai slop"; they supplied the photo. Signature interaction: the laptop photo stays on a sticky stage, the first shot pushes into its screen with a focus pull on the room, and the map while one card per surface scrolls over it, and the camera zooms into that surface's window (self-hosted on Light, across the seam, agents on Ink), then pulls back out to the whole map before the benchmark. Discrete activation: one IntersectionObserver at mid-viewport, one CSS transform transition on the map; no GSAP. Fallbacks: below 960x620 the map is a still overview and each card carries its window inline; reduced motion jumps the camera without easing; without JS the cards read as a list.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
