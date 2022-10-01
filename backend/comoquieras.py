#Dado un nombre y una fecha de nacimiento codificamos unas coordenadas 
#galacticas (b,l)
import numpy as np
import math

n = "NicolasPanRivero"
# print(len(a))

d = 20
m = 3
a = 2000

def toBinary(cosa):
  l,m=[],[]
  for i in cosa:
    l.append(ord(i))
  for i in l:
    m.append(int(bin(i)[2:]))
  return m

print(n,"en binario es") 
print(toBinary("n"))

b = 20+3+2000

