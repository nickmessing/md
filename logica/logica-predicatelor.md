# Logica predicatelor. Noțiunea de formulă și cuantificatori

## Introducere

Logica predicatelor este o dezvoltare a logicii propoziționale cu deosebirea că aici se introduc și noțiunea de **predicat**.

Logica propozițională se limitează la analiza relațiilor dintre propoziții considerate ca unități atomice. Logica predicatelor extinde această analiză, permițând descompunerea propozițiilor în părți componente și exprimarea relațiilor dintre obiecte.

## Domeniul de obiecte

Fie că $\mathfrak{M}$ este o mulțime de obiecte, iar $a, b, c, d \in \mathfrak{M}$.

Afirmațiile despre aceste obiecte le vom nota prin:

- $P(a)$ = "$a$ este număr prim"
- $Q(b, c)$ = "$b \leq c$"
- $R(x_1, x_2, \ldots, x_n)$ = "$x_1 + x_2 + \ldots + x_n = 0$"

## Predicatele

**Definiție**: **Predicatele** sunt astfel de afirmații despre careva obiecte care pot fi atât adevărate cât și false.

În cazul când $x \in \mathfrak{M}$, atunci predicatul $F(x)$ este o astfel de afirmație ce devine concretă în cazul când $x$ ia o valoare concretă din $\mathfrak{M}$.

$$
F(x): \mathfrak{M} \rightarrow \{\text{adevăr}, \text{fals}\} \quad \text{sau} \quad F(x): \mathfrak{M} \rightarrow \{1, 0\}
$$

Astfel de funcții le vom numi **funcții logice** sau **predicate**.

Cu ajutorul predicatelor putem exprima diferite relații dintre obiectele acestui domeniu.

## Terminologie

- **Domeniul de obiecte** sau **domeniul**: Mulțimea $\mathfrak{M}$
- **Elementele din domeniu**: Se notează cu litere latine mici ($a, b, c, \ldots$)
- **Formule**: Se notează cu litere latine mari ($A, B, C, \ldots$) - pot lua două valori $\in \{0, 1\}$

## Formule elementare

**Definiție**: Literele latine majuscule $A, B, C, \ldots$ precum și simbolurile de predicate $P(x)$, $K(a, b)$ le vom numi în continuare **formule elementare** din logica predicatelor.

**Observații importante**:

- Simbolurile obiectelor din $\mathfrak{M}$ nu sunt formule
- Formulele elementare cât și funcțiile pot primi doar 0 sau 1
- Putem introduce operațiile logice între formule: $\land$, $\lor$, $\rightarrow$, $\overline{\phantom{A}}$

## Cuantificatorii

În afară de operațiile din logica propozițiilor, în logica predicatelor apare o operație nouă: **Operația de legătură cu cuantificatori**.

### Tipuri de cuantificatori

Există **2 cuantificatori**:

1. **$\forall$** - cuantificator de generalizare (orice)
2. **$\exists$** - cuantificator de existență (există)

### Definiția cuantificatorilor

Fie $R(x)$ un predicat definit pe domeniul $\mathfrak{M}$ (unde $x \in \mathfrak{M}$). Atunci:

$$
\forall x \, R(x) = \begin{cases}
1, & \text{dacă } R(x) = 1 \text{ pentru toți } x \in \mathfrak{M} \\
0, & \text{dacă } R(x_0) = 0 \text{ pentru vreun } x_0 \in \mathfrak{M}
\end{cases}
$$

$$
\exists x \, R(x) = \begin{cases}
1, & \text{dacă } R(x_0) = 1 \text{ pentru vreun } x_0 \in \mathfrak{M} \\
0, & \text{dacă } R(x) = 0 \text{ pentru toți } x \in \mathfrak{M}
\end{cases}
$$

### Dualitatea cuantificatorilor

**Proprietate**: Cuantificatorul de generalizare și existență se numesc **duali** unul altuia.

$$
\overline{\forall x F(x)} \equiv \exists x \overline{F(x)}
$$

$$
\overline{\exists x F(x)} \equiv \forall x \overline{F(x)}
$$

## Variabile libere și de legătură

### Exemple și definiții

- În $\forall x F(x)$ - $x$ este **variabilă de legătură**
- În $\forall y F(x, y)$ - $x$ este **variabilă liberă**, $y$ este **variabilă de legătură**

**Definiție**:

- **Variabila care nu este legată de cuantificator** se numește **liberă**
- **Variabila care este legată** se numește **de legătură**

## Definiția inductivă de formulă

**Definiție inductivă**:

1. **Baza**: Simbolul unei propoziții și simbolul unui predicat sunt formule și le vom numi **formule elementare**.

2. **Operații logice**: Dacă $U$ și $V$ sunt formule, atunci formule sunt de forma:

   - $U \land V$
   - $U \lor V$
   - $U \rightarrow V$
   - $\overline{U}$

3. **Cuantificare**: Dacă $U(x)$ este formulă în care $x$ este variabilă liberă, atunci:

   - $\forall x U(x)$
   - $\exists x U(x)$

   sunt formule (și nu mai sunt formule elementare).

## Echivalența în logica predicatelor

**Definiție**: Formulele $U$ și $V$ sunt **echivalente** pe domeniul $\mathfrak{M}$ (notat $(U \equiv V)_{\mathfrak{M}}$) în cazul când formulele $U$ și $V$ coincid pentru toate valorile variabilelor din aceste formule.

### Echivalențe fundamentale

Este evident că echivalențele din calculul propozițiilor sunt satisfăcute și pentru formulele din calculul predicatelor. În particular avem:

$$
U \rightarrow V \equiv \overline{U} \lor V
$$

### Echivalențe specifice cuantificatorilor

În afară de aceste echivalențe, mai avem echivalențe legate de cuantificatori:

$$
\overline{\forall x U(x)} \equiv \exists x \overline{U(x)}
$$

$$
\overline{\exists x U(x)} \equiv \forall x \overline{U(x)}
$$

### Legea de transformare a negației

Din aceste două formule rezultă următoarea lege:

**Regula**: Semnul negației îl putem introduce sub semnul cuantificatorului schimbând cuantificatorul în dualul său.

Din aceste două formule precum și din regulile lui De Morgan rezultă următoarea afirmație:

**Teoremă**: Pentru orice formulă putem găsi echivalenta ei în care semnul negației se atribuie numai formulelor elementare.

## Formule prenexe

**Definiție**: Formula în care participă doar 3 operații ($\land$, $\lor$, $\overline{\phantom{A}}$) plus cuantificatori și în care negația se atribuie doar formulelor elementare se numesc **formule prenexe**.

Din cele spuse mai sus rezultă că pentru orice formulă din logica predicatelor există echivalenta sa formulă în **forma prenexă** (perfectă în careva literaturi) și pe aceasta o vom numi **forma prenexă** a formulei date.

**Procedura**: Vom spune că formula a fost adusă la forma sa prenexă.

## Exemple practice

### Exemplu 1: Transformarea negației

$$
\overline{\forall x (P(x) \rightarrow Q(x))} \equiv \exists x \overline{(P(x) \rightarrow Q(x))}
$$

$$
\equiv \exists x \overline{(\overline{P(x)} \lor Q(x))} \equiv \exists x (P(x) \land \overline{Q(x)})
$$

### Exemplu 2: Formula cu variabile mixte

În formula $\forall x (P(x) \lor \exists y R(x,y))$:

- $x$ este variabilă de legătură pentru $\forall$
- $y$ este variabilă de legătură pentru $\exists$
- Ambele variabile sunt legate în contexte diferite
