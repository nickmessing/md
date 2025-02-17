# Forme normale perfecte

Vom introduce noțiunea de formule echivalente pornind de la faptul că fiecare formulă determină o corespondență sau o funcție între mulțimea tuturor cortegiilor de valori din formulele date și valorile logice de 0 și 1 sau adevăr și fals. Este natural ca formulele care reprezintă aceeași corespondență să fie considerate echivalente.

## Teorema 1

În mulțimea formulelor alcătuite din n variabile propoziționale există $2^{2^n}$ clase de formule echivalente.

### Demonstrație:

| $x_1$ | $x_2$ | $x_3$ | ... | $x_{n-1}$ | $x_n$ | $F(x_1, x_2, x_3, ..., x_{n-1}, x_n)$ |
| ----- | ----- | ----- | --- | --------- | ----- | ------------------------------------- |
| 0     | 0     | 0     | ... | 0         | 0     | $\{0, 1\}$                            |
| 0     | 0     | 0     | ... | 0         | 1     | $\{0, 1\}$                            |
| 0     | 0     | 0     | ... | 1         | 0     | $\{0, 1\}$                            |
| 0     | 0     | 0     | ... | 1         | 1     | $\{0, 1\}$                            |
| ...   | ...   | ...   | ... | ...       | ...   | ...                                   |
| 1     | 1     | 1     | ... | 1         | 0     | $\{0, 1\}$                            |
| 1     | 1     | 1     | ... | 1         | 1     | $\{0, 1\}$                            |

Funcțiile de n variabile sunt $2^{2^n}$.

### Tabelul complet pentru n=2

| $x_1$ | $x_2$ | $F_1(x_1, x_2)$ | $F_2(x_1, x_2)$ | $F_3(x_1, x_2)$ | $F_4(x_1, x_2)$ | $F_5(x_1, x_2)$ | $F_6(x_1, x_2)$ | $F_7(x_1, x_2)$ | $F_8(x_1, x_2)$ | $F_9(x_1, x_2)$ | $F_{10}(x_1, x_2)$ | $F_{11}(x_1, x_2)$ | $F_{12}(x_1, x_2)$ | $F_{13}(x_1, x_2)$ | $F_{14}(x_1, x_2)$ | $F_{15}(x_1, x_2)$ | $F_{16}(x_1, x_2)$ |
| ----- | ----- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | --------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| 0     | 0     | 0               | 0               | 0               | 0               | 0               | 0               | 0               | 0               | 1               | 1                  | 1                  | 1                  | 1                  | 1                  | 1                  | 1                  |
| 0     | 1     | 0               | 0               | 0               | 0               | 1               | 1               | 1               | 1               | 0               | 0                  | 0                  | 0                  | 1                  | 1                  | 1                  | 1                  |
| 1     | 0     | 0               | 0               | 1               | 1               | 0               | 0               | 1               | 1               | 0               | 0                  | 1                  | 1                  | 0                  | 0                  | 1                  | 1                  |
| 1     | 1     | 0               | 1               | 0               | 1               | 0               | 1               | 0               | 1               | 0               | 1                  | 0                  | 1                  | 0                  | 1                  | 0                  | 1                  |

#### Funcțiile echivalente:

- $F_1(x_1, x_2) = 0$ - [Tabel](/logica/tabele.md?expression=X1%3B%0AX2%3B%0A0)
- $F_2(x_1, x_2) = x_1 \land x_2$ - [Tabel](/logica/tabele.md?expression=X1+and+X2)
- $F_3(x_1, x_2) = x_1 \land \overline{x_2}$ - [Tabel](/logica/tabele.md?expression=X1+and+not+X2)
- $F_4(x_1, x_2) = x_1 = x_1 \land (x_2 \lor \overline{x_2})$ - [Tabel](/logica/tabele.md?expression=X1+and+%28X2+or+not+X2%29)
- $F_5(x_1, x_2) = \overline{x_1} \land x_2$ - [Tabel](/logica/tabele.md?expression=not+X1+and+X2)
- $F_6(x_1, x_2) = x_2 = x_2 \land (x_1 \lor \overline{x_1})$ - [Tabel](/logica/tabele.md?expression=%28X1+or+not+X1%29+and+X2)
- $F_7(x_1, x_2) = x_1 \oplus x_2$ - [Tabel](/logica/tabele.md?expression=X1+xor+X2)
- $F_8(x_1, x_2) = x_1 \lor x_2$ - [Tabel](/logica/tabele.md?expression=X1+or+X2)
- $F_9(x_1, x_2) = x_1 \downarrow x_2$ - [Tabel](/logica/tabele.md?expression=X1+nor+X2)
- $F_{10}(x_1, x_2) = x_1 \leftrightarrow x_2$ - [Tabel](/logica/tabele.md?expression=X1+iff+X2)
- $F_{11}(x_1, x_2) = \overline{x_2} = (x_1 \lor \overline{x_1}) \land \overline{x_2}$ - [Tabel](/logica/tabele.md?expression=%28X1+or+not+X1%29+and+not+X2)
- $F_{12}(x_1, x_2) = x_1 \lor \overline{x_2}$ - [Tabel](/logica/tabele.md?expression=X1+or+not+X2)
- $F_{13}(x_1, x_2) = \overline{x_1} = \overline{x_1} \land (x_2 \lor \overline{x_2})$ - [Tabel](/logica/tabele.md?expression=not+X1+and+%28X2+or+not+X2%29)
- $F_{14}(x_1, x_2) = x_1 \rightarrow x_2$ - [Tabel](/logica/tabele.md?expression=X1+implies+X2)
- $F_{15}(x_1, x_2) = x_1 \vert x_2$ - [Tabel](/logica/tabele.md?expression=X1+nand+X2)
- $F_{16}(x_1, x_2) = 1$ - [Tabel](/logica/tabele.md?expression=X1%3B%0AX2%3B%0A1)

## Forma normală disjunctivă perfectă

Forma normală disjunctivă perfectă pentru formula $F(X_1, X_2, \ldots, X_n)$ care depinde de $n$ variabile se numește forma ei normală disjunctivă care posedă următoarele proprietăți:

1. Nu conține două conjuncții elementare identice
2. Fiecare variabilă propozițională $X_i$ $(i = 1 \ldots n)$ se include numai o singură dată (cu sau fără negație) în fiecare conjuncție elementară

### Exemplu 1

$$
(X_1 \land \overline{X_2}) \lor (X_1 \land X_2)
\newline
\text{deja perfectă}
$$

### Exemplu 2

$$
(X_1 \land \overline{X_2}) \lor (X_1 \land X_2) \lor (X_1 \land \overline{X_1})
\newline
\text{Deoarece}
\newline
X_1 \land \overline{X_1} \equiv 0
\text{ și }
F \lor 0 \equiv F
\newline
\text{rezultă}
\newline
(X_1 \land \overline{X_2}) \lor (X_1 \land X_2)
$$

## Forma normală conjunctivă perfectă

Forma normală conjunctivă perfectă pentru formula $F(X_1, X_2, \ldots, X_n)$ care depinde de $n$ variabile se numește forma ei normală conjunctivă care posedă următoarele proprietăți:

1. Nu conține două disjuncții elementare identice.
2. Fiecare variabilă propozițională $X_i$ $(i = 1 \ldots n)$ se include numai o singură dată (cu sau fără negație) în fiecare disjuncție elementară.

### Exemplu 1

$$
(X_1 \lor \overline{X_2}) \land (X_1 \lor X_2)
\newline
\text{deja perfectă}
$$

### Exemplu 2

$$
(X_1 \lor \overline{X_2}) \land (X_1 \lor X_2) \land (X_1 \lor \overline{X_1})
\newline
\text{Deoarece}
\newline
(X_1 \lor \overline{X_1}) \equiv 1
\text{ și }
F \land 1 \equiv F
\newline
\text{rezultă}
\newline
(X_1 \lor \overline{X_2}) \land (X_1 \lor X_2).
$$

## Teorema 2

Pentru orice formulă care **nu** este identic adevărată există **o singură** formă normală conjunctivă perfectă.  
Dacă formula este identic falsă, atunci există $2^n$ forme normale conjunctive perfecte.

**Demonstrație:**

- **Unicitatea** rezultă din construcția formei normale conjunctive:

  1. Enumerăm toate conjuncțiile elementare care _anulează_ (dau valoarea 0 pentru) formula.
  2. Fiecare astfel de conjuncție (când este negată) generează o disjuncție care intră în produsul final.
  3. Fiind _perfectă_, fiecare disjuncție include exact o singură dată fiecare variabilă, fie neagată, fie neneagată.
  4. Orice altă formă ce ar încerca să redea aceeași funcție logică ar trebui să conțină aceleași disjuncții (în altă ordine eventual), deci rezultă _unicitatea_.

- **Existența a $2^n$ forme** pentru cazul identic fals (0 pentru _toate_ valuările) se vede din faptul că:  
  $$ 0 \equiv (X_1 \land \overline{X_1}) \land (X_2 \land \overline{X_2}) \land \dots \land (X_n \land \overline{X_n}) $$  
  Aici fiecare disjuncție elementară poate fi aleasă cu sau fără negare pentru fiecare variabilă, rezultând $2^n$ modalități de a scrie un produs de disjuncții elementare care _contrazice_ orice interpretare.

## Teorema 3

Pentru orice formulă care **nu** este identic falsă există **o singură** formă normală disjunctivă perfectă.  
Dacă formula este identic adevărată, atunci există $2^n$ forme normale disjunctive perfecte.

**Demonstrație:**

- **Unicitatea** formei normale disjunctive perfecte provine analog de la construcția prin _extinderea_ (disjuncțiilor) asupra tuturor valuărilor care _satisfac_ (dau valoarea 1 pentru) formula:

  1. Pentru fiecare valuare care face formula 1, definim o conjuncție elementară în care fiecare variabilă apare exact o dată (cu sau fără negație, în funcție de valoarea respectivă).
  2. Aceste conjuncții, reunite prin _sau_ ($\lor$), formează forma normală disjunctivă.
  3. Fiind _perfectă_, fiecare conjuncție conține toate variabilele o singură dată. Orice altă formă echivalentă trebuie să aibă exact aceleași conjuncții elementare, deci forma perfectă este unică.

- **Existența a $2^n$ forme** pentru cazul identic adevărat (1 pentru _toate_ valuările) se deduce deoarece se pot alege _toate_ conjuncțiile elementare posibile (cu sau fără negare pentru fiecare variabilă) — fiecare conjuncție este în mod independent adevărată pentru toate interpretările, generând $2^n$ posibile forme disjunctive perfecte echivalente cu tautologia $1$.
