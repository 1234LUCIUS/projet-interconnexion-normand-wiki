from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 700
BG = (247, 250, 252)
NAVY = (15, 45, 70)
GREEN = (215, 244, 229)
GREEN_EDGE = (19, 121, 91)
ORANGE = (255, 232, 194)
ORANGE_EDGE = (185, 107, 0)
BLUE = (219, 234, 254)
BLUE_EDGE = (37, 99, 235)
PURPLE = (237, 233, 254)
PURPLE_EDGE = (124, 58, 237)
MUTED = (79, 93, 106)
PACKET = (220, 38, 38)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "meshcore-fonctionnement.gif"

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

def f(size, bold=False):
    return ImageFont.truetype(BOLD if bold else FONT, size)

def centered(draw, xy, text, font, fill=NAVY):
    box = draw.multiline_textbbox((0, 0), text, font=font, spacing=4, align="center")
    x, y = xy
    draw.multiline_text((x - (box[2]-box[0])/2, y - (box[3]-box[1])/2), text,
                        font=font, fill=fill, spacing=4, align="center")

def arrow(draw, a, b, fill=NAVY, width=5, dashed=False):
    if dashed:
        import math
        x1, y1 = a; x2, y2 = b
        dx, dy = x2-x1, y2-y1
        length = max(1, math.hypot(dx, dy))
        ux, uy = dx/length, dy/length
        step = 18
        for s in range(0, int(length), step):
            e = min(s+10, length)
            draw.line((x1+ux*s, y1+uy*s, x1+ux*e, y1+uy*e), fill=fill, width=width)
    else:
        draw.line((*a, *b), fill=fill, width=width)
    import math
    ang = math.atan2(b[1]-a[1], b[0]-a[0])
    size = 15
    p1 = (b[0] - size*math.cos(ang-0.45), b[1] - size*math.sin(ang-0.45))
    p2 = (b[0] - size*math.cos(ang+0.45), b[1] - size*math.sin(ang+0.45))
    draw.polygon([b, p1, p2], fill=fill)

def lerp(a, b, t):
    return (a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t)

def node(draw, center, size, title, subtitle, fill, edge):
    x, y = center
    w, h = size
    draw.rounded_rectangle((x-w/2, y-h/2, x+w/2, y+h/2), radius=22, fill=fill, outline=edge, width=4)
    centered(draw, (x, y-12), title, f(25, True), edge)
    centered(draw, (x, y+25), subtitle, f(16), NAVY)

def make_frame(frame):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    d.rectangle((0, 0, W, 92), fill=NAVY)
    centered(d, (W/2, 34), "Comment fonctionne MeshCore ?", f(34, True), (255,255,255))
    centered(d, (W/2, 72), "Un message passe par des Repeaters dédiés ; un Observer écoute et documente.", f(17), (218, 232, 242))

    pts = [(150, 270), (405, 270), (675, 270), (945, 270)]
    node(d, pts[0], (205, 125), "COMPANION A", "crée le message", GREEN, GREEN_EDGE)
    node(d, pts[1], (205, 125), "REPEATER 1", "relais dédié", ORANGE, ORANGE_EDGE)
    node(d, pts[2], (205, 125), "REPEATER 2", "multi-saut", ORANGE, ORANGE_EDGE)
    node(d, pts[3], (205, 125), "COMPANION B", "reçoit", GREEN, GREEN_EDGE)
    obs = (675, 505)
    maps = (945, 505)
    node(d, obs, (250, 105), "OBSERVER", "écoute + remonte", BLUE, BLUE_EDGE)
    node(d, maps, (250, 105), "CARTES / ANALYSES", "MeshStats · RelayLens", PURPLE, PURPLE_EDGE)

    for a, b in zip(pts, pts[1:]):
        arrow(d, (a[0]+103, a[1]), (b[0]-103, b[1]), NAVY, 5)
    arrow(d, (pts[1][0]+20, pts[1][1]+64), (obs[0]-50, obs[1]-54), BLUE_EDGE, 4, True)
    arrow(d, (pts[2][0]+20, pts[2][1]+64), (obs[0]+25, obs[1]-54), BLUE_EDGE, 4, True)
    arrow(d, (obs[0]+125, obs[1]), (maps[0]-125, maps[1]), PURPLE_EDGE, 4)

    # Packet follows the three radio hops.
    path = [(pts[0][0]+103, pts[0][1]), (pts[1][0]-103, pts[1][1]),
            (pts[1][0]+103, pts[1][1]), (pts[2][0]-103, pts[2][1]),
            (pts[2][0]+103, pts[2][1]), (pts[3][0]-103, pts[3][1])]
    seg = (frame % 36) / 6
    i = min(int(seg), len(path)-2)
    t = seg - i
    pos = lerp(path[i], path[i+1], t)
    r = 13 + (frame % 6 == 0) * 4
    d.ellipse((pos[0]-r, pos[1]-r, pos[0]+r, pos[1]+r), fill=PACKET, outline=(255, 255, 255), width=3)
    centered(d, (pos[0], pos[1]-29), "MESSAGE", f(13, True), PACKET)

    phases = [
        "1 · Le Companion prépare un message.",
        "2 · Le premier Repeater relaie le paquet.",
        "3 · Un second Repeater étend le chemin.",
        "4 · Le Companion destinataire reçoit le message.",
        "5 · Un Observer écoute les annonces et paquets visibles.",
        "6 · Les données autorisées alimentent les cartes et analyses.",
    ]
    phase = (frame // 6) % len(phases)
    d.rounded_rectangle((90, 610, 1110, 665), radius=18, fill=(235, 241, 245), outline=(190, 204, 214), width=2)
    centered(d, (W/2, 637), phases[phase], f(21, True), NAVY)
    return img

frames = [make_frame(i) for i in range(36)]
frames[0].save(OUT, save_all=True, append_images=frames[1:], duration=180, loop=0, optimize=True)
print(OUT)
