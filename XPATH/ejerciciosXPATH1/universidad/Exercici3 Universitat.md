## Enunciat i Solucions


---


**Exercici 1: Nom de la Universitat**
- Universitat Fondeguilla
<br>
    * Respuesta:
    /universitat/nom/text()
<br>

**Exercici 2: País de la Universitat**
- Espanya
<br>
    * Respuesta:
    /universitat/pais/text()
<br>

**Exercici 3: Noms de les Carreres**
- Grau Informàtica
- Grau Empresarials
- Grau Relacions Laborals
- Grau Química
- Grau Biologia
- Grau Humanitats
<br>
    * Respuesta:
    /universitat/carreres/carrera/nom/text()
<br>

**Exercici 4: Anys de pla d'estudi de les carreres**
- 2003
- 2001
- 2001
- 2003
- 2001
- 1980
<br>
    * Respuesta:
    /universitat/carreres/carrera/pla/text()
<br>

**Exercici 5: Noms de tots els alumnes**
- Víctor Manuel
- Lluisa
- Fernando
- María
<br>
    * Respuesta:
    /universitat/alumnes/alumne/nom/text()
<br>

**Exercici 6: Identificadors de totes les carreres**
- id="c01"
- id="c02"
- id="c03"
- id="c04"
- id="c05"
- id="c06"
<br>
    * Respuesta:
    /universitat/carreres/carrera/@id
<br>   

**Exercici 7: Dades de la carrera amb id c01**
```xml
<carrera id="c01">
    <nom>Grau Informàtica</nom>
    <pla>2003</pla>
    <credits>250</credits>
    <centre>Escola d'Informàtica</centre>
</carrera>
```
<br>
    * Respuesta:
    /universitat/carreres/carrera[@id='c01']
<br>

**Exercici 8: Centre on es estudia de la carrera amb id c02**
- Facultat de Ciències Socials
<br>
    * Respuesta:
    /universitat/carreres/carrera[@id='c02']/centre/text()
<br>

**Exercici 9: Noms de les carreres que tenen subdirector**
- Grau Relacions Laborals
<br>
    * Respuesta:
    /universitat/carreres/carrera[subdirector]/nom/text()
<br>

**Exercici 10: Noms dels alumnes que estan fent projecte**
- Lluisa
- María
<br>
    * Respuesta:
    /universitat/alumnes/alumne[estudis/projecte]/nom/text()
<br>    

**Exercici 11: Codis de les carreres en les quals hi ha algun alumne matriculat**
- c01
- c02
<br>
    * Respuesta:
    /
    <!--Este también funciona, pero solo en xpath 2.0-->
    distinct-values(/universitat/alumnes/alumne/estudis/carrera/@codi)
<br>

**Exercici 12: Cognoms i Nom dels alumnes amb beca**
- Rivas Santos, Víctor Manuel
- Pérez Romero, Fernando
<br>
    * Respuesta:
    

**Exercici 13: Noms de les assignatures de la titulació c04**
- Pedagogia
- Tecnologia dels Aliments

**Exercici 14: Noms deles assignatures de segon trimestre**
- Enginyeria del Software
- Pedagogia
- Didàctica
- Tecnologia dels Aliments
- Història del Pensament

**Exercici 15: Noms de les assignatures que no tenen 4 crèdits teòrics**
- Ofimàtica
- Enginyeria del Software
- Tecnologia dels Aliments
- Bases de Dades
- Història del Pensament

