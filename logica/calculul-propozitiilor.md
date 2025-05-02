# Calculul propozițiilor

Spre deosebire de [algebra propozițională](./algebra-propozitiilor.md), unde am avut propoziții care pot fi adevărate sau false și operații asupra lor definite prin tabele de adevăr, în calculul propozițiilor nu se introduc operații, ci formule. Unele formule sunt considerate adevărate prin definiție (axiome), iar altele se obțin din acestea folosind reguli de deducție.

## Simbolurile calculului propozițional

Simbolurile se împart în 3 categorii:

1.  **Variabile propoziționale**: Litere latine majuscule, cu indici dacă este necesar (ex: $A, B, C_2, K_7$).
2.  **Conectori logici**:
    - Conjuncția ($\land$ sau $\text{\&}$)
    - Disjuncția ($\lor$)
    - Implicația ($\rightarrow$)
    - Negația ($\lnot$ sau $\overline{X}$)
    - Echivalența ($\leftrightarrow$)
3.  **Simboluri auxiliare**: Paranteze `( )`, `[ ]`, `{ }`.

Alte simboluri nu sunt folosite în calculul propozițional.

## Formule

Formulele calculului propozițional sunt șiruri finite de simboluri din categoriile de mai sus. Definiția formală este recursivă:

1. Orice variabilă propozițională (ex: $A, B, C_2$) este o formulă.

2. Dacă $F$ și $G$ sunt formule, atunci următoarele sunt de asemenea formule:

   - $(F \land G)$
   - $(F \lor G)$
   - $(F \rightarrow G)$
   - $(\overline{F})$
   - $(F \leftrightarrow G)$

Părțile componente ale unei formule care sunt ele însele formule se numesc **subformule**.

## Regulile de bază de deducție

Există două reguli fundamentale:

### 1. Regula Substituției (R.S.)

Fie $F(A_1, A_2, \ldots, A_n)$ o formulă unde $A_1, \ldots, A_n$ sunt subformule elementare (variabile propoziționale). Fie $B$ o altă formulă (oricât de complexă). Substituția variabilei $A_i$ prin formula $B$ în toate aparițiile sale în $F$ se notează $S_{A_i}^B F$.

**Proprietate**: Dacă formula $F$ este identic adevărată (tautologie), atunci și formula rezultată $S_{A_i}^B F$ este identic adevărată. Similar pentru formulele identic false.

**Exemplu**:
Fie formula $F: A \rightarrow (B \rightarrow A)$. Aceasta este o [axiomă](./axiomele-calculului-propozitional.md#axioma-i1) și deci identic adevărată.
Aplicăm substituția $S_A^C$:
$S_A^C (A \rightarrow (B \rightarrow A)) = C \rightarrow (B \rightarrow C)$.
Formula rezultată este de asemenea identic adevărată.

### 2. Modus Ponens (M.P.)

Această regulă permite deducerea unei formule $G$ dacă avem deja demonstrate formulele $F$ și $F \rightarrow G$.

Schema regulii:

$$
M.P. \frac{F, \quad F \rightarrow G}{G}
$$

Se citește: "Dacă avem $F$ și avem $F$ implică $G$, atunci putem deduce $G$".

**Exemplu**:
Să presupunem că am demonstrat (sau avem ca ipoteze):

1. $A$ (Formula $F$)
2. $A \rightarrow B$ (Formula $F \rightarrow G$)

Aplicând Modus Ponens, putem deduce: 3. $B$ (Formula $G$)

$$
MP(A, A \rightarrow B) \vdash B
$$

## Legătura cu Algebra Propozițională

Orice formulă care este identic adevărată în algebra propozițională (adică o tautologie verificabilă prin tabele de adevăr) poate fi dedusă formal în calculul propozițional folosind [axiomele](./axiomele-calculului-propozitional.md) și regulile de deducție (Substituție și Modus Ponens).
