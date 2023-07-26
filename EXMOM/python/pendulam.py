import turtle
from math import *
import scipy.integrate as integrate
import numpy as np
import time

win = turtle.Screen()
win.title("Double pendulum simulation")
win.setup(800,800)
win.bgcolor('white')
win.tracer(0)

################## Change initial conditions
L1 = 240
L2 = 240
theta1 = 100 
theta2 = 80 
G = 9.8
M1 = 1
M2 = 2
omega1 = 0
omega2 = 0
##################

p1 = turtle.Turtle()
p1.shape('circle')
p1.color('red')
p1.up()
p1.shapesize(1.5,1.5)

p2 = turtle.Turtle()
p2.shape('circle')
p2.color('blue')
p2.up()
p2.shapesize(1.5,1.5)

rod1 = turtle.Turtle()
rod1.shape('circle')
rod1.shapesize(0.1,0.1)
rod1.pensize(3)
rod1.up()


rod2 = turtle.Turtle()
rod2.shape('circle')
rod2.shapesize(0.1,0.1)
rod2.up()
rod2.goto(p1.xcor(),p1.ycor())
rod2.pensize(3)
rod2.down()

dt = 0.005
t = np.arange(0.0,200,dt)
            

def derivs(state, t):

    dydx = np.zeros_like(state)
    dydx[0] = state[1]  #theta1(dot) = omega1

    del_ = state[2] - state[0] # (theta2-theta1)
    den1 = (M1 + M2)*L1 - M2*L1*cos(del_)*cos(del_)
    dydx[1] = (M2*L1*state[1]*state[1]*sin(del_)*cos(del_) +  #omega1(dot)
               M2*G*sin(state[2])*cos(del_) +
               M2*L2*state[3]*state[3]*sin(del_) -
               (M1 + M2)*G*sin(state[0]))/den1 

    dydx[2] = state[3] #theta2(dot)

    den2 = (L2/L1)*den1
    dydx[3] = (-M2*L2*state[3]*state[3]*sin(del_)*cos(del_) +  #omega2(dot)
               (M1 + M2)*G*sin(state[0])*cos(del_) -
               (M1 + M2)*L1*state[1]*state[1]*sin(del_) -
               (M1 + M2)*G*sin(state[2]))/den2
    
    return dydx

state = np.radians([theta1,omega1,theta2,omega2])
y = integrate.odeint(derivs,state,t)
k = 1

while k<40000:
    x1 = L1*sin(y[k][0])
    y1 = -L1*cos(y[k][0]) + 200 # to ceiling
    x2 = x1 + L2*sin(y[k][2])
    y2 = y1 -L2*cos(y[k][2])

    p1.goto(x1,y1)
    p2.goto(x2,y2)
    
    rod1.goto(p1.xcor(),p1.ycor())
    rod2.goto(p2.xcor(),p2.ycor())
    win.update()
    rod1.clear()
    rod2.clear()
    rod1.up()
    rod1.goto(0,200)
    rod1.down()
    rod2.up()
    rod2.goto(p1.xcor(),p1.ycor())
    rod2.down()
    k += 1 # How quickly to run through array
    
turtle.bye()
