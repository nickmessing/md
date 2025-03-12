# Mulțimi funcțional închise

În această pagină vom studia conceptul de mulțimi funcțional închise și proprietățile acestora. Vom analiza diferite categorii de mulțimi de funcții booleene care sunt închise sub operația de superpoziție.

## Definiții de bază

Vom nota prin $\mathfrak{m} \subseteq P_2$ o submulțime de funcții din $P_2$ (mulțimea tuturor funcțiilor booleene).

### Închiderea funcțională

**Definiție:** Mulțimea tuturor funcțiilor care pot fi obținute prin operația de superpoziție din funcțiile mulțimii $\mathfrak{m}$ se numește închiderea mulțimii $\mathfrak{m}$ și se notează prin $[\mathfrak{m}]$.

### Exemple de închideri funcționale

- $[\{x_1 \land x_2, \overline{x}\}] = P_2$ (sistem funcțional complet)
- $[\{\overline{x}\}] = \{x, \overline{x}\}$ (sistem care poate genera doar identitatea și negația)

### Mulțime funcțional închisă

**Definiție:** Mulțimea $\mathfrak{m}$ se numește funcțional închisă dacă închiderea ei este ea însăși, adică $[\mathfrak{m}] = \mathfrak{m}$.

În cele ce urmează, vom studia mai multe exemple importante de mulțimi funcțional închise.

## Mulțimea funcțiilor care conservă constanta 0 ($T_0$)

**Definiție:** Funcția $f(x_1, x_2, \ldots, x_n) \in P_2$ conservă sau păstrează valoarea zero dacă $f(0, 0, \ldots, 0) = 0$.

Notăm prin $T_0$ mulțimea tuturor funcțiilor care păstrează valoarea zero.

### Exemple

- $x_1 \land x_2 \in T_0$ deoarece $0 \land 0 = 0$
- $x_1 \lor x_2 \in T_0$ deoarece $0 \lor 0 = 0$
- $x_1 \rightarrow x_2 \notin T_0$ deoarece $0 \rightarrow 0 = 1$
- $\overline{x} \notin T_0$ deoarece $\overline{0} = 1$

### Teorema 1

**Teorema:** Mulțimea $T_0$ este funcțional închisă ($[T_0] = T_0$).

**Demonstrație:**

Este evident că $T_0 \subseteq [T_0]$ (orice funcție din $T_0$ este și în închiderea sa).

Demonstrăm că $[T_0] \subseteq T_0$. Fie două funcții din $T_0$:

- $f(x_1, \ldots, x_n) \in T_0$
- $g(x_1, \ldots, x_m) \in T_0$

Considerăm superpoziția:
$F(x_1, \ldots, x_n) = f(x_1, \ldots, x_{i-1}, g(x_1, \ldots, x_m), x_{i+1}, \ldots, x_n)$

Când înlocuim toate variabilele cu 0:
$F(0, \ldots, 0) = f(0, \ldots, 0, g(0, \ldots, 0), 0, \ldots, 0)$

Dar $g(0, \ldots, 0) = 0$ (pentru că $g \in T_0$)
Deci $F(0, \ldots, 0) = f(0, \ldots, 0) = 0$ (pentru că $f \in T_0$)

Astfel, $F \in T_0$, ceea ce demonstrează că $[T_0] \subseteq T_0$.

## Mulțimea funcțiilor care conservă constanta 1 ($T_1$)

**Definiție:** Funcția $f(x_1, \ldots, x_n) \in P_2$ conservă sau păstrează constanta 1 dacă $f(1, \ldots, 1) = 1$.

Notăm această mulțime cu $T_1$.

### Exemple

- $x_1 \land x_2 \in T_1$ deoarece $1 \land 1 = 1$
- $x_1 \lor x_2 \in T_1$ deoarece $1 \lor 1 = 1$
- $\overline{x} \notin T_1$ deoarece $\overline{1} = 0$
- $x_1 \oplus x_2 \notin T_1$ deoarece $1 \oplus 1 = 0$

### Teorema 2

**Teorema:** Mulțimea $T_1$ este funcțional închisă ($[T_1] = T_1$).

Demonstrația este similară cu cea pentru $T_0$.

### Observație

În clasa funcțiilor din $T_0$ (respectiv $T_1$), numărul de funcții de $n$ variabile este $\frac{1}{2} \cdot 2^{2^n}$. Aceasta se explică prin faptul că fixăm valoarea funcției într-un singur punct (când toate variabilele sunt 0, respectiv 1), iar pentru celelalte $2^n - 1$ puncte, funcția poate lua orice valoare.

## Funcții duale și autoduale

### Duala unei funcții

**Definiție:** Funcția $f^*(x_1, \ldots, x_n) = \overline{f(\overline{x_1}, \overline{x_2}, \ldots, \overline{x_n})}$ se numește duala funcției $f$.

### Exemple

- $(x_1 \land x_2)^* = \overline{(\overline{x_1} \land \overline{x_2})} = x_1 \lor x_2$
- $(x_1 \lor x_2)^* = \overline{(\overline{x_1} \lor \overline{x_2})} = x_1 \land x_2$

### Funcții autoduale

**Definiție:** Funcția $f(x_1, \ldots, x_n)$ care coincide cu duala proprie, adică $f(x_1, \ldots, x_n) = f^*(x_1, \ldots, x_n)$, se numește funcție autoduală.

### Exemple

- Funcția $x_1 \oplus x_2 \oplus \ldots \oplus x_n \oplus 1$ este autoduală
- Funcția $f(x_1, x_2) = x_1 \oplus x_2$ este autoduală deoarece:  
  $f^*(x_1, x_2) = \overline{f(\overline{x_1}, \overline{x_2})} = \overline{(\overline{x_1} \oplus \overline{x_2})} = \overline{x_1} \oplus \overline{x_2} = x_1 \oplus x_2 = f(x_1, x_2)$

### Mulțimea funcțiilor autoduale (S)

Notăm prin $S$ mulțimea tuturor funcțiilor autoduale.

**Proprietăți:**

- Dacă $x \in S$, atunci $\overline{x} \in S$

### Teorema 3

**Teorema:** Mulțimea $S$ este funcțional închisă ($[S] = S$).

## Funcții monotone (M)

Vom nota prin $\tilde{\alpha}$ un cortegiu $(\alpha_1, \ldots, \alpha_n)$, unde fiecare $\alpha_i \in \{0,1\}$.

**Definiție:** Spunem că $\tilde{\alpha} \leq \tilde{\beta}$ dacă pentru fiecare $i$ din $1 \ldots n$ avem $\alpha_i \leq \beta_i$. În caz contrar, spunem că cortegiile nu sunt comparabile.

**Definiție:** Funcția $f$ de $n$ variabile se numește monotonă dacă pentru orice două cortegii comparabile $\tilde{\alpha}$ și $\tilde{\beta}$ astfel încât $\tilde{\alpha} \leq \tilde{\beta}$ avem că $f(\tilde{\alpha}) \leq f(\tilde{\beta})$.

Notăm prin $M$ mulțimea tuturor funcțiilor monotone.

### Exemple

- $x_1 \land x_2$ este monotonă
- $x_1 \lor x_2$ este monotonă
- $\overline{x}$ nu este monotonă (când $x$ crește de la 0 la 1, $\overline{x}$ scade de la 1 la 0)
- $x_1 \oplus x_2$ nu este monotonă ($0 \oplus 0 = 0$, $0 \oplus 1 = 1$, $1 \oplus 1 = 0$)

### Teorema 4

**Teorema:** Mulțimea $M$ este funcțional închisă ($[M] = M$).

## Funcții liniare (L)

**Definiție:** Funcția $f(x_1, x_2, \ldots, x_n)$ se numește liniară dacă ea poate fi reprezentată în următoarea formă:
$$c_0 \oplus (c_1 \land x_1) \oplus (c_2 \land x_2) \oplus \ldots \oplus (c_n \land x_n)$$
unde fiecare $c_i \in \{0, 1\}$.

Notăm prin $L$ mulțimea tuturor funcțiilor liniare.

### Exemple

- $x_1 \oplus x_2 \oplus 1$ este liniară
- $x_1 \oplus x_2 \oplus x_3$ este liniară
- $x_1 \land x_2$ nu este liniară
- $x_1 \lor x_2$ nu este liniară

### Teorema 5

**Teorema:** Mulțimea $L$ este funcțional închisă ($[L] = L$).

### Observație

Pentru a determina dacă o funcție este liniară, putem construi polinomul Zhegalkin al acesteia și verifica dacă toți monomii sunt de gradul cel mult 1 (adică nu conțin produse de variabile).

## Importanța mulțimilor funcțional închise

Mulțimile funcțional închise joacă un rol important în studiul completitudinii funcționale și în caracterizarea sistemelor funcțional complete. Cunoașterea acestor mulțimi ne permite să determinăm dacă un sistem de funcții poate genera toate funcțiile booleene posibile prin superpoziții.
