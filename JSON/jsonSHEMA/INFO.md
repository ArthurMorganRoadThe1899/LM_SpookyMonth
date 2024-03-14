- **Exercici 1: Validació de Propietats de Color**
<br>
Crea un esquema que valida un objecte amb propietats de color. Les propietats han de ser "colorPrincipal"
(cadena de text), "tons" (array de cadenes de text) i opcionalment "hex" (cadena de text amb format
hexadecimal).
Regex per a la cadena exadecimal: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})?$"

<br>

- **Exercici 2: Validació de Configuració d'Aplicació**
<br>
Defineix un esquema que valida la configuració d'una aplicació. L'objecte ha de contenir les
propietats "idioma" (cadena de text), "mode" (cadena de text amb opcions "normal" o "dark"), i
opcionalment "notificacions" (boolean).

<br>

- **Exercici 3: Restricció d'Elements a una Llista**
<br>
Crea un esquema que valida una llista d'elements, on cada element ha de ser un objecte amb les
propietats "nom" (cadena de text) i "puntuacio" (número enter). Assegura't que la llista tinga com a mínim 3
elements.

<br>

- **Exercici 4: Validació d'Informació de Producte**
<br>
Defineix un esquema que valida la informació d'un producte. L'objecte ha de contenir les propietats "nom"
(cadena de text), "preu" (número decimal) i "disponible" (boolean). La propietat "nom" és obligatòria.

<br>

- **Exercici 5: Referència a un Esquema Extern**
<br>
Utilitza un esquema extern per validar una llista d'usuaris. L'esquema de l'usuari ha de contenir les
propietats "nom" (cadena de text) i "email" (cadena de text amb format d'email). La llista ha de tenir com a
mínim 2 usuaris.

# Valorador de JSON https://www.jsonschemavalidator.net/