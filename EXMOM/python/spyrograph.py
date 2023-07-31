from turtle import *

from colorsys import *

bgcolor('black')
tracer (100)

pensize (4)
h = 0

def draw(ang, n):
    circle (5+n, 69)
    left (ang)
    circle (5+2*n, 60)
up()
def hsv_to_rgb(h, s, v):
    return tuple(int(c * 255) for c in colorsys.hsv_to_rgb(h, s, v))

goto (0,0)
for i in range(500):

    c = hsv_to_rgb(h,1,1)

    h += 0.005

    color (c)

    up()

    draw(90, i)

    draw(180, i)

    down()

    draw(1/2, i-i)

    draw(180, i/2)

    draw(120, i-i)