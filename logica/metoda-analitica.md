# Metoda analitică de definire a funcțiilor algebrei propoziționale

Metoda tabelară de definire a funcțiilor algebrei propoziționale este eficientă când numărul de variabile este mic. Pentru funcții cu mai multe variabile se folosesc următoarele operații:

## 1. Operație de renotare a argumentelor

Fie o funcție

$$
f(x_1, x_2, \ldots, x_{i-1}, x_i, x_{i+1}, \ldots, x_n) \in P_2
$$

Schimbând simbolul $x_i$ într-un alt simbol $y$, obținem

$$
f(x_1, \ldots, x_{i-1}, y, x_{i+1}, \ldots, x_n) \in P_2.
$$

Această operație se numește **renotare**. Observați că putem folosi orice alt simbol (inclusiv care apare deja), oferind posibilitatea permutării argumentelor.

### Exemplu de renotare

- Dacă $f(x_1, x_2, x_3)$ este o funcție, renotarea lui $x_3$ cu $x_1$ ar duce la $f(x_1, x_2, x_1)$ (posibil să crească gradul de redundanță, dar este permis).

## 2. Substituție a funcției

Fie date două funcții:

$$
f(x_1, \ldots, x_{i-1}, x_i, x_{i+1}, \ldots, x_n) \in P_2,
$$

$$
g(y_1, y_2, \ldots, y_m) \in P_2.
$$

Înlocuirea lui $x_i$ din $f$ prin funcția $g$ înseamnă

$$
f(x_1, \ldots, x_{i-1}, g(y_1, y_2, \ldots, y_m), x_{i+1}, \ldots, x_n) \in P_2.
$$

Această operație se numește **substituția** funcției $g$ în funcția $f$.

### Exemplu de substituție

- Dacă $f(a, b) = a \land b$ și $g(c) = \overline{c}$, substituind $b$ cu $g(c)$ obținem $f(a, \overline{c}) = a \land \overline{c}$.

## 3. Superpoziție a funcțiilor

Executarea consecutivă (în orice ordine, de oricâte ori) a renotărilor și substituțiilor se numește **superpoziție**.  
De exemplu, pentru

$$
f(x_1, x_2, x_3) \quad\text{și}\quad g(x_1, x_2),
$$

una dintre superpoziții este

$$
f(x_3, g(x_2, x_1), x_1),
$$

unde am schimbat ordinea argumentelor (renotare) și am înlocuit $x_2$ cu $g(x_2, x_1)$.

### Definiție: Formulă

Orice expresie ce descrie o superpoziție a unor funcții se numește **formulă**. Prin urmare,

$$
f(x_3, g(x_2, x_1), x_1)
$$

este un exemplu de formulă.

## Baze de funcții

Fie $B \subseteq P_2$ un subsistem de funcții, numit **bază**.  
O expresie care descrie o superpoziție de funcții doar din $B$ (sau din sistemul $B$) se numește **formulă în baza $B$**.

### Definiție inductivă

1. Orice funcție $f(x_1, \ldots, x_n) \in B$ este o formulă în baza $B$.
2. Dacă $f(x_1, \ldots, x_n) \in B$ și $F_1, F_2, \ldots, F_n$ sunt deja formule în baza $B$, atunci
   $$
   f(F_1, F_2, \ldots, F_n)
   $$
   este și ea o formulă în baza $B$.

Vom nota funcțiile cu litere mici (de ex. $f, g, h$) și formulele cu litere mari (de ex. $F, G, H$). Dacă o funcție $f$ este realizată de o formulă $F$ (adică $F$ descrie exact comportamentul lui $f$), spunem că **funcția $f$ este realizată prin formula $F$** sau că **formula $F$ este realizarea lui $f$**.

### Exemple practice

- Dacă baza $B$ conține doar $\land$ (conjuncția) și $\lnot$ (negația), atunci expresia $\overline{x_1 \land x_2}$ este o formulă în baza $B$.
- Dacă baza $B$ conține $\lor$ și $\land$, putem alcătui orice expresie folosind doar aceste două funcții (și variabile).
