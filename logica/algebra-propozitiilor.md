<script setup lang="ts">
import FormulaRenderer from './components/FormulaRenderer.vue'
</script>

# Algebra propozițiilor.

Vom cerceta așa propoziții care pot fi adevărate sau false adică logica bivalentă.

### Notații

- Propoziția $P$ este adevărată, notată $P = 1$.
- Propoziția $P$ este falsă, notată $P = 0$.
- Propozițiile sunt notate cu litere mari, cu indici dacă este nevoie.

  $A, B, C, D_2, K_{12} \in \{0, 1\}$.

## Operații

Fie că avem propoziții $A$ și $B$. Vom defini următoarele operații:

### Conjuncția {#and}

În [constructor](./tabele.md?expression=A%20and%20B) `and`

Notată $A \land B$ sau $A \ \text{\&} \ B$.

Se numește conjuncție și este adevărată doar atunci când ambele propoziții sunt adevărate.

Se citește "A și B" sau "A în conjuncție cu B".

<FormulaRenderer expression="A and B" />

[Editor](./tabele.md?expression=A%20and%20B)

Poate fi interpretată ca $min(A, B)$.

### Disjuncția {#or}

În [constructor](./tabele.md?expression=A%20or%20B) `or`

Notată $A \lor B$.

Se numește disjuncție și este adevărată atunci când cel puțin una dintre propoziții este adevărată.

Se citește "A sau B" sau "A în disjuncție cu B".

<FormulaRenderer expression="A or B" />

[Editor](./tabele.md?expression=A%20or%20B)

Poate fi interpretată ca $max(A, B)$.

### Negarea {#not}

În [constructor](./tabele.md?expression=not%20A) `not`

Notată $\neg A$, $\overline{A}$ sau $\tilde{A}$.

Se numește negare și este adevărată atunci când propoziția este falsă.

Se citește "nu A" sau "negarea lui A".

<FormulaRenderer expression="not A" />

[Editor](./tabele.md?expression=not%20A)

### Implicația {#implies}

În [constructor](./tabele.md?expression=A%20implies%20B) `implies`

Notată $A \rightarrow B$.

Se numește implicație și este adevărată atunci când $A$ este falsă sau când $B$ este adevărată.

Se citește "dacă A atunci B" sau "A implică B".

<FormulaRenderer expression="A implies B" />

[Editor](./tabele.md?expression=A%20implies%20B)

Poate fi interpretată ca $\overline{A} \lor B$.

### Echivalența {#iff}

În [constructor](./tabele.md?expression=A%20iff%20B) `iff`

Notată $A \leftrightarrow B$.

Se numește echivalență și este adevărată doar atunci când ambele propoziții sunt adevărate sau ambele sunt false.

Se citește "A dacă și numai dacă B" sau "A echivalent cu B".

<FormulaRenderer expression="A iff B" />

[Editor](./tabele.md?expression=A%20iff%20B)

Poate fi interpretată ca $(\overline{A} \land \overline{B}) \lor (A \land B)$.

### Altele

- <span id="nand">$\overline{A \land B} = A \vert B$. În [constructor](./tabele.md?expression=A%20nand%20B) `nand`.</span>
- <span id="nor">$\overline{A \lor B} = A \downarrow B$. În [constructor](./tabele.md?expression=A%20nor%20B) `nor`.</span>
- <span id="xor">$\overline{A \leftrightarrow B} = A \oplus B$. În [constructor](./tabele.md?expression=A%20xor%20B) `xor`.</span>
- $A \lor \overline{A} \equiv 1$ - identic adevărată. În [constructor](./tabele.md?expression=1) `1`.
- $A \land \overline{A} \equiv 0$ - identic falsă. În [constructor](./tabele.md?expression=0) `0`.

<FormulaRenderer expression="A nand B, A nor B, A xor B, 1, 0, A or not A, A and not A" />

[Editor](./tabele.md?expression=A%20nand%20B,%20A%20nor%20B,%20A%20xor%20B,%201,%200,%20A%20or%20not%20A,%20A%20and%20not%20A)

#### Notă

Conjunția și disjuncția sunt comutative.

## Categorii

Propozițiile pot în una din 3 categorii:

- <span id="identic-adevarat">Identic adevărate: $A \equiv 1$.</span>
- <span id="identic-fals">Identic false: $A \equiv 0$.</span>
- <span id="realizabil">Formule realizabile: $(A \not\equiv 1) \land (A \not\equiv 0)$.</span>

## Formule identic egale

2 formule sunt identic egale dacă au aceeași valoare de adevăr pentru orice valoare a variabilelor.

- $F \equiv G$.
- $A \equiv \overline{\overline{A}}$.

## Regulile lui De Morgan

- $\overline{A \land B} = \overline{A} \lor \overline{B}$. (Negația conjuncției este disjuncția negațiilor.)
- $\overline{A \lor B} = \overline{A} \land \overline{B}$. (Negația disjuncției este conjuncția negațiilor.)
