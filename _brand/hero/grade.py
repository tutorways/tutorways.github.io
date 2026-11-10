import sys
from PIL import Image, ImageDraw, ImageFilter, features
import numpy as np
src, outdir = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
a = np.asarray(im).astype(np.float32) / 255.0

# 1. Luminance, then a brand gradient map: near-black -> Ink -> slate -> warm coral light -> warm white.
L = (0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2])
stops = [(0.00, (5, 6, 12)), (0.10, (14, 16, 32)), (0.22, (24, 28, 52)), (0.42, (60, 64, 92)),
         (0.65, (196, 130, 112)), (0.82, (246, 196, 178)), (1.00, (255, 246, 240))]
xs = np.array([s[0] for s in stops]); cs = np.array([s[1] for s in stops], np.float32) / 255.0
mapped = np.stack([np.interp(L, xs, cs[:, i]) for i in range(3)], -1)

# 2. Keep a little of the original's colour so it still reads as a photograph, minus most of the violet.
gray = L[..., None].repeat(3, -1)
orig_desat = gray + (a - gray) * 0.25
out = mapped * 0.8 + orig_desat * 0.2
out = np.clip(out, 0, 1)
img = Image.fromarray((out * 255 + 0.5).astype(np.uint8))

# 3. Blank the screen (slightly past its edges, so no old pixels survive under the overlay).
d = ImageDraw.Draw(img)
d.polygon([(314, 104), (1353, 104), (1353, 714), (308, 714)], fill=(8, 9, 18))

img.save(f'{outdir}/laptop.jpg', quality=86, optimize=True, progressive=True)
if features.check('webp'): img.save(f'{outdir}/laptop.webp', quality=82, method=6)
# 4. Out-of-focus copy for when the camera is inside the screen: blurred and dimmed.
soft = img.filter(ImageFilter.GaussianBlur(10))
soft = Image.fromarray((np.asarray(soft).astype(np.float32) * 0.55).astype(np.uint8))
soft.save(f'{outdir}/laptop-soft.jpg', quality=78, optimize=True, progressive=True)
if features.check('webp'): soft.save(f'{outdir}/laptop-soft.webp', quality=70, method=6)
print('webp', features.check('webp'))
