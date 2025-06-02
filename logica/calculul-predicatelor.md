# Calculul predicatelor

## Introducere în calculul predicatelor

**Calculul predicatelor** reprezintă un sistem formal care extinde [calculul propozițional](./calculul-propozitiilor.md) pentru a permite analiza logică a structurilor mai complexe. În timp ce calculul propozițional se ocupă doar cu relațiile dintre propoziții atomice, calculul predicatelor poate analiza relațiile dintre obiecte și proprietățile acestora.

## Alfabetul calculului predicatelor

### Simboluri logice

- **Conectorii**: $\land$ (conjuncția), $\lor$ (disjuncția), $\rightarrow$ (implicația), $\overline{\phantom{A}}$ (negația)
- **Cuantificatorii**: $\forall$ (pentru orice), $\exists$ (există)
- **Simboluri auxiliare**: paranteză stânga $($ și paranteză dreapta $)$

### Simboluri descriptive

- **Variabilele individuale**: $x, y, z, x_1, x_2, \ldots$
- **Constantele individuale**: $a, b, c, a_1, a_2, \ldots$
- **Simbolurile funcțiilor**: $f, g, h, f_1, f_2, \ldots$
- **Simbolurile predicatelor**: $P, Q, R, P_1, P_2, \ldots$

## Termenii

**Definiție**: Termenii se definesc inductiv:

1. Fiecare variabilă individuală este un termen
2. Fiecare constantă individuală este un termen
3. Dacă $f$ este un simbol de funcție cu $n$ argumente și $t_1, t_2, \ldots, t_n$ sunt termeni, atunci $f(t_1, t_2, \ldots, t_n)$ este un termen
4. Nimic altceva nu este termen

## Formulele atomice

**Definiție**: Dacă $P$ este un simbol de predicat cu $n$ argumente și $t_1, t_2, \ldots, t_n$ sunt termeni, atunci $P(t_1, t_2, \ldots, t_n)$ este o **formulă atomică**.

## Formulele calculului predicatelor

**Definiție inductivă**: Formulele se definesc astfel:

1. Fiecare formulă atomică este o formulă
2. Dacă $A$ este o formulă, atunci $\overline{A}$ este o formulă
3. Dacă $A$ și $B$ sunt formule, atunci $(A \land B)$, $(A \lor B)$, $(A \rightarrow B)$ sunt formule
4. Dacă $A$ este o formulă și $x$ este o variabilă, atunci $\forall x A$ și $\exists x A$ sunt formule
5. Nimic altceva nu este formulă

## Axiomele calculului predicatelor

Calculul predicatelor se bazează pe toate [axiomele calculului propozițional](./axiomele-calculului-propozitional.md) plus axiome specifice pentru cuantificatori.

### Axiomele pentru cuantificatorul universal

**Axioma Q1**: $\forall x A(x) \rightarrow A(t)$

- unde $t$ este un termen liber pentru $x$ în $A(x)$
- **Interpretarea**: Dacă o proprietate este adevărată pentru toate obiectele, atunci este adevărată pentru orice obiect specific

**Axioma Q2**: $A \rightarrow \forall x A$

- unde $x$ nu apare liberă în $A$
- **Interpretarea**: Dacă o afirmație nu depinde de $x$, atunci este adevărată pentru orice valoare a lui $x$

### Axiomele pentru cuantificatorul existențial

**Axioma Q3**: $A(t) \rightarrow \exists x A(x)$

- unde $t$ este un termen liber pentru $x$ în $A(x)$
- **Interpretarea**: Dacă o proprietate este adevărată pentru un obiect specific, atunci există cel puțin un obiect pentru care este adevărată

**Axioma Q4**: $\exists x A \rightarrow A$

- unde $x$ nu apare liberă în $A$
- **Interpretarea**: Dacă există un obiect cu proprietatea $A$ și $A$ nu depinde de $x$, atunci $A$ este adevărată

## Regulile de deducție

### Modus Ponens

Regula fundamentală din calculul propozițional:
$$\frac{A, \quad A \rightarrow B}{B}$$

### Regula generalizării universale (R.G.U.)

$$\frac{A(x)}{∀x A(x)}$$

- cu condiția că $x$ nu apare în nicio ipoteză din care s-a dedus $A(x)$

### Regula particularizării existențiale (R.P.E.)

$$\frac{\exists x A(x), \quad A(a) \rightarrow B}{B}$$

- unde $a$ este o constantă nouă (care nu apare în $\exists x A(x)$, $B$, sau în ipotezele din care s-au dedus)

## Concepte fundamentale

### Substituția în termeni

**Definiție**: Substituția unui termen $t$ pentru variabila $x$ în termenul $s$, notată $s[x/t]$, se definește:

- $x[x/t] = t$
- $y[x/t] = y$ (dacă $y \neq x$)
- $f(s_1, \ldots, s_n)[x/t] = f(s_1[x/t], \ldots, s_n[x/t])$

### Substituția în formule

Pentru formula $A$ și termenul $t$:

- $P(s_1, \ldots, s_n)[x/t] = P(s_1[x/t], \ldots, s_n[x/t])$
- $(\overline{A})[x/t] = \overline{A[x/t]}$
- $(A \land B)[x/t] = A[x/t] \land B[x/t]$
- $(\forall y A)[x/t] = \forall y (A[x/t])$ dacă $y \neq x$ și $y$ nu apare în $t$

### Termenul liber pentru substituție

**Definiție**: Termenul $t$ este **liber pentru variabila $x$** în formula $A$ dacă nicio variabilă din $t$ nu devine legată după substituția $x$ cu $t$ în $A$.

## Exemple de demonstrații

### Exemplu 1: Proprietatea reflexivității

**Teoremă**: $\vdash \forall x (x = x)$

**Demonstrație**:

1. Axioma identității: $a = a$ (pentru orice constantă $a$)
2. R.G.U.: $\forall x (x = x)$

### Exemplu 2: Legătura dintre cuantificatori

**Teoremă**: $\vdash \forall x A(x) \rightarrow \exists x A(x)$ (cu condiția că domeniul nu este vid)

**Demonstrație**:

1. $\forall x A(x)$ (ipoteză)
2. Q1: $\forall x A(x) \rightarrow A(a)$ (pentru constanta $a$)
3. M.P. (1,2): $A(a)$
4. Q3: $A(a) \rightarrow \exists x A(x)$
5. M.P. (3,4): $\exists x A(x)$
6. Aplicăm [teorema deducției](./teorema-deductiei.md): $\vdash \forall x A(x) \rightarrow \exists x A(x)$

## Teoreme importante

### Teorema distributivității cuantificatorului universal

$$\vdash \forall x (A(x) \land B(x)) \leftrightarrow (\forall x A(x) \land \forall x B(x))$$

### Teorema distributivității parțiale a cuantificatorului existențial

$$\vdash (\exists x A(x) \lor \exists x B(x)) \rightarrow \exists x (A(x) \lor B(x))$$

**Observație**: Implicația inversă nu este în general adevărată.

## Relația cu logica predicatelor

Calculul predicatelor formalizează [logica predicatelor](./logica-predicatelor.md) prin:

- **Sintaxă precisă**: Reguli exacte pentru formarea formulelor
- **Axiome explicite**: Principii fundamentale acceptate fără demonstrație
- **Reguli de inferență**: Metode precise pentru deducerea noilor formule
- **Sistematizare**: Organizarea logică a cunoștințelor

## Proprietăți metalogice

### Corectitudinea (Soundness)

**Proprietate**: Dacă o formulă este demonstrabilă în calculul predicatelor, atunci ea este logically valid.
$$\text{Dacă } \vdash A, \text{ atunci } \models A$$

### Completitudinea (Completeness)

**Proprietate**: Dacă o formulă este logically valid, atunci ea este demonstrabilă în calculul predicatelor.
$$\text{Dacă } \models A, \text{ atunci } \vdash A$$

### Consistența

**Proprietate**: Nu există o formulă $A$ astfel încât să avem simultan $\vdash A$ și $\vdash \overline{A}$.

## Importanța calculului predicatelor

Calculul predicatelor este fundamental pentru:

1. **Fundamentarea matematicii**: Majoritatea teoriilor matematice pot fi formalizate în calculul predicatelor
2. **Logica computațională**: Baza pentru programarea logică și sistemele expert
3. **Verificarea formală**: Instrumentul principal pentru demonstrarea corectitudinii programelor
4. **Inteligența artificială**: Reprezentarea cunoștințelor și raționamentul automat

Calculul predicatelor reprezintă o realizare majoră în formalizarea raționamentului uman și continuă să fie instrumentul central al logicii moderne.
