// The surface tour.
// The world is a photo of a laptop; its screen shows the surface map. Scrolling pushes the
// camera into the screen, then through each surface, then back out to the laptop.
// Discrete activation: one IntersectionObserver marks the shot crossing the middle of the
// viewport. The camera is a single CSS transform on .world, eased by a CSS transition.
// No scroll listeners.
// On narrow or short screens the photo is a still picture and each shot gets a copy of its
// window inline.
(function () {
  document.documentElement.classList.add("js");
  var tour = document.querySelector("[data-tour]");
  if (!tour) return;

  var wide = window.matchMedia("(min-width: 960px) and (min-height: 620px)");
  var still = window.matchMedia("(prefers-reduced-motion: reduce)");
  var stage = tour.querySelector(".stage");
  var view = tour.querySelector(".viewport");
  var world = tour.querySelector(".world");
  var screen = world.querySelector(".screen");
  var shots = Array.prototype.slice.call(tour.querySelectorAll("[data-shot]"));

  // The photo's screen, measured from its pixels (photo px): top-left, top-right, bottom-left.
  // The map is laid onto it with one affine matrix, inset half a pixel into the bezel.
  var TL = [316.5, 106.5], TR = [1350.5, 106.5], BL = [310.5, 711.5];
  var MW = screen.offsetWidth, MH = screen.offsetHeight;
  var A = {
    a: (TR[0] - TL[0]) / MW, b: (TR[1] - TL[1]) / MW,
    c: (BL[0] - TL[0]) / MH, d: (BL[1] - TL[1]) / MH,
    e: TL[0], f: TL[1]
  };
  screen.style.transform = "matrix(" + [A.a, A.b, A.c, A.d, A.e, A.f].join(",") + ")";
  function toPhoto(x, y) { return [A.a * x + A.c * y + A.e, A.b * x + A.d * y + A.f]; }

  // Camera targets, in photo px.
  var fixed = {
    laptop: { x: 130, y: 60, w: 1420, h: 820 },
    screen: { x: 310, y: 106, w: 1041, h: 606 }
  };
  var spots = {};
  screen.querySelectorAll("[data-cam]").forEach(function (el) { spots[el.dataset.cam] = el; });

  // Map-space box of an element inside the screen, projected into the photo.
  function target(name) {
    if (fixed[name]) return fixed[name];
    var el = spots[name], x = 0, y = 0, e = el;
    while (e && e !== screen) { x += e.offsetLeft; y += e.offsetTop; e = e.offsetParent; }
    var pts = [toPhoto(x, y), toPhoto(x + el.offsetWidth, y), toPhoto(x, y + el.offsetHeight), toPhoto(x + el.offsetWidth, y + el.offsetHeight)];
    var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
    var x0 = Math.min.apply(null, xs), y0 = Math.min.apply(null, ys);
    return { x: x0, y: y0, w: Math.max.apply(null, xs) - x0, h: Math.max.apply(null, ys) - y0 };
  }

  var links = {};
  tour.querySelectorAll(".stops a").forEach(function (a) { links[a.hash.slice(1)] = a; });
  var current = null;

  function aim(shot, animate) {
    if (!wide.matches) {
      var crop = fixed.laptop;
      var s0 = view.clientWidth / crop.w;
      view.style.height = Math.round(crop.h * s0) + "px";
      world.classList.remove("moving", "zoomed", "inside", "inside-full");
      stage.classList.remove("inside");
      world.style.transform = "translate(" + (-crop.x * s0).toFixed(1) + "px," + (-crop.y * s0).toFixed(1) + "px) scale(" + s0.toFixed(4) + ")";
      return;
    }
    view.style.height = "";
    var vw = view.clientWidth, vh = view.clientHeight;
    var name = shot.dataset.shot;
    var copy = shot.querySelector(".card, .intro-copy");
    var left = copy ? copy.getBoundingClientRect().right - view.getBoundingClientRect().left + (name === "laptop" ? 8 : 48) : 0;
    var right = vw - (copy ? 48 : 24);
    var pad = name === "laptop" ? 0 : vh * 0.06;
    var b = target(name);
    var close = !fixed[name] && name !== "self" && name !== "agents";
    // Close-ups are capped by how large the map itself gets (1.3x its own px).
    var cap = close ? 1.3 / Math.hypot(A.a, A.b) : Infinity;
    var s = Math.min((right - left) / b.w, (vh - pad * 2) / b.h, cap);
    var tx = (left + right) / 2 - (b.x + b.w / 2) * s;
    var ty = vh / 2 - (b.y + b.h / 2) * s;

    world.classList.toggle("moving", animate && !still.matches);
    world.classList.toggle("zoomed", close);
    world.classList.toggle("inside", name !== "laptop");
    world.classList.toggle("inside-full", name === "screen");
    stage.classList.toggle("inside", name !== "laptop");
    world.style.transform = "translate(" + tx.toFixed(1) + "px," + ty.toFixed(1) + "px) scale(" + s.toFixed(4) + ")";

    // Ground behind the stem: the map's Light half reads as light; everything else is dark.
    var px = (tour.querySelector(".stem").offsetLeft + 20 - tx) / s;
    var py = (vh / 2 - ty) / s;
    var sc = fixed.screen, ground = "ink";
    if (px > sc.x && px < sc.x + sc.w && py > sc.y && py < sc.y + sc.h && px < sc.x + sc.w / 2) ground = "light";
    stage.dataset.ground = ground;
  }

  function activate(shot) {
    if (shot === current) return;
    if (current) {
      current.classList.remove("is-active");
      var old = spots[current.dataset.shot];
      if (old && old.classList.contains("spot")) old.classList.remove("is-active");
      var oldLink = links[current.id];
      if (oldLink) oldLink.removeAttribute("aria-current");
    }
    current = shot;
    shot.classList.add("is-active");
    var spot = spots[shot.dataset.shot];
    if (spot && spot.classList.contains("spot")) spot.classList.add("is-active");
    var link = links[shot.id];
    if (link) link.setAttribute("aria-current", "step");
    aim(shot, true);
  }

  // Narrow screens: each shot carries a copy of its window under the copy.
  shots.forEach(function (shot) {
    var spot = spots[shot.dataset.shot];
    if (!spot || !spot.classList.contains("spot")) return;
    var copy = spot.querySelector(".panel").cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    var card = shot.querySelector(".card");
    card.insertBefore(copy, card.querySelector(".go"));
  });

  // Clicking a window on the screen jumps to its shot.
  world.addEventListener("click", function (e) {
    if (!wide.matches) return;
    var spot = e.target.closest(".spot");
    if (!spot) return;
    var shot = document.getElementById(spot.dataset.cam);
    if (shot) shot.scrollIntoView({ behavior: still.matches ? "auto" : "smooth", block: "start" });
  });

  function reframe() { aim(current || shots[0], false); }
  new ResizeObserver(reframe).observe(view);
  wide.addEventListener("change", reframe);
  if (document.fonts) document.fonts.ready.then(reframe);

  activate(shots[0]);
  world.classList.remove("moving");

  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) activate(e.target); });
  }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
  shots.forEach(function (s) { io.observe(s); });
})();
