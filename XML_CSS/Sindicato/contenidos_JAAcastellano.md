## Sindicación de contenidos

<br>

1. **Introducción e importancia de la sindicación en el desarrollo web.**

    La sindicación es el tema de, agarrar contenido web de otros sitios y citarlo y difundirlo, ejemplos de esto son por ejemplo blogs de noticias, donde salen siempre las noticias más recientes.
    

<br>

2. **Conceptos generales sobre la sindicación de contenidos.**

    * *Definición*
        - Citar contenido
        - Agarrar y añadirlo a tu web a modo de información

    * *Historia y evolución*<br>
        Más a ya del concepto de la informática, en 1895, nacío el concepto de la sindicación lo creo un señor mu' majete llamado William Randolph Hearst, y esto lo creo bajo el concepto de las tiras en los cómics.

        [Las tiras són una pequeña historia que se resume en unas pocas biñetas que te pueden salirte anexas en alguna revista como añadido].
        
        Su respectiva evolución fue de la mano con las webs.


    * *Avances de la sindicación de contenido*<br>
        Principalmente, esto es en tema interno, en relación a datos.
        
        Lo más notorio en un principio son nuevas tecnologías que de adapten a la sindicación, aquí entrarían por ejemplo los archivos RSS.

        Ahora bien, de la mano con esto van varias mandangas que he visto y leído por ahí de manejo y flujo de datos para identificar tipos de datos, integración con redes sociales, y cosas que me dieron pereita de leer, pero que molan.

<br>

3. **Protocolos y formatos**

    * *RSS - Características y estructura*<br>
        Es rollo una extensión de XML a la hora de manejar datos de red para re-direccionar a según que sitios quieras redireccionar.

        Estos archivos se suelen envolver en la siguiente estructura de etiquetas:

        <**rss**> -> <**channel**> -> <**item**>
        
            - la etiqueta <rss> es la que envuelve todo el documento.

            - la etiqueta de <channel> define el canal que usa el archivo RSS (sin tener idea, a mi entender es que tu dentro del archivo creas distintos canales por los que se transmiten diferentes links)

            - la etiqueta de <item> hace referencía a bloques de articulos, luego dentro de estás etiquetas puedes añadir diversos elementos (etiquetas denominadas, <title> | <link> | <description>)

    * *Atom - Características y estructura - Ventajas sobre RSS*<br>

        Atom es otro editor de código creado por lo' señores de github, sirve principalmente para lo mismo que rss, y sus ventajas frente a esté parecen ser el echo de que es más flexible para añadir más información, y que encima se integra con el propio rss, vamos, que si trabajas con atom también lo puedes usar para rss.

    * *JSON Feed - Características y estructura*<br>

        Es el mismo concepto que rss y atom previamente visto para sindicar contenidos, ahora bien, esto con JSON en lugar de XML.
        
        Sin ir más lejos, utiliza el mismo tipo de estructura que rss pero en JSON.


<br>

4. Ejemplo práctico de proyecto [HTML](https://drive.google.com/file/d/1xdXde6O0S8VWOnRKrMF4MNOgPaG7y8I2/view?usp=sharing)