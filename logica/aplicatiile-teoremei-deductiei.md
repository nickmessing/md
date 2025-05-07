# Aplicațiile teoremei deducției. Regulile derivate de deducție.

## Cheatsheet

$$
R.S. \enspace \frac{A \rightarrow B, \enspace B \rightarrow C}{A \rightarrow C}
\newline \enspace \newline
R.T.I. \enspace \frac{A \rightarrow (B \rightarrow C)}{B \rightarrow (A \rightarrow C)}
\newline \enspace \newline
R.C.F. \enspace \frac{A, \enspace B}{A \land B}
\newline \enspace \newline
R.D.F. \enspace \frac{A \land B}{A, \enspace B}
\newline \enspace \newline
R.C.I. \enspace \frac{A \rightarrow (B \rightarrow C)}{(A \land B) \rightarrow C}
\newline \enspace \newline
R.D.I. \enspace \frac{(A \land B) \rightarrow C}{A \rightarrow (B \rightarrow C)}
$$

## Regula Silogismului (R.S.)

### Enunț:

Dacă $A \rightarrow B$ și $B \rightarrow C$, atunci $A \rightarrow C$.

### Schema regulii:

$$
R.S. \enspace \frac{A \rightarrow B, \enspace B \rightarrow C}{A \rightarrow C}
$$

### Demonstrație:

$$
\begin{align}
  \text{Luăm lista de formule:}
  \nonumber \\
  \{A \rightarrow B, B \rightarrow C, A\}
  \nonumber \\
  \{A \rightarrow B, B \rightarrow C, A\}
  \space
  MP(A, A \rightarrow B)
  &\vdash
  B
  \\
  \{A \rightarrow B, B \rightarrow C, A\}
  \space
  MP((1), B \rightarrow C)
  &\vdash
  C
  \\
  \text{Deci, }
  \nonumber \\
  \{A \rightarrow B, B \rightarrow C, A\}
  &\vdash
  C
  \\
  \text{Aplicăm teorema deducției:}
  \nonumber \\
  \{A \rightarrow B, B \rightarrow C\}
  &\vdash
  A \rightarrow C
\end{align}
$$

## Regula Transpoziției Ipotezilor (R.T.I.)

### Enunț:

Dacă $A \rightarrow (B \rightarrow C)$, atunci $B \rightarrow (A \rightarrow C)$.

### Schema regulii:

$$
R.T.I. \enspace \frac{A \rightarrow (B \rightarrow C)}{B \rightarrow (A \rightarrow C)}
$$

### Demonstrație:

$$
\begin{align}
  \text{Luăm lista de formule:}
  \nonumber \\
  \{A \rightarrow (B \rightarrow C), B, A\}
  \nonumber \\
  \{A \rightarrow (B \rightarrow C), B, A\}
  \space
  MP(A, A \rightarrow (B \rightarrow C))
  &\vdash
  B \rightarrow C
  \\
  \{A \rightarrow (B \rightarrow C), B, A\}
  \space
  MP(B, (7))
  &\vdash
  C
  \\
  \text{Deci, }
  \nonumber \\
  \{A \rightarrow (B \rightarrow C), B, A\}
  &\vdash
  C
  \\
  \text{Aplicăm teorema deducției:}
  \nonumber \\
  \{A \rightarrow (B \rightarrow C), B\}
  &\vdash
  A \rightarrow C
  \\
  \{A \rightarrow (B \rightarrow C)\}
  &\vdash
  B \rightarrow (A \rightarrow C)
\end{align}
$$

## Regula Conjuncției Formulelor

### Enunț:

Dacă $A$ și $B$, atunci $A \land B$.

### Schema regulii:

$$
R.C.F. \enspace \frac{A, \enspace B}{A \land B}
$$

### Demonstrație:

$$
\begin{align}
  \href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1}
  &:
  A \rightarrow (B \rightarrow A)
  \nonumber \\
  \href{/logica/axiomele-calculului-propozitional#axioma-ii3}{II.3}
  &:
  (A \rightarrow B) \rightarrow ((A \rightarrow C) \rightarrow (A \rightarrow (B \land C)))
  \nonumber \\
  &\vdash
  \href{/logica/teorema-deductiei#a-implica-a}{A \rightarrow A}
  \\
  S_A^B, S_B^A, S_C^B
  (\href{/logica/axiomele-calculului-propozitional#axioma-ii3}{II.3})
  &\vdash
  (B \rightarrow A) \rightarrow ((B \rightarrow B) \rightarrow (B \rightarrow (A \land B)))
  \\
  R.S.
  (\href{/logica/axiomele-calculului-propozitional#axioma-i1}{I.1}, (11))
  &\vdash
  A \rightarrow ((B \rightarrow B) \rightarrow (B \rightarrow (A \land B)))
  \\
  R.T.I.
  ((12))
  &\vdash
  (B \rightarrow B) \rightarrow (A \rightarrow (B \rightarrow (A \land B)))
  \\
  S_A^B
  ((10))
  &\vdash
  B \rightarrow B
  \\
  M.P.
  ((14), (13))
  &\vdash
  A \rightarrow (B \rightarrow (A \land B))
  \\
  \text{Aplicăm teorema deducției:}
  \nonumber \\
  \{A\}
  &\vdash
  B \rightarrow (A \land B)
  \\
  \{A, B\}
  &\vdash
  A \land B
\end{align}
$$

## Regula Despărțirii Formulelor

### Enunț:

Dacă $A \land B$, atunci $A$ și $B$.

### Schema regulii:

$$
R.D.F. \enspace \frac{A \land B}{A, \enspace B}
$$

### Demonstrație:

$$
\begin{align}
  \href{/logica/axiomele-calculului-propozitional#axioma-ii1}{II.1}
  &:
  (A \land B) \rightarrow A
  \nonumber \\
  \href{/logica/axiomele-calculului-propozitional#axioma-ii2}{II.2}
  &:
  (A \land B) \rightarrow B
  \nonumber \\
  \text{Aplicăm teorema deducției:}
  \nonumber \\
  \{A \land B\}
  &\vdash
  A
  \\
  \{A \land B\}
  &\vdash
  B
\end{align}
$$

## Regula Conjuncției Ipotezelor

### Enunț:

Dacă $A \rightarrow (B \rightarrow C)$, atunci $(A \land B) \rightarrow C$.

### Schema regulii:

$$
R.C.I. \enspace \frac{A \rightarrow (B \rightarrow C)}{(A \land B) \rightarrow C}
$$

### Demonstrație:

$$
\begin{align}
  \text{Luăm lista de formule:}
  \nonumber \\
  \{A \rightarrow (B \rightarrow C), A \land B\}
  \nonumber \\
  \{A \rightarrow (B \rightarrow C), A \land B\}
  \enspace R.D.F. (A \land B)
  &\vdash
  A
  \\
  \{A \rightarrow (B \rightarrow C), A \land B\}
  \enspace R.D.F. (A \land B)
  &\vdash
  B
  \\
  \{A \rightarrow (B \rightarrow C), A \land B\}
  \enspace M.P.
  ((20), A \rightarrow (B \rightarrow C))
  &\vdash
  B \rightarrow C
  \\
  \{A \rightarrow (B \rightarrow C), A \land B\}
  \enspace M.P.
  ((21), (22))
  &\vdash
  C
  \\
  \text{Aplicăm teorema deducției:}
  \nonumber \\
  \{A \rightarrow (B \rightarrow C)\}
  &\vdash
  (A \land B) \rightarrow C
\end{align}
$$

## Regula Despărțirii Ipotezelor

### Enunț:

Dacă $(A \land B) \rightarrow C$, atunci $A \rightarrow (B \rightarrow C)$.

### Schema regulii:

$$
R.D.I. \enspace \frac{(A \land B) \rightarrow C}{A \rightarrow (B \rightarrow C)}
$$

### Demonstrație:

$$
\begin{align}
  \text{Luăm lista de formule:}
  \nonumber \\
  \{(A \land B) \rightarrow C, A, B\}
  \nonumber \\
  \{(A \land B) \rightarrow C, A, B\}
  \enspace R.C.F. (A, B)
  &\vdash
  A \land B
  \\
  \{(A \land B) \rightarrow C, A, B\}
  \enspace M.P.
  ((25), (A \land B) \rightarrow C)
  &\vdash
  C
  \\
  \text{Aplicăm teorema deducției:}
  \nonumber \\
  \{(A \land B) \rightarrow C, A\}
  &\vdash
  B \rightarrow C
  \\
  \{(A \land B) \rightarrow C\}
  &\vdash
  A \rightarrow (B \rightarrow C)
\end{align}
$$

## Regula Inversării

### Enunț:

Dacă $A \rightarrow B$, atunci $\overline{B} \rightarrow \overline{A}$.

### Schema regulii:

$$
R.I. \enspace \frac{A \rightarrow B}{\overline{B} \rightarrow \overline{A}}
$$

### Demonstrație:

$$
\begin{align}
  \href{/logica/axiomele-calculului-propozitional#axioma-iv3}{IV.3}
  &:
  (A \rightarrow B) \rightarrow (\overline{B} \rightarrow \overline{A})
  \nonumber \\
  \text{Aplicăm teorema deducției:}
  \nonumber \\
  \{A \rightarrow B\}
  &\vdash
  \overline{B} \rightarrow \overline{A}
\end{align}
$$
