# Formule normale și forme normale în logica predicatelor

## Forma prenexă - reamintire

Conform celor demonstrate în [logica predicatelor](/logica/logica-predicatelor), pentru orice formulă din logica predicatelor există echivalenta sa **forma prenexă** - o formulă în care negația se atribuie doar formulelor elementare.

## Formule normale

**Definiție**: Forma prenexă o vom numi **normală** dacă ea nu conține cuantificatori sau, dacă îi conține, atunci toți cuantificatorii stau în fața formulei, adică ei leagă toate celelalte operații.

**Forma generală**: O formulă normală are forma:

$$
Q_1 x_1 Q_2 x_2 \ldots Q_n x_n \, U(x_1, x_2, \ldots, x_n)
$$

unde:

- $Q_i \in \{\forall, \exists\}$ pentru $i = 1, 2, \ldots, n$
- $U(x_1, x_2, \ldots, x_n)$ este o formulă fără cuantificatori (construită doar cu $\land$, $\lor$, $\overline{\phantom{A}}$ aplicat formulelor elementare)

### Teorema existenței formei normale

**Teoremă**: Pentru orice formulă din logica predicatelor există echivalenta ei formulă normală.

### Demonstrația conceptuală

Demonstrația se bazează pe următoarele transformări:

1. **Aducerea la forma prenexă**: Eliminăm negațiile din fața cuantificatorilor
2. **Reorganizarea cuantificatorilor**: Aducem toți cuantificatorii în față
3. **Redenumirea variabilelor**: Evităm coliziunile de variabile

## Formule normale Skolem

**Definiție**: Formula normală se numește **formulă normală Skolem** dacă toți cuantificatorii de existență stau în fața tuturor cuantificatorilor de generalizare.

**Forma generală Skolem**:

$$
\exists y_1 \exists y_2 \ldots \exists y_m \forall x_1 \forall x_2 \ldots \forall x_n \, U(y_1, \ldots, y_m, x_1, \ldots, x_n)
$$

### Exemplu de transformare Skolem

Considerăm formula:

$$
\forall x \exists y \forall z \, U(x,y,z)
$$

Pentru a o transforma în forma Skolem, trebuie să aducem cuantificatorii de existență în față:

$$
\exists y \forall x \forall z \, U'(x, y, z)
$$

**Observație**: Această transformare nu păstrează întotdeauna echivalența logică, ci doar satisfiabilitatea.

## Tipuri specifice de forme normale

### 1. Forma normală disjunctivă în logica predicatelor

**Structura**:

$$
Q_1 x_1 \ldots Q_n x_n \, (D_1 \lor D_2 \lor \ldots \lor D_k)
$$

unde fiecare $D_i$ este o conjuncție de literali (formule elementare sau negațiile lor).

### 2. Forma normală conjunctivă în logica predicatelor

**Structura**:

$$
Q_1 x_1 \ldots Q_n x_n \, (C_1 \land C_2 \land \ldots \land C_k)
$$

unde fiecare $C_i$ este o disjuncție de literali.

## Algoritm de aducere la forma normală

### Pasul 1: Eliminarea conectivelor

Înlocuim toate aparițiile de $\rightarrow$ și $\leftrightarrow$:

- $A \rightarrow B \equiv \overline{A} \lor B$
- $A \leftrightarrow B \equiv (A \rightarrow B) \land (B \rightarrow A)$

### Pasul 2: Deplasarea negațiilor

Aplicăm echivalențele cuantificatorilor:

- $\overline{\forall x P(x)} \equiv \exists x \overline{P(x)}$
- $\overline{\exists x P(x)} \equiv \forall x \overline{P(x)}$

Aplicăm legile De Morgan:

- $\overline{A \land B} \equiv \overline{A} \lor \overline{B}$
- $\overline{A \lor B} \equiv \overline{A} \land \overline{B}$

### Pasul 3: Standardizarea variabilelor

Redenumim variabilele pentru a evita coliziunile:

- Variabile de legătură diferite trebuie să aibă nume diferite
- Variabilele libere nu trebuie să coincidă cu variabilele de legătură

### Pasul 4: Extragerea cuantificatorilor

Aducem toți cuantificatorii în fața formulei, respectând dependințele.

## Exemplu complet de transformare

**Formula inițială**:

$$
\forall x (P(x) \rightarrow \exists y (Q(x,y) \land \overline{\forall z R(x,z)}))
$$

**Pasul 1 - Eliminarea implicației**:

$$
\forall x (\overline{P(x)} \lor \exists y (Q(x,y) \land \overline{\forall z R(x,z)}))
$$

**Pasul 2 - Deplasarea negației**:

$$
\forall x (\overline{P(x)} \lor \exists y (Q(x,y) \land \exists z \overline{R(x,z)}))
$$

**Pasul 3 - Standardizarea (redenumirea lui $z$ în $w$)**:

$$
\forall x (\overline{P(x)} \lor \exists y (Q(x,y) \land \exists w \overline{R(x,w)}))
$$

**Pasul 4 - Extragerea cuantificatorilor**:

$$
\forall x \exists y \exists w (\overline{P(x)} \lor (Q(x,y) \land \overline{R(x,w)}))
$$

## Exemplu de verificare a realizabilității

**Întrebare**: Este realizabilă formula?

$$
\exists x \forall y (Q(x,y) \land \overline{Q(x,y)})
$$

**Analiză**:

- Pentru ca formula să fie adevărată, trebuie să existe un $x$ astfel încât pentru orice $y$, să avem simultan $Q(x,y)$ și $\overline{Q(x,y)}$
- Aceasta este imposibil, deoarece o propoziție nu poate fi simultan adevărată și falsă
- **Concluzie**: Formula este **nerealizabilă** (contradicție)

## Observații importante

1. **Ordinea cuantificatorilor contează**: $\forall x \exists y P(x,y)$ nu este echivalentă cu $\exists y \forall x P(x,y)$

2. **Forma Skolem poate modifica semantica**: Transformarea în forma Skolem păstrează satisfiabilitatea, nu echivalența

3. **Complexitatea**: Aducerea la forma normală poate crește exponențial mărimea formulei

4. **Aplicații**: Formele normale sunt esențiale pentru:
   - Algoritmii de demonstrare automată
   - Rezolvarea prin rezoluție
   - Verificarea satisfiabilității
