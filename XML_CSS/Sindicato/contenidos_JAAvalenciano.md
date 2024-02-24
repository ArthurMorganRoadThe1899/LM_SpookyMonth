## Sindicació de continguts

<br>

1. **Introducció i importància de la sindicació en el desenvolupament web.**
    La sindicació és agarrar contingut web d'altres llocs i citar-lo i difondre-ho, exemples d'això són per exemple blogs de notícies, on apareixen sempre les notícies més recents.
    

<br>

2. **Conceptes generals sobre la sindicació de continguts.**

    * *Definició*
        - Citar contingut
        - Agarrar el contingut i afegir-ho al teu web a mode d'informació

    * *Història i evolució*<br>
        Més a ja del concepte de la informàtica, en 1895, va naixer el concepte de la sindicació el crec un senyor molt simpàtic anomenat William Randolph Hearst, i això ho crec sota el concepte de les tires en els còmics.

        [Les tires son una xicoteta història que es resumix en unes poques binyetes que et poden eixir-te annexes en alguna revista com a afegit].
        
        La seua respectiva evolució va anar de bracet amb les webs.

    * *Avanços de la sindicació de contingut*<br>
        Principalment, això és en tema intern, en relació a dades.
        
        El més notori en un principi són noves tecnologies que d'adapten a la sindicació, ací entrarien per exemple els arxius RSS.

         Ara bé, de la mà amb això van diverses flegmes que he vist i llegit per ací de maneig i flux de dades per a identificar tipus de dades, integració amb xarxes socials, i coses que em van donar perea de llegir, però que molen.

<br>

3. **Protocols i formats**

    * *RSS - Característiques i estructura*<br>
         És una extensió de XML a l'hora de manejar dades de xarxa per a re-adreçar a segons que llocs vulgues redirigir.

         <**rss**> -> <**channel**> -> <**item**>
 
        - l'etiqueta <rss> és la que embolica tot el document.

        - l'etiqueta de <channel> definix el canal que usa l'arxiu RSS (sense tindre idea, a la meua entendre és que la teua dins de l'arxiu crees diferents canals pels quals es transmeten diferents links)

        - l'etiqueta de <item> fa referencía a blocs de articles, després dins d'estàs etiquetes pots afegir diversos elements (etiquetes denominades, <title> | <link> | <description>)

    * *Atom - Característiques i estructura - Avantatges sobre RSS*<br>
         
         Atom és un altre editor de codi creat per els senyors de github, servix principalment per al mateix que rss, i els seus avantatges enfront d'estiga semblen ser el tire que és més flexible per a afegir més informació, i que damunt s'integra amb el propi rss, anem, que si treballes amb atom també ho pots usar per a rss.

    * *JSON Feed -  Característiques i estructura*<br>

         És el mateix concepte que rss i atom prèviament vist per a sindicar continguts, ara bé, això amb JSON en lloc de XML.
        
        Sense anar més lluny, utilitza el mateix tipus d'estructura que *rss però en *JSON.

<br>

4. Exemple pràctic de projecte [HTML](https://drive.google.com/file/d/1xdXde6O0S8VWOnRKrMF4MNOgPaG7y8I2/view?usp=sharing)