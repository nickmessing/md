# Teorema Deducției

## Deducția Formală

Fie $\Gamma = \{A_1, A_2, \ldots, A_m\}$ o mulțime (listă) finită de formule din [calculul propozițional](./calculul-propozitiilor.md).

**Definiție**: Spunem că formula $B$ se **deduce** din lista $\Gamma$ (notat $\Gamma \vdash B$) dacă există un șir finit de formule $B_1, B_2, \ldots, B_n$ astfel încât:

1.  $B_n$ este identică cu $B$.
2.  Pentru fiecare $i$ ($1 \le i \le n$), formula $B_i$ satisface una dintre următoarele condiții:
    - $B_i$ este o [axiomă](./axiomele-calculului-propozitional.md).
    - $B_i$ aparține listei $\Gamma$ (adică $B_i \in \Gamma$).
    - $B_i$ se obține din două formule precedente $B_j, B_k$ (unde $j, k < i$) prin regula [Modus Ponens](./calculul-propozitiilor.md#2-modus-ponens-mp) (adică $B_k = B_j \rightarrow B_i$).
    - $B_i$ se obține dintr-o formulă precedentă $B_j$ (unde $j < i$) prin [Regula Substituției](./calculul-propozitiilor.md#1-regula-substituției-rs). _(Notă: În multe sisteme axiomatice moderne, substituția nu este o regulă de deducție, ci o metaregulă sau este implicită în schemele de axiome.)_.

Șirul $B_1, B_2, \ldots, B_n$ se numește **deducția** formulei $B$ din ipotezele $\Gamma$.

Dacă $\Gamma$ este mulțimea vidă ($\Gamma = \emptyset$), scriem $\vdash B$, înțelegând că $B$ se deduce doar din axiome folosind regulile de deducție. O astfel de formulă $B$ se numește **teoremă** a calculului propozițional.

**Exemplu**: $\{A, A \rightarrow B\} \vdash B$. Deducția este șirul: $A, A \rightarrow B, B$.

- $A$ este în $\Gamma$.
- $A \rightarrow B$ este în $\Gamma$.
- $B$ se obține prin Modus Ponens din $A$ și $A \rightarrow B$.

**Teoremă**:

<div id="a-implica-a">

$$
\begin{align}
  \vdash A \rightarrow A
\end{align}
$$

</div>

**Demonstrație**:

$$
\begin{align}
  \href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1}
  &:
  A \rightarrow (B \rightarrow A)
  \nonumber \\
  \href{/logica/axiomele-calculului-propozitional#axioma-i2}{I.2}
  &:
  (A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))
  \nonumber \\
  S_B^{A \rightarrow A}
  (\href{/logica/axiomele-calculului-propozitional#axioma-i2}{I.2})
  &\vdash
  (A \rightarrow ((A \rightarrow A) \rightarrow C))
  \rightarrow
  ((A \rightarrow (A \rightarrow A)) \rightarrow (A \rightarrow C))
  \\
  S_C^A
  (2)
  &\vdash
  (A \rightarrow ((A \rightarrow A) \rightarrow A))
  \rightarrow
  ((A \rightarrow (A \rightarrow A)) \rightarrow (A \rightarrow A))
  \\
  S_B^{A \rightarrow A}
  (\href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1})
  &\vdash
  A \rightarrow ((A \rightarrow A) \rightarrow A)
  \\
  MP((4), (3))
  &\vdash
  (A \rightarrow (A \rightarrow A)) \rightarrow (A \rightarrow A)
  \\
  S_B^A
  (\href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1})
  &\vdash
  A \rightarrow (A \rightarrow A)
  \\
  MP((6), (5))
  &\vdash
  A \rightarrow A
  \nonumber
\end{align}
$$

Astfel, am dedus $A \rightarrow A$ folosind doar axiomele RS și MP.

## Teorema Deducției

**Enunț**: Dacă formula $B$ poate fi dedusă din lista de ipoteze $\Gamma$ la care se adaugă formula $A$, atunci formula $A \rightarrow B$ poate fi dedusă doar din lista $\Gamma$.
Formal:

$$
\text{Dacă } \{\Gamma, A\} \vdash B, \text{ atunci } \Gamma \vdash A \rightarrow B.
$$

**Demonstrație (schiță prin inducție după lungimea deducției)**:
Fie $B_1, B_2, \ldots, B_n$ deducția lui $B$ ($B_n=B$) din $\{\Gamma, A\}$. Vom arăta prin inducție după $k$ ($1 \le k \le n$) că $\Gamma \vdash A \rightarrow B_k$.

- **Baza inducției (k=1)**: $B_1$ este prima formulă în deducție. Avem 3 cazuri posibile pentru $B_1$:

  1.  $B_1$ este o axiomă.
  2.  $B_1 \in \Gamma$.
  3.  $B_1$ este $A$.

  În cazurile 1 și 2:

  $$
  \begin{align}
    S_A^{B_1}
    (\href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1})
    &\vdash
    B_1 \rightarrow (B \rightarrow B_1)
    \\
    S_B^{A}
    ((7))
    &\vdash
    B_1 \rightarrow (A \rightarrow B_1)
    \\
    \text{Deoarece } B_1 \text{ este axiomă sau } B_1 \in \Gamma \text{, aplicăm MP:}
    \nonumber \\
    \Gamma
    &\vdash
    A \rightarrow B_1
    \nonumber
  \end{align}
  $$

  În cazul 3 ($B_1 = A$): Trebuie să arătăm $\Gamma \vdash A \rightarrow A$. Aceasta este Teorema 1 menționată mai sus, care se poate deduce din axiome (deci din $\Gamma$).

- **Pasul inductiv**: Presupunem că $\Gamma \vdash A \rightarrow B_i$ pentru toți $i < k$. Vrem să arătăm $\Gamma \vdash A \rightarrow B_k$. Analizăm cum a fost obținut $B_k$:

  1. $B_k$ este axiomă
  2. $B_k \in \Gamma$
  3. $B_k = A$
  4. $B_k = S (B_i)$ (substituție unde $i < k$)
  5. $B_k = MP(B_i, B_j)$ (Modus Ponens unde $i, j < k$)

În primele 3 cazuri, am arătat deja că $\Gamma \vdash A \rightarrow B_k$ în pasul $k=1$

În cazul 4, avem $B_k = S(B_i)$, unde $i < k$.

$$
\begin{align}
  \Gamma
  &\vdash
  A \rightarrow B_i
  \nonumber \\
  \Gamma
  &\vdash
  A \rightarrow S(B_i)
  \nonumber \\
  \Gamma
  &\vdash
  A \rightarrow B_k
  \nonumber
\end{align}
$$

În cazul 5, avem $B_k = MP(B_i, B_j)$, unde $i, j < k$. Atunci:

$$
\begin{align}
  \Gamma
  &\vdash
  A \rightarrow B_i
  \\
  \Gamma
  &\vdash
  A \rightarrow B_j
  \\
  \text{Deoarece } B_k
  &=
  MP(B_i, B_j)
  \nonumber \\
  \text{atunci }
  B_j
  &=
  B_i \rightarrow B_k
  \nonumber \\
  \text{Punem }
  \Gamma
  &\vdash
  A \rightarrow (B_i \rightarrow B_k)
  \\
  S_B^{B_i}
  (\href{/logica/axiomele-calculului-propozitional#axioma-i2}{I.2})
  &\vdash
  (A \rightarrow (B_i \rightarrow C)) \rightarrow ((A \rightarrow B_i) \rightarrow (A \rightarrow C))
  \\
  S_C^{B_k}
  ((12))
  &\vdash
  (A \rightarrow (B_i \rightarrow B_k)) \rightarrow ((A \rightarrow B_i) \rightarrow (A \rightarrow B_k))
  \\
  MP((11), (13)) \quad
  \Gamma
  &\vdash
  (A \rightarrow B_i) \rightarrow (A \rightarrow B_k)
  \\
  MP((9), (14)) \quad
  \Gamma
  &\vdash
  A \rightarrow B_k
  \nonumber
\end{align}
$$

Astfel, prin inducție, $\Gamma \vdash A \rightarrow B_n$, adică $\Gamma \vdash A \rightarrow B$.
