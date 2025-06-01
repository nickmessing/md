# Formule echivalente. Teorema echivalenței

## Introducere

Reamintim că simbolul echivalenței (notat $\leftrightarrow$ sau $\leftrightarrows$) nu este simbol în calculul propozițional, dar se întrebuințează pentru prescurtarea acestei formule:

$$
A \leftrightarrow B \equiv (A \rightarrow B) \land (B \rightarrow A)
$$

**Definiție**: Vom spune că două formule $A$ și $B$ sunt **echivalente** în calculul propozițional dacă poate fi dedusă formula $A \leftrightarrow B$.

## Echivalența dublei negații

**Teoremă**: $\vdash \overline{\overline{A}} \leftrightarrow A$

### Demonstrație:

Pentru a demonstra echivalența, trebuie să arătăm că pot fi deduse ambele implicații: $\overline{\overline{A}} \rightarrow A$ și $A \rightarrow \overline{\overline{A}}$.

Conform [Regulii Conjuncției Formulelor](/logica/aplicatiile-teoremei-deductiei#regula-conjuncției-formulelor) și [axiomelor IV.1 și IV.2](/logica/axiomele-calculului-propozitional#grupa-iv-implicația-și-negația):

$$
\begin{align}
  \href{/logica/axiomele-calculului-propozitional#axioma-iv2}{IV.2}
  &:
  \overline{\overline{A}} \rightarrow A
  \\
  \href{/logica/axiomele-calculului-propozitional#axioma-iv1}{IV.1}
  &:
  A \rightarrow \overline{\overline{A}}
  \\
  R.C.F.
  ((1), (2))
  &\vdash
  (\overline{\overline{A}} \rightarrow A) \land (A \rightarrow \overline{\overline{A}})
  \\
  \text{Prin definiția echivalenței:}
  \nonumber \\
  &\vdash
  \overline{\overline{A}} \leftrightarrow A
\end{align}
$$

## Observație fundamentală

Orice două formule care pot fi deduse în calculul propozițional sunt echivalente.

**Proprietate**: Dacă $\vdash A$ și $\vdash B$, atunci $\vdash A \leftrightarrow B$.

### Demonstrație:

$$
\begin{align}
  \text{Dacă } \vdash A \text{ și } \vdash B, \text{ atunci:}
  \nonumber \\
  \href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1}
  &:
  A \rightarrow (B \rightarrow A)
  \nonumber \\
  MP(\vdash A, I.1)
  &\vdash
  B \rightarrow A
  \\
  S_A^B, S_B^A
  (\href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1})
  &:
  B \rightarrow (A \rightarrow B)
  \\
  MP(\vdash B, (6))
  &\vdash
  A \rightarrow B
  \\
  R.C.F.
  ((7), (5))
  &\vdash
  (A \rightarrow B) \land (B \rightarrow A)
  \nonumber \\
  &\vdash
  A \leftrightarrow B
  \nonumber
\end{align}
$$

## Teorema echivalenței

**Teoremă**: Fie $C$ o subformulă a formulei $U$ (notată $U(C)$). Dacă $\vdash B_1 \leftrightarrow B_2$, atunci $\vdash U(B_1) \leftrightarrow U(B_2)$.

**Forma prescurtată**:

$$
T.E. \quad \vdash (B_1 \leftrightarrow B_2) \rightarrow (U(B_1) \leftrightarrow U(B_2))
$$

### Demonstrație (prin inducție matematică)

Vom demonstra teorema prin **inducție matematică** după numărul de operații care se conține în $U(C)$.

#### Pasul de bază: numărul de operații = 0

În cazul când numărul de operații este 0, avem $U(C) = C$.

Prin urmare, trebuie să demonstrăm că $(B_1 \leftrightarrow B_2) \rightarrow (B_1 \leftrightarrow B_2)$, care este o tautologie evidentă.

#### Ipoteza de inducție

Presupunem că teorema echivalenței este adevărată pentru toate formulele care conțin nu mai mult decât $n$ operații.

#### Pasul de inducție: $n + 1$ operații

Fie că formula $U(C)$ conține $n + 1$ operații. Atunci ultima operație va fi una din: **conjuncția**, **disjuncția**, **implicația** sau **negația**.

De aceea, formula $U(C)$ are una din următoarele forme:

- $U_1(C) \land U_2(C)$
- $U_1(C) \lor U_2(C)$
- $U_1(C) \rightarrow U_2(C)$
- $\overline{U_1(C)}$

### Cazul negației

Pentru demonstrația completă, vom arăta cazul negației: $U(C) = \overline{U_1(C)}$.

Trebuie să demonstrăm că poate fi dedusă formula:

$$
(B_1 \leftrightarrow B_2) \rightarrow (\overline{U_1(B_1)} \leftrightarrow \overline{U_1(B_2)})
$$

Din ipoteza de inducție știm că:

$$
(*) \quad \vdash (B_1 \leftrightarrow B_2) \rightarrow (U_1(B_1) \leftrightarrow U_1(B_2))
$$

**Demonstrația**:

$$
\begin{align}
  S_A^{U_1(B_1)}, S_B^{U_1(B_2)}
  (\href{/logica/axiomele-calculului-propozitional#axioma-iv3}{IV.3})
  &\vdash
  (U_1(B_1) \rightarrow U_1(B_2)) \rightarrow (\overline{U_1(B_2)} \rightarrow \overline{U_1(B_1)})
  \\
  S_A^{U_1(B_2)}, S_B^{U_1(B_1)}
  (\href{/logica/axiomele-calculului-propozitional#axioma-iv3}{IV.3})
  &\vdash
  (U_1(B_2) \rightarrow U_1(B_1)) \rightarrow (\overline{U_1(B_1)} \rightarrow \overline{U_1(B_2)})
  \\
  S_A^{U_1(B_1) \rightarrow U_1(B_2)}, S_B^{U_1(B_2) \rightarrow U_1(B_1)}
  (\href{/logica/axiomele-calculului-propozitional#axioma-ii1}{II.1})
  &\vdash
  (U_1(B_1) \leftrightarrow U_1(B_2)) \rightarrow (U_1(B_1) \rightarrow U_1(B_2))
  \\
  R.S.
  ((*), (3))
  &\vdash
  (B_1 \leftrightarrow B_2) \rightarrow (U_1(B_1) \rightarrow U_1(B_2))
  \\
  S_A^{U_1(B_1) \rightarrow U_1(B_2)}, S_B^{U_1(B_2) \rightarrow U_1(B_1)}
  (\href{/logica/axiomele-calculului-propozitional#axioma-ii2}{II.2})
  &\vdash
  (U_1(B_1) \leftrightarrow U_1(B_2)) \rightarrow (U_1(B_2) \rightarrow U_1(B_1))
  \\
  R.S.
  ((*), (5))
  &\vdash
  (B_1 \leftrightarrow B_2) \rightarrow (U_1(B_2) \rightarrow U_1(B_1))
  \\
  R.S.
  ((4), (1))
  &\vdash
  (B_1 \leftrightarrow B_2) \rightarrow (\overline{U_1(B_2)} \rightarrow \overline{U_1(B_1)})
  \\
  R.S.
  ((6), (2))
  &\vdash
  (B_1 \leftrightarrow B_2) \rightarrow (\overline{U_1(B_1)} \rightarrow \overline{U_1(B_2)})
  \\
  S_A^{B_1 \leftrightarrow B_2}, S_B^{\overline{U_1(B_1)} \rightarrow \overline{U_1(B_2)}}, S_C^{\overline{U_1(B_2)} \rightarrow \overline{U_1(B_1)}}
  (R.C.F.)
  &\vdash
  (B_1 \leftrightarrow B_2) \rightarrow ((\overline{U_1(B_1)} \rightarrow \overline{U_1(B_2)}) \land (\overline{U_1(B_2)} \rightarrow \overline{U_1(B_1)}))
  \\
  M.P.
  ((7), (9))
  &\vdash
  (B_1 \leftrightarrow B_2) \rightarrow (\overline{U_1(B_1)} \leftrightarrow \overline{U_1(B_2)})
  \\
  M.P.
  ((8), (10))
  &\vdash
  (B_1 \leftrightarrow B_2) \rightarrow (\overline{U_1(B_1)} \leftrightarrow \overline{U_1(B_2)})
\end{align}
$$

## Consecințe ale teoremei echivalenței

Teorema echivalenței este fundamentală în calculul propozițional, deoarece ne permite să:

1. **Înlocuim** subformule echivalente în cadrul unor formule mai complexe
2. **Simplificăm** demonstrațiile prin utilizarea echivalențelor cunoscute
3. **Transformăm** formule în forme echivalente mai convenabile pentru anumite scopuri

### Exemplu de aplicare

Dacă știm că $\vdash A \leftrightarrow B$, atunci putem concluziona că:

- $\vdash (A \land C) \leftrightarrow (B \land C)$
- $\vdash (A \lor C) \leftrightarrow (B \lor C)$
- $\vdash (A \rightarrow C) \leftrightarrow (B \rightarrow C)$
- $\vdash (C \rightarrow A) \leftrightarrow (C \rightarrow B)$
- $\vdash \overline{A} \leftrightarrow \overline{B}$
