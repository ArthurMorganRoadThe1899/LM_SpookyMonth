## Enunciat i Solucions


---

**Exercici 1: Nom dels moduls que s'imparteixen a l'isntitut.**

- Aplicacions web
- Gestió de bases de dades
- Llenguatges de marques i sistemes de gestió de la informació
- Implantació d'aplicacions web
<br>
    * Respuesta: 
    /ies/moduls/modul/nom/text()
<br>

**Exercici 2: Nom dels moduls del cicle DAW.**
- Llenguatges de marques i sistemes de gestió de la informació.
- Implantació d'aplicacions web.
<br>
    * Respuesta:
    /ies/moduls/modul[cicle='DAW']/nom/text()
<br>

**Exercici 3: Nom dels moduls que s'imparteixen en 2n curs de qualsevol cicle.**
- Aplicacions web
- Implantació d'aplicacions web
<br>
    * Respuesta:
    /ies/moduls/modul[curs='2']/nom/text()
<br>

**Exercici 4: Nom dels moduls de menys de 5 hores setmanals.**
- Aplicacions web
- Llenguatges de marques i sistemes de gestió de la informació
<br>
    * Respuesta:
    /ies/moduls/modul[horesSetmanals<'5']/nom/text()
<br>

**Exercici 5: Nom dels moduls que s'imparteixen en el primer curs de DAW.**
- Gestió de bases de dades
- Llenguatges de marques i sistemes de gestió de la informació
<br>
    * Respuesta: 
    /ies/moduls/modul[curs='1']/nom/text()
<br>

**Exercici 6: Hores setmanals dels mòduls de més de 3 hores**
- 4
- 5
- 5
<br>
    * Respuesta:
    /ies/moduls/modul[horesSetmanals>'3']/horesSetmanals/text()