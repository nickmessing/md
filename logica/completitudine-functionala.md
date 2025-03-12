# Completitudine funcțională. Exemple de sisteme funcțional complete

## Definiția completitudinii funcționale

**Definiție**: Fie un sistem de funcții notat $p = \{f_1, f_2, \ldots, f_n\} \subseteq P_2$, unde $P_2$ reprezintă mulțimea tuturor funcțiilor algebrei propoziționale. Sistemul $p$ se numește **funcțional complet** dacă orice funcție din algebra propozițională poate fi realizată printr-o formulă în baza $p$.

### Exemple de sisteme funcțional complete:

- $P_2$ (mulțimea tuturor funcțiilor booleene) - trivial complet
- $P_1 = \{\land, \lor, \lnot\}$ - demonstrat în [teorema 3](./realizarea-functiilor.md#teorema-3)
- $P_3 = \{\land, \lnot\}$ - completitudine funcțională doar cu conjuncția și negația
- $P_4 = \{\lor, \lnot\}$ - completitudine funcțională doar cu disjuncția și negația

## Exemple de sisteme funcțional complete mai puțin evidente

### Sistem $P_5 = \{0, 1, \land, \oplus\}$

Putem demonstra că acest sistem este complet verificând că putem obține negația ($\lnot$) prin formulă în baza $P_5$. Observăm că:

| $x$ | $0$ | $1$ | $x \oplus 1$ |
| --- | --- | --- | ------------ |
| 0   | 0   | 1   | 1            |
| 1   | 0   | 1   | 0            |

Deci, $x \oplus 1 = \overline{x}$. Astfel, având negația și conjuncția ($\land$), putem construi orice funcție.

## Polinomul lui Zhegalkin

### Teoremă (reprezentarea polinomială):

Fiecare funcție din algebra propozițională $f(x_1, \ldots, x_n)$ poate fi descompusă în următoarea formă unică:

$$
f(x_1, \ldots, x_n) = \bigoplus_{I \subseteq \{1,2,\ldots,n\}} \left(c_I \land \bigwedge_{i \in I} x_i \right)
$$

unde $c_I \in \{0,1\}$ sunt coeficienți constanți și $\bigoplus$ reprezintă suma după modulo 2 (XOR).

Această formă este cunoscută ca **polinomul lui Zhegalkin** sau **forma normală algebrică**.

### Unicitatea reprezentării

O proprietate importantă a polinomului lui Zhegalkin este că orice funcție din algebra propozițională poate fi reprezentată în această formă într-un **singur mod**. Aceasta oferă o metodă unică de caracterizare a funcțiilor booleene.

### Forma generală pentru două variabile

Pentru o funcție $f(x_1, x_2)$, forma polinomială generală este:

$$
f(x_1, x_2) = c_0 \oplus (c_1 \land x_1) \oplus (c_2 \land x_2) \oplus (c_{12} \land x_1 \land x_2)
$$

### Forma generală pentru trei variabile

Pentru o funcție $f(x_1, x_2, x_3)$, forma polinomială generală este:

$$
\begin{align}
f(x_1, x_2, x_3) = & \: c_0 \oplus (c_1 \land x_1) \oplus (c_2 \land x_2) \oplus (c_3 \land x_3) \oplus \\
& (c_{12} \land x_1 \land x_2) \oplus (c_{13} \land x_1 \land x_3) \oplus (c_{23} \land x_2 \land x_3) \oplus \\
& (c_{123} \land x_1 \land x_2 \land x_3)
\end{align}
$$

## Metode de găsire a polinomului lui Zhegalkin

### Metoda 1: Calculul coeficienților din tabelul de adevăr

Pentru a găsi polinomul lui Zhegalkin pentru o funcție, putem calcula coeficienții substituind diverse valori în funcție.

#### Exemplu: Implicația $x_1 \rightarrow x_2$

| $x_1$ | $x_2$ | $x_1 \rightarrow x_2$ |
| ----- | ----- | --------------------- |
| 0     | 0     | 1                     |
| 0     | 1     | 1                     |
| 1     | 0     | 0                     |
| 1     | 1     | 1                     |

Pornind de la forma generală pentru două variabile:

$$
x_1 \rightarrow x_2 = c_0 \oplus (c_1 \land x_1) \oplus (c_2 \land x_2) \oplus (c_{12} \land x_1 \land x_2)
$$

Calculăm coeficienții substituind valorile din tabel:

1. $f(0,0) = 1 = c_0 \oplus 0 \oplus 0 \oplus 0 \Rightarrow c_0 = 1$
2. $f(0,1) = 1 = 1 \oplus 0 \oplus c_2 \oplus 0 \Rightarrow c_2 = 0$
3. $f(1,0) = 0 = 1 \oplus c_1 \oplus 0 \oplus 0 \Rightarrow c_1 = 1$
4. $f(1,1) = 1 = 1 \oplus 1 \oplus 0 \oplus c_{12} \Rightarrow c_{12} = 1$

Deci polinomul lui Zhegalkin pentru $x_1 \rightarrow x_2$ este:

$$
x_1 \rightarrow x_2 = 1 \oplus x_1 \oplus (x_1 \land x_2)
$$

### Metoda 2: Transformarea expresiilor booleene

O altă metodă este transformarea expresiilor booleene folosind identitățile pentru operațiile logice.

Pentru $x_1 \rightarrow x_2$:

$$
\begin{align}
x_1 \rightarrow x_2 &= \overline{x_1} \lor x_2 \\
&= \overline{x_1 \land \overline{x_2}} \\
\end{align}
$$

Folosind identitatea $\overline{F} = F \oplus 1$:

$$
\begin{align}
\overline{x_1 \land \overline{x_2}} &= (x_1 \land \overline{x_2}) \oplus 1 \\
&= (x_1 \land (x_2 \oplus 1)) \oplus 1
\end{align}
$$

Aplicând distributivitatea $\oplus$-ului:

$$
\begin{align}
(x_1 \land (x_2 \oplus 1)) \oplus 1 &= (x_1 \land x_2) \oplus (x_1 \land 1) \oplus 1 \\
&= (x_1 \land x_2) \oplus x_1 \oplus 1
\end{align}
$$

Obținem astfel același rezultat:

$$
x_1 \rightarrow x_2 = 1 \oplus x_1 \oplus (x_1 \land x_2)
$$

## Importanța completitudinii funcționale

Studierea sistemelor funcțional complete este crucială pentru:

1. Înțelegerea expresivității sistemelor logice
2. Proiectarea eficientă a circuitelor logice
3. Reducerea complexității reprezentărilor funcțiilor booleene
4. Demonstrarea echivalenței între diferite sisteme logice

Reprezentarea Zhegalkin oferă o formă canonică utilă pentru simplificarea funcțiilor booleene și pentru analiza teoretică a proprietăților acestora.
