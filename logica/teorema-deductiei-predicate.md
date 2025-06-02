# Teorema deducției în calculul predicatelor

## Introducere

**Teorema deducției** în [calculul predicatelor](./calculul-predicatelor.md) extinde [teorema deducției din calculul propozițional](./teorema-deductiei.md) pentru a include cuantificatorii. Această teoremă este fundamentală pentru simplificarea demonstrațiilor și pentru înțelegerea naturii deducției logice în logica de ordinul întâi.

## Enunțul teoremei deducției pentru calculul predicatelor

**Teorema**: Fie $\Gamma$ o mulțime de formule și $A$, $B$ formule în calculul predicatelor. Atunci:

$$\Gamma \cup \{A\} \vdash B \quad \text{dacă și numai dacă} \quad \Gamma \vdash A \rightarrow B$$

cu condiția că aplicarea regulii de generalizare universală asupra unei variabile din $A$ nu intervine în demonstrația lui $B$ din $\Gamma \cup \{A\}$.

## Condiția de restricție

### Explicația restricției

Restricția este necesară pentru a evita **generalizarea incorectă** asupra variabilelor care apar în ipoteze.

**Exemplu problematic**:

- Din $P(x) \vdash \forall x P(x)$ (prin R.G.U.)
- Nu putem deduce $\vdash P(x) \rightarrow \forall x P(x)$

**Motivul**: Variabila $x$ apare liberă în ipoteza $P(x)$, deci aplicarea R.G.U. asupra lui $x$ nu este permisă.

### Condiția precisă

Teorema deducției se aplică doar dacă în demonstrația lui $B$ din $\Gamma \cup \{A\}$:

- Nu se aplică regula generalizării universale asupra unei variabile care apare liberă în $A$
- Sau asupra unei variabile care apare liberă în formulele din $\Gamma$

## Demonstrația teoremei

### Sensul direct ($\Rightarrow$)

**Ipoteză**: $\Gamma \cup \{A\} \vdash B$ cu condițiile de restricție satisfăcute.

**De demonstrat**: $\Gamma \vdash A \rightarrow B$

**Demonstrația**: Se procedează prin inducție asupra lungimii demonstrației lui $B$ din $\Gamma \cup \{A\}$, similar cu [demonstrația din calculul propozițional](./teorema-deductiei.md), dar cu cazuri suplimentare pentru axiomele și regulile specifice cuantificatorilor.

**Cazuri suplimentare**:

1. **Axioma Q1**: $\forall x C(x) \rightarrow C(t)$

   - Se demonstrează $\Gamma \vdash A \rightarrow (\forall x C(x) \rightarrow C(t))$

2. **Axioma Q2**: $C \rightarrow \forall x C$ (unde $x$ nu apare liberă în $C$)

   - Se demonstrează $\Gamma \vdash A \rightarrow (C \rightarrow \forall x C)$

3. **Regula generalizării universale**: $\frac{C(x)}{\forall x C(x)}$
   - Aici intervine restricția: dacă $x$ apare liberă în $A$, regula nu poate fi aplicată

### Sensul invers ($\Leftarrow$)

**Ipoteză**: $\Gamma \vdash A \rightarrow B$

**De demonstrat**: $\Gamma \cup \{A\} \vdash B$

**Demonstrația**:

1. $\Gamma \vdash A \rightarrow B$ (ipoteză)
2. $A$ (ipoteză adăugată în $\Gamma \cup \{A\}$)
3. $B$ (prin Modus Ponens din 1 și 2)

## Aplicații ale teoremei deducției

### Exemplu 1: Demonstrația proprietății tranzitivității

**Să demonstrăm**: $\vdash (\forall x (P(x) \rightarrow Q(x)) \land \forall x (Q(x) \rightarrow R(x))) \rightarrow \forall x (P(x) \rightarrow R(x))$

**Folosind teorema deducției**:

1. Presupunem ipoteza: $\forall x (P(x) \rightarrow Q(x)) \land \forall x (Q(x) \rightarrow R(x))$

2. Demonstrăm: $\forall x (P(x) \rightarrow R(x))$

3. Pentru a demonstra $\forall x (P(x) \rightarrow R(x))$, demonstrăm $P(x) \rightarrow R(x)$ și aplicăm R.G.U.

4. Aplicăm din nou teorema deducției pentru $P(x) \rightarrow R(x)$:
   - Presupunem $P(x)$
   - Demonstrăm $R(x)$

**Demonstrația detaliată**:

$$
\begin{align}
&\forall x (P(x) \rightarrow Q(x)) \land \forall x (Q(x) \rightarrow R(x)) \tag{ipoteză}\\
&\forall x (P(x) \rightarrow Q(x)) \tag{din 1, R.D.F.}\\
&\forall x (Q(x) \rightarrow R(x)) \tag{din 1, R.D.F.}\\
&P(x) \rightarrow Q(x) \tag{din 2, Q1}\\
&Q(x) \rightarrow R(x) \tag{din 3, Q1}\\
&P(x) \tag{ipoteză pentru teorema deducției}\\
&Q(x) \tag{din 6,4 prin M.P.}\\
&R(x) \tag{din 7,5 prin M.P.}\\
&P(x) \rightarrow R(x) \tag{din 6-8, teorema deducției}\\
&\forall x (P(x) \rightarrow R(x)) \tag{din 9, R.G.U.}
\end{align}
$$

### Exemplu 2: Relația dintre cuantificatori

**Să demonstrăm**: $\vdash \exists x P(x) \rightarrow \overline{\forall x \overline{P(x)}}$

**Folosind teorema deducției**:

1. Presupunem: $\exists x P(x)$
2. Demonstrăm: $\overline{\forall x \overline{P(x)}}$

**Demonstrația**:

$$
\begin{align}
&\exists x P(x) \tag{ipoteză}\\
&\forall x \overline{P(x)} \tag{ipoteză pentru reducere la absurd}\\
&\overline{P(a)} \tag{din 2, Q1}\\
&P(a) \rightarrow \bot \tag{din 3}\\
&\exists x P(x) \rightarrow \bot \tag{din 1,4 prin R.P.E.}\\
&\bot \tag{din 1,5 prin M.P.}\\
&\overline{\forall x \overline{P(x)}} \tag{din 2-6, prin reducere la absurd}
\end{align}
$$

## Limitările teoremei deducției

### Cazuri în care teorema nu se aplică

1. **Generalizarea asupra variabilelor din ipoteză**:
   $$P(x) \vdash \forall x P(x) \text{ este validă prin R.G.U.}$$
   $$\text{dar } \not\vdash P(x) \rightarrow \forall x P(x)$$

2. **Variabile legate în contextul ipotezei**:
   Când aplicarea R.G.U. asupra unei variabile din ipoteză ar duce la inconsecvențe logice.

### Soluții pentru aceste limitări

1. **Redenumirea variabilelor**: Folosirea unei variabile proaspete pentru evitarea conflictelor

2. **Formularea corectă a ipotezelor**: Asigurarea că variabilele critice nu apar libere în ipoteze

3. **Aplicarea teoremei în pași**: Divizarea demonstrației în pași mai mici pentru evitarea conflictelor

## Consecințe teoretice

### Teorema deducției și forma normală prenexă

Teorema deducției facilitează demonstrarea că orice formulă poate fi adusă la [forma prenexă](./formule-normale-predicate.md):

**Teoremă**: Pentru orice formulă $A$, există o formulă $A'$ în forma prenexă astfel încât $\vdash A \leftrightarrow A'$.

### Relația cu completitudinea

Teorema deducției este crucială pentru demonstrarea **teoremei de completitudine** a calculului predicatelor:

- **Corectitudinea**: $\vdash A \Rightarrow \models A$
- **Completitudinea**: $\models A \Rightarrow \vdash A$

## Aplicații în practica demonstrațiilor

### Strategii de demonstrație

1. **Demonstrația directă**: Folosirea teoremei deducției pentru transformarea problemei $\vdash A \rightarrow B$ în problema $\{A\} \vdash B$

2. **Demonstrația prin contrapoziție**: Transformarea în $\{\overline{B}\} \vdash \overline{A}$

3. **Demonstrația prin reducere la absurd**: Folosirea ipotezei $\{\overline{A}\} \vdash \bot$ pentru a demonstra $\vdash A$

### Exemple de aplicare în matematică

**Teorema**: În teoria mulțimilor, $\vdash \forall x \forall y ((x \subseteq y \land y \subseteq x) \rightarrow x = y)$

**Demonstrația folosind teorema deducției**:

1. Presupunem $x \subseteq y \land y \subseteq x$
2. Demonstrăm $x = y$ folosind axioma extensionalității
3. Aplicăm teorema deducției pentru a obține rezultatul final

## Importanța în logica contemporană

Teorema deducției în calculul predicatelor:

1. **Fundamentează** sistemele de demonstrare automată
2. **Simplifică** verificarea corectitudinii logice
3. **Facilitează** dezvoltarea asistenților de demonstrație
4. **Permite** optimizarea algoritmilor de deducție

Această teoremă rămâne una dintre realizările fundamentale ale logicii matematice moderne și continuă să fie instrumentul principal pentru analiza formală a raționamentului în contextul predicatelor și cuantificatorilor.
