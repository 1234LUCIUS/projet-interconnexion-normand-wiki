from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math

W, H = 1200, 720
BG = (248, 250, 252)
NAVY = (15, 45, 70)
GREEN = (215, 244, 229)
GREEN_EDGE = (19, 121, 91)
ORANGE = (255, 232, 194)
ORANGE_EDGE = (185, 107, 0)
LINK = (148, 163, 184)
ADVERT = (37, 99, 235)
MESSAGE = (220, 38, 38)
ACK = (22, 163, 74)
MUTED = (71, 85, 105)
ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "meshcore-adverts-messages.gif"
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

def font(size, bold=False):
    return ImageFont.truetype(BOLD if bold else FONT, size)

def center(draw, xy, text, ft, fill=NAVY):
    box = draw.multiline_textbbox((0, 0), text, font=ft, spacing=4, align="center")
    x, y = xy
    draw.multiline_text((x-(box[2]-box[0])/2, y-(box[3]-box[1])/2), text, font=ft, fill=fill, spacing=4, align="center")

def arrow(draw, a, b, fill, width=5, dashed=False):
    x1,y1=a; x2,y2=b
    if dashed:
        dx,dy=x2-x1,y2-y1; length=max(1,math.hypot(dx,dy)); ux,uy=dx/length,dy/length
        for s in range(0,int(length),18):
            e=min(s+10,length); draw.line((x1+ux*s,y1+uy*s,x1+ux*e,y1+uy*e), fill=fill, width=width)
    else:
        draw.line((x1,y1,x2,y2), fill=fill, width=width)
    ang=math.atan2(y2-y1,x2-x1); size=14
    p1=(x2-size*math.cos(ang-.45),y2-size*math.sin(ang-.45)); p2=(x2-size*math.cos(ang+.45),y2-size*math.sin(ang+.45))
    draw.polygon([(x2,y2),p1,p2], fill=fill)

def lerp(a,b,t): return (a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t)

def node(draw, p, title, subtitle, fill, edge):
    x,y=p; w,h=220,125
    draw.rounded_rectangle((x-w/2,y-h/2,x+w/2,y+h/2), radius=22, fill=fill, outline=edge, width=4)
    center(draw,(x,y-13),title,font(25,True),edge)
    center(draw,(x,y+28),subtitle,font(16),NAVY)

def packet(draw, pos, label, color):
    x,y=pos; r=14
    draw.ellipse((x-r,y-r,x+r,y+r), fill=color, outline=(255,255,255), width=3)
    center(draw,(x,y-33),label,font(14,True),color)

def frame(n):
    im=Image.new("RGB",(W,H),BG); d=ImageDraw.Draw(im)
    d.rectangle((0,0,W,96),fill=NAVY)
    center(d,(W/2,34),"Simulation : adverts, messages et ACK",font(33,True),(255,255,255))
    center(d,(W/2,73),"Exemple pédagogique avec deux Companions et deux Repeaters",font(17),(218,232,242))
    pts=[(150,275),(410,275),(700,275),(965,275)]
    node(d,pts[0],"COMPANION A","utilisateur émetteur",GREEN,GREEN_EDGE)
    node(d,pts[1],"REPEATER 1","relaie les paquets",ORANGE,ORANGE_EDGE)
    node(d,pts[2],"REPEATER 2","relaie les paquets",ORANGE,ORANGE_EDGE)
    node(d,pts[3],"COMPANION B","utilisateur destinataire",GREEN,GREEN_EDGE)
    links=[((pts[0][0]+110,275),(pts[1][0]-110,275)),((pts[1][0]+110,275),(pts[2][0]-110,275)),((pts[2][0]+110,275),(pts[3][0]-110,275))]
    for a,b in links:
        arrow(d,a,b,LINK,4)
        arrow(d,b,a,LINK,4)
    # A small legend and protocol concepts.
    d.rounded_rectangle((95,455,1105,555),radius=18,fill=(239,244,248),outline=(203,213,225),width=2)
    center(d,(255,485),"ADVERT",font(18,True),ADVERT); center(d,(255,523),"annonce la présence\net aide à découvrir le chemin",font(15),MUTED)
    center(d,(600,485),"MESSAGE",font(18,True),MESSAGE); center(d,(600,523),"transporte le contenu\nde l’utilisateur",font(15),MUTED)
    center(d,(945,485),"ACK",font(18,True),ACK); center(d,(945,523),"confirme le retour\nvers l’émetteur",font(15),MUTED)
    # Three phases of the simulation, each 8 frames.
    phase=(n//8)%3; local=(n%8)/8
    if phase==0:
        # An advert from A goes right; B sends its own advert left in the latter half.
        p1=lerp((pts[0][0]+110,275),(pts[1][0]-110,275),local)
        packet(d,p1,"ADVERT",ADVERT)
        if local>.35:
            p2=lerp((pts[3][0]-110,275),(pts[2][0]+110,275),min(1,(local-.35)/.65))
            packet(d,p2,"ADVERT",ADVERT)
        caption="1 · Les Companions annoncent leur présence ; les Repeaters répercutent l’annonce."
    elif phase==1:
        # User message A -> B, with explicit hops.
        seg=int(local*3); t=(local*3)-seg
        ends=[(pts[0][0]+110,275),(pts[1][0]-110,275),(pts[2][0]+110,275),(pts[3][0]-110,275)]
        packet(d,lerp(ends[seg],ends[seg+1],t),"MESSAGE",MESSAGE)
        caption="2 · A envoie un message ; chaque Repeater le relaie au saut suivant."
    else:
        # ACK B -> A.
        seg=int(local*3); t=(local*3)-seg
        ends=[(pts[3][0]-110,275),(pts[2][0]+110,275),(pts[1][0]-110,275),(pts[0][0]+110,275)]
        packet(d,lerp(ends[seg],ends[seg+1],t),"ACK",ACK)
        caption="3 · B renvoie un accusé ; il repasse par les Repeaters jusqu’à A."
    d.rounded_rectangle((90,610,1110,675),radius=18,fill=(235,241,245),outline=(190,204,214),width=2)
    center(d,(W/2,642),caption,font(20,True),NAVY)
    return im

frames=[frame(i) for i in range(24)]
frames[0].save(OUT,save_all=True,append_images=frames[1:],duration=240,loop=0,optimize=True)
print(OUT)
