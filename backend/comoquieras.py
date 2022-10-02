#Dado un nombre y una fecha de nacimiento codificamos unas coordenadas 
#galacticas (b,l)
import numpy as np
import math

d = int(input('dia'))
m = int(input('mes'))

#d = 20
#m = 3

fecha = m+d
#Para mapear un numero x de un intervalo [a,b] a un intervalo [c,d] hacemos:
def b(fecha):
    a=2
    b=43
    c=0
    d=90
    resu = c + (((d-c)/(b-a))*(fecha-a))
    return resu
print("Su latitud galáctica es b=",b(fecha))

def l(fecha):
    a=2
    b=43
    c=0
    d=360
    resu = c + (((d-c)/(b-a))*(fecha-a))
    return resu
print("Su longitud galáctica es l=",l(fecha))

#--------------------------------

n = input('¿Cómo lo hace sentir esta imagen?')
#Transformamos el string en un binario
#test_str = "Pan"  
res = int(''.join(format(ord(i), '08b') for i in n)) 
#Se pierden los ceros iniciales pero da igual
#print(res)

#--------------------------------

#Obtenemos la suma de todos los 1s del binario
my_list = []
for x in str(res):
    my_list.append(int(x))
#print(my_list) # 👉️ [1, 3, 5, 7, 9]

numero = np.random.normal(loc=sum(my_list), scale=fecha, size=None)

print("Su estrella es la numero",int(abs(numero))+1)

#--------------------------------

#Luego que tenemos las coordenadas galácticas buscamos en algun catálogo 
#como Gaia y obtenemos una imagen de campo de la cual seleccionamos 
#la correspondiente a la palabra que escribio la persona

#Cuando tenemos ese campo hay que hacer un crossmatch con algun catalogo de
#variabilidad (¡EN EL FUTURO CERCANO VERA RUBIN!) para saber si alguna de los 
#objetos del campo es alguno de las cosas que estamos estudiando: Supernovas,
#binarias, planetas transitantes o estrellas pulsantes.
#Al usuario se le aparece la estrella correspondiente a la palabra que eligio
#y se muestra el tipo de variabilidad que es con una animación clickeable.
#Luego aparece el boton de "leer mas" para que aparezca la informacion mas
#tecnica.