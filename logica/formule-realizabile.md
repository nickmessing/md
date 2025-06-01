# Formule realizabile

## Definiția realizabilității

**Definiție**: Formula $U$ o vom numi **realizabilă** pe domeniul $\mathfrak{M}$ dacă există astfel de predicate concrete, propoziții concrete și obiecte concrete din mulțimea $\mathfrak{M}$ astfel încât, după înlocuirea predicatelor variabile și a propozițiilor variabile prin predicate și propoziții concrete, precum și a obiectelor variabile prin obiecte concrete din mulțimea $\mathfrak{M}$, formula $U$ se transformă într-o propoziție adevărată.

## Formule nerealizabile

**Definiție**: Formula se numește **nerealizabilă** pe mulțimea $\mathfrak{M}$ dacă la orice înlocuire a tuturor variabilelor cu obiecte concrete din $\mathfrak{M}$ ea nu poate primi valoarea de adevăr. Se mai numesc **identic false**.

## Problema realizabilității

**Problema realizabilității** constă în următoarele:

**Enunț**: De arătat astfel o metodă efectivă unică (algoritm unic) de stabilire pentru orice formulă dacă este ea realizabilă sau nu.

Rezolvând această problemă, noi astfel am putea răspunde la întrebarea: "Este oare o formulă identic adevărată sau nu?"

### Diferențe între logica propozițională și logica predicatelor

1. **Logica propozițională**: Problema realizabilității nu întâmpină nicio greutate
   - Există algoritmi efectivi (tabele de adevăr)
   - Problema este **decidabilă**

2. **Logica predicatelor**: Aceeași problemă întâmpină greutăți serioase
   - **Demonstrat** că nu există algoritm general
   - Problema este **nedecidabilă** (irezolvabilă)

## Tipuri de realizabilitate

### 1. Realizabilitate pe un domeniu finit

Pentru domenii finite $\mathfrak{M} = \{a_1, a_2, \ldots, a_n\}$, problema devine mai simplă:

- Cuantificatorii se pot "dezvolta":
  - $\forall x P(x) \equiv P(a_1) \land P(a_2) \land \ldots \land P(a_n)$
  - $\exists x P(x) \equiv P(a_1) \lor P(a_2) \lor \ldots \lor P(a_n)$

- Rezultă o formulă din logica propozițională
- Problema devine **decidabilă**

### 2. Realizabilitate pe domenii infinite

Pentru domenii infinite, situația se complică:
- Nu putem "dezvolta" cuantificatorii
- Problema devine **nedecidabilă** în general

## Exemple de analiză

### Exemplu 1: Formulă realizabilă

**Formula**: $\exists x P(x)$

**Analiză**: 
- Pe orice domeniu negoI $\mathfrak{M}$, dacă definim predicatul $P$ astfel încât $P(a) = 1$ pentru cel puțin un element $a \in \mathfrak{M}$, formula devine adevărată
- **Concluzie**: Formula este **realizabilă**

### Exemplu 2: Formulă nerealizabilă

**Formula**: $\exists x \forall y (Q(x,y) \land \overline{Q(x,y)})$

**Analiză**:
- Pentru orice alegere a obiectelor și predicatului $Q$, expresia $Q(x,y) \land \overline{Q(x,y)}$ este mereu falsă
- Prin urmare, $\forall y (Q(x,y) \land \overline{Q(x,y)})$ este mereu falsă
- Deci $\exists x \forall y (Q(x,y) \land \overline{Q(x,y)})$ este mereu falsă
- **Concluzie**: Formula este **nerealizabilă**

### Exemplu 3: Dependența de domeniu

**Formula**: $\forall x \exists y (x \neq y)$

**Analiză**:
- Pe domeniul $\mathfrak{M} = \{a\}$ (un element): Falsă, pentru $x = a$ nu există $y \neq a$
- Pe domeniul $\mathfrak{M} = \{a, b\}$ (două elemente): Adevărată, pentru orice $x$ există $y \neq x$
- **Concluzie**: Realizabilitatea **depinde de domeniu**

## Metode parțiale de analiză

Deși problema generală este nedecidabilă, există metode parțiale:

### 1. Metoda modelelor finite

Pentru formule simple, verificăm pe domenii finite mici:
- Dacă găsim un model finit, formula este realizabilă
- Dacă nu găsim, nu putem concluziona nimic definitiv

### 2. Metoda contradictiilor

Căutăm contradicții evidente:
- Dacă formula conține subformule de forma $P \land \overline{P}$, este nerealizabilă
- Aplicăm transformări logice pentru a identifica contradicții

### 3. Analiza structurală

Analizăm structura cuantificatorilor:
- Formule cu alternanțe complexe de cuantificatori sunt mai greu de analizat
- Formule cu cuantificatori doar de un tip sunt mai simple

## Clase decidabile speciale

Există clase speciale de formule pentru care problema este decidabilă:

### 1. Formule monadice

Formule care conțin doar predicate cu un argument:
- $\forall x (P(x) \rightarrow Q(x))$
- Problema este **decidabilă**

### 2. Formule fără funcții

Formule care nu conțin simboluri de funcții:
- Anumite subclase sunt decidabile
- Depend de structura cuantificatorilor

### 3. Formule Horn

Formule cu structură specifică în logica predicatelor:
- Utilizate în programarea logică
- Satisfiabilitatea este decidabilă

## Importanța teoretică

Nedecidabilitatea problemei realizabilității în logica predicatelor:

1. **Limitează automarea**: Nu putem avea algoritmi completi pentru demonstrație
2. **Motivează cercetarea**: Căutarea de metode parțiale eficiente
3. **Influențează designul**: Limbajelor de programare logică și sistemelor expert

## Relația cu completitudinea

- **Completitudinea semantică**: Tot ce este realizabil poate fi demonstrat
- **Nedecidabilitatea**: Nu există algoritm pentru a verifica realizabilitatea
- **Paradoxul**: Putem demonstra tot ce este adevărat, dar nu putem decide ce este adevărat

Această situație evidențiază distincția fundamentală între **demonstrabilitate** și **decidabilitate** în logica predicatelor.
