# Funcțiile algebrei propoziționale

Formulele se notează cu litere mari (de ex. $A, B, C$), iar variabilele propoziționale cu litere mici (de ex. $x_1, x_2, \ldots, x_n$).

O funcție

$$
f(x_1, x_2, \ldots, x_n)
$$

care ia valori doar în $\{0, 1\}$, cu fiecare variabilă $x_i \in \{0, 1\}$, se numește **funcție în algebră propozițională** sau **funcție booleană**.

## Reprezentarea prin tabele de valori

Fiecare funcție booleană se poate descrie printr-un **tabel de valori** cu $2^n$ rânduri (tupluri de valori), în care fiecare combinație $(x_1, x_2, \ldots, x_n)$ apare o singură dată, de obicei în **ordine lexicografică** (crescătoare). Coloana din dreapta a tabelului indică valoarea funcției (0 sau 1) pentru fiecare tuplu.

Prin $P_2$ (de la matematicianul Post) se notează **mulțimea tuturor funcțiilor** de algebră propozițională. Pentru o funcție cu $n$ variabile, mulțimea acestor funcții se notează $P_2(n)$. Se știe că

$$
|P_2(n)| \;=\; 2^{2^n}.
$$

## Variabile fictive

Nu toate variabilele influențează valoarea unei funcții booleene. Variabilele care **nu** modifică deloc rezultatul funcției, indiferent ce valori ar lua, se numesc **variabile fictive**.

**Exemplu**  
Fie funcția următoare (cu trei variabile $x_1, x_2, x_3$):

| $x_1$ | $x_2$ | $x_3$ | $f(x_1, x_2, x_3)$ |
| ----- | ----- | ----- | ------------------ |
| 0     | 0     | 0     | 0                  |
| 0     | 0     | 1     | 1                  |
| 0     | 1     | 0     | 1                  |
| 0     | 1     | 1     | 0                  |
| 1     | 0     | 0     | 0                  |
| 1     | 0     | 1     | 1                  |
| 1     | 1     | 0     | 1                  |
| 1     | 1     | 1     | 0                  |

Observăm că valoarea lui $f$ depinde doar de $x_2$ și $x_3$; concret, $f(x_1, x_2, x_3) \equiv x_2 \oplus x_3$. Variabila $x_1$ **nu** schimbă rezultatul și, prin urmare, este **fictivă**.

### Definiție (Variabilă fictivă)

Se spune că variabila $x_i$ din funcția

$$
f(x_1, x_2, \ldots, x_n)
$$

este **fictivă** dacă, pentru **oricare** două tupluri de valori care diferă **numai** la poziția $x_i$ (i.e. exact acolo se schimbă din 0 în 1, restul rămân aceleași), valoarea funcției rămâne neschimbată. Formal:

Dacă pentru orice

$$
(\alpha_1, \alpha_2, \ldots, \alpha_{i-1},\,0,\,\alpha_{i+1}, \ldots, \alpha_n)
\quad\text{și}\quad
(\alpha_1, \alpha_2, \ldots, \alpha_{i-1},\,1,\,\alpha_{i+1}, \ldots, \alpha_n)
$$

avem

$$
F(\alpha_1, \alpha_2, \ldots, \alpha_{i-1},0, \alpha_{i+1}, \ldots, \alpha_n) = F(\alpha_1, \alpha_2, \ldots, \alpha_{i-1},1, \alpha_{i+1}, \ldots, \alpha_n),
$$

atunci $x_i$ este variabilă fictivă. În caz contrar, $x_i$ se numește **esențială**.

#### În formă de tabel:

Cercetăm funcția din tabelul de mai sus adică $F(x_1, x_2, x_3) = x_2 \oplus x_3$.

| $0$ | $x_2$ | $x_3$ | $F(0, x_2, x_3)$ | Egalitate | $F(1, x_2, x_3)$ | $1$ | $x_2$ | $x_3$ |
| --- | ----- | ----- | ---------------- | --------- | ---------------- | --- | ----- | ----- |
| 0   | 0     | 0     | 0                | $=$       | 0                | 1   | 0     | 0     |
| 0   | 0     | 1     | 1                | $=$       | 1                | 1   | 0     | 1     |
| 0   | 1     | 0     | 1                | $=$       | 1                | 1   | 1     | 0     |
| 0   | 1     | 1     | 0                | $=$       | 0                | 1   | 1     | 1     |

În exemplul de mai sus, pentru $x_1$ se pot verifica perechile de rânduri care diferă doar la $x_1$; funcția dă aceeași valoare. În schimb, $x_2$ și $x_3$ sunt **esențiale**, deoarece modificarea lor poate schimba valoarea lui $f$.

#### În formă de tabel pentru $x_2$:

| $x_1$ | $0$ | $x_3$ | $F(x_1, 0, x_3)$ | Egalitate | $F(x_1, 1, x_3)$ | $x_1$ | $1$ | $x_3$ |
| ----- | --- | ----- | ---------------- | --------- | ---------------- | ----- | --- | ----- |
| 0     | 0   | 0     | 0                | $\neq$    | 1                | 0     | 1   | 0     |

Putem să nu continuăm tabelul deoarece am găsit deja o diferență între valorile funcției pentru $x_2 = 0$ și $x_2 = 1$. Astfel, $x_2$ este **esențială**.

#### În formă de tabel pentru $x_3$:

| $x_1$ | $x_2$ | $0$ | $F(x_1, x_2, 0)$ | Egalitate | $F(x_1, x_2, 1)$ | $x_1$ | $x_2$ | $1$ |
| ----- | ----- | --- | ---------------- | --------- | ---------------- | ----- | ----- | --- |
| 0     | 0     | 0   | 0                | $\neq$    | 1                | 0     | 0     | 1   |

Putem să nu continuăm tabelul deoarece am găsit deja o diferență între valorile funcției pentru $x_3 = 0$ și $x_3 = 1$. Astfel, $x_3$ este **esențială**.
