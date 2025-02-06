# Forme normale. Rezolvarea problemei deciziei cu ajutorul formei normale.

Problema deciziei constă în următoarele: Având o formulă $F(x_1, x_2, …, x_n)$ să determinăm o metodă efectivă (un algoritm unic) care să ne depisteze dacă formula dată este [identic adevărată](./algebra-propozitiilor.md#identic-adevarat), [identic falsă](./algebra-propozitiilor.md#identic-fals) sau [realizabilă](./algebra-propozitiilor.md#realizabil). În cazul în care formula dată conține puține variabile putem efectua tabela de valor a formulei. Iar în cazul în care avem un număr mai mare de variabile – vom încerca să folosim metodele algebrei propoziționale. Pentru asta avem nevoie de următoarele definiții:

## Conjuncție elementară {#conjunctie-elementara}

[Conjuncția](./algebra-propozitiilor.md#and) unor variabile sau [negații](./algebra-propozitiilor.md#not) de variabile se numește conjuncție elementară.

### Exemple

$$
A \land B
\newline
\overline{A} \land B
\newline
A \land \overline{B} \land \overline{C}
$$

### Exemple care <ins>nu sunt</ins> conjuncții elementare

$$
\overline{A \land B}
\newline
\overline{A} \land \overline{A \land B}
$$

## Disjuncție elementară {#disjunctie-elementara}

[Disjuncția](./algebra-propozitiilor.md#or) unor variabile sau [negații](./algebra-propozitiilor.md#not) de variabile se numește disjuncție elementară.

### Exemple

$$
A \lor B
\newline
\overline{A} \lor B
\newline
A \lor \overline{B} \lor \overline{C}
$$

### Exemple care <ins>nu sunt</ins> disjuncții elementare

$$
\overline{A \lor B}
\newline
\overline{A} \lor \overline{A \lor B}
$$

## Teorema 1 {#teorema-1}

O [conjuncție elementară](#conjunctie-elementara) este [identic falsă](./algebra-propozitiilor.md#identic-fals) atunci și numai atunci când ea conține cel puțin o variabilă împreună cu [negația](./algebra-propozitiilor.md#not) ei.

### Exemple

$$
A \land \overline{A} \equiv 0
\newline
A \land B \land \overline{B} \equiv 0
\newline
A \land B \land C \land \overline{A} \equiv 0
$$

$$
A \land B \land \overline{C} \land D \land \overline{E} \not\equiv 0
\newline
\text{A,B,D=1, C,E=0}
$$

## Teorema 2 {#teorema-2}

O [disjuncție elementară](#disjunctie-elementara) este [identic adevărată](identic-adevarat) atunci și numai atunci când ea conține cel puțin o variabilă împreună cu [negația](./algebra-propozitiilor.md#not) ei.

### Exemple

$$
A \lor \overline{A} \equiv 1
\newline
A \lor B \lor \overline{B} \equiv 1
\newline
A \lor B \lor C \lor \overline{A} \equiv 1
$$

$$
A \lor B \lor \overline{C} \lor D \lor \overline{E} \not\equiv 1
\newline
\text{A,B,D=0, C,E=1}
$$

## Forma normală disjunctivă {#forma-normala-disjunctiva}

Formula echivalentă formulei date care reprezintă disjuncția unor [conjuncții elementare](#conjunctie-elementara) se numește formă normală disjunctivă.

## Forma normală conjunctivă {#forma-normala-conjunctiva}

Formula echivalentă formulei date care reprezintă conjuncția unor [disjuncții elementare](#disjunctie-elementara) se numește formă normală conjunctivă.

## Teorema 3 {#teorema-3}

Pentru orice formulă $F$ există echivalenta sa [formă normală disjunctivă](#forma-normala-disjunctiva) și [formă normală conjunctivă](#forma-normala-conjunctiva).

## Echivalențe

$$
F \rightarrow G \equiv \overline{F} \lor G
\newline
\overline{A \land B} \equiv \overline{A} \lor \overline{B} \quad \text{(negația conjuncției este disjuncția negațiilor)}
\newline
\overline{A \lor B} \equiv \overline{A} \land \overline{B} \quad \text{(negarea disjuncției este conjuncția negațiilor)}
\newline
F \leftrightarrow G \equiv (F \rightarrow G) \land (G \rightarrow F)
\newline
F \land (G \lor K) \equiv (F \land G) \lor (F \land K) \quad \text{(legea distributivă a conjuncției față de disjuncției)}
\newline
F \lor (G \land K) \equiv (F \lor G) \land (F \lor K) \quad \text{(legea distributivă a disjuncției față de conjuncției)}
\newline
F \land F \equiv F
\newline
F \lor F \equiv F
$$

### Observație

Orice formulă sau [negația](./algebra-propozitiilor.md#not) ei poate fi tratată ca [conjuncție elementară](#conjunctie-elementara) cât și [disjuncție elementară](#disjunctie-elementara).
