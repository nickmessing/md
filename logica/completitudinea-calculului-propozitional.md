# Completitudinea calculului propozițional

## Teorema completitudinii

**Teoremă**: În calculul propozițional poate fi dedusă orice formulă care este adevărată în algebra propozițională.

Cu alte cuvinte, calculul propozițional este **complet**: pentru orice formulă $U$, dacă $U$ este o tautologie (identic adevărată), atunci $\vdash U$.

## Lemele fundamentale

Pentru demonstrația teoremei completitudinii, avem nevoie de următoarele leme:

### Lema 1

$$
\vdash (U(A_a) \land U(A_f)) \rightarrow ((A \leftrightarrow A_a) \rightarrow U(A)) \land ((A \leftrightarrow A_f) \rightarrow U(A))
$$

unde:
- $A_a$ reprezintă formula identic adevărată (tautologia)
- $A_f$ reprezintă formula identic falsă (contradicția)

### Lema 2

$$
\vdash ((A \leftrightarrow A_a) \rightarrow U(A)) \land ((A \leftrightarrow A_f) \rightarrow U(A)) \rightarrow ((A \leftrightarrow A_a) \lor (A \leftrightarrow A_f)) \rightarrow U(A)
$$

### Lema 3

$$
\vdash (U(A_a) \land U(A_f)) \rightarrow U(A)
$$

## Produsul logic

Fie că formula $U$ are următoarea formă: $U(A_1, A_2, \ldots, A_n)$ cu $n$ variabile, unde $A_1, A_2, \ldots, A_n$ sunt formule elementare.

**Definiție**: Definim **produsul logic** pentru două variabile:

$$
\prod_{x,y \in \{A_a, A_f\}} U(x,y) = U(A_a, A_a) \land U(A_a, A_f) \land U(A_f, A_a) \land U(A_f, A_f)
$$

**Generalizare**: Pentru $n$ variabile:

$$
\prod_{\delta_1, \ldots, \delta_n \in \{A_a, A_f\}} U(\delta_1, \ldots, \delta_n)
$$

Acest produs conține $2^n$ factori, câte unul pentru fiecare combinație posibilă de valori de adevăr.

### Lema 4

$$
\vdash \prod_{\sigma_1, \ldots, \sigma_n \in \{A_a, A_f\}} U(\sigma_1, \ldots, \sigma_n) \rightarrow U(A_1, \ldots, A_n)
$$

## Demonstrația teoremei completitudinii

### Pasul 1: Aplicarea Lemei 4

Conform **Lemei 4**, în calculul propozițional poate fi dedusă formula din enunțul lemei.

### Pasul 2: Formula identic adevărată

Luăm o formulă $U(A_1, A_2, \ldots, A_n) \equiv 1$.

Dacă ea este identic adevărată, atunci la orice înlocuire a variabilelor cu $A_a$ sau $A_f$, formula dată poate fi dedusă:

$$
\vdash U(\sigma_1, \ldots, \sigma_n) \quad \text{pentru orice } \sigma_i \in \{A_a, A_f\}
$$

### Pasul 3: Aplicarea regulii conjuncției

Aplicând [Regula Conjuncției Formulelor](/logica/aplicatiile-teoremei-deductiei#regula-conjuncției-formulelor), putem deduce formula din **Lema 4**:

$$
\vdash \prod_{\sigma_1, \ldots, \sigma_n \in \{A_a, A_f\}} U(\sigma_1, \ldots, \sigma_n)
$$

### Pasul 4: Concluzia

Prin **Lema 4** și **Modus Ponens**, se deduce partea din dreapta:

$$
\vdash U(A_1, \ldots, A_n)
$$

Astfel am demonstrat complet această teoremă, care este una din teoremele de bază din logică.

## Observația fundamentală

Prin această teoremă putem înlocui termenul "formulă identic adevărată" cu termenul "formulă deductibilă".

Una din consecințele acestei teoreme ne dă posibilitatea de a transfera toate regulile care au loc în algebra propozițională în regulile deducției din calculul propozițional.

## Echivalențe deduse din teorema completitudinii

Din teorema completitudinii rezultă că următoarele formule pot fi deduse în calculul propozițional:

### Proprietăți comutative
$$
\vdash (U \land V) \leftrightarrow (V \land U)
$$
$$
\vdash (U \lor V) \leftrightarrow (V \lor U)
$$

### Echivalența implicației
$$
\vdash (U \rightarrow V) \leftrightarrow (\overline{U} \lor V)
$$

### Legile lui De Morgan
$$
\vdash \overline{(U \land V)} \leftrightarrow (\overline{U} \lor \overline{V})
$$
$$
\vdash \overline{(U \lor V)} \leftrightarrow (\overline{U} \land \overline{V})
$$

### Proprietăți cu constante logice
$$
\vdash (U \land A_a) \leftrightarrow U
$$
$$
\vdash (U \lor A_a) \leftrightarrow A_a
$$
$$
\vdash (U \land A_f) \leftrightarrow A_f
$$
$$
\vdash (U \lor A_f) \leftrightarrow U
$$

### Proprietăți de idempotență
$$
\vdash (U \land U) \leftrightarrow U
$$
$$
\vdash (U \lor U) \leftrightarrow U
$$

### Legea contradicției și a terțului exclus
$$
\vdash (U \land \overline{U}) \leftrightarrow A_f
$$
$$
\vdash (U \lor \overline{U}) \leftrightarrow A_a
$$

### Legile distributive
$$
\vdash (U \land (V \lor W)) \leftrightarrow ((U \land V) \lor (U \land W))
$$
$$
\vdash (U \lor (V \land W)) \leftrightarrow ((U \lor V) \land (U \lor W))
$$

## Importanța teoremei

Teorema completitudinii este fundamentală pentru:

1. **Echivalența sintaxei cu semantica**: Tot ce este adevărat semantic poate fi demonstrat sintactic
2. **Fundamentarea logicii**: Confirmă că sistemul axiom-regulă captează complet adevărul logic
3. **Aplicații practice**: Permite utilizarea algoritmilor de verificare a adevărului pentru demonstrații formale
