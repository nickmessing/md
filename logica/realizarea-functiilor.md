<script setup lang="ts">
import FormulaRenderer from './components/FormulaRenderer.vue'
</script>

# Realizarea funcțiilor algebrei propoziționale prin formule.

## Introducere

Unele funcții pot fi definite analitic prin formule în baza

$$
P_1 = \{\land, \lor, \lnot\},
$$

iar în cercetarea acestor funcții putem folosi aparatul algebrei propoziționale. Vom argumenta că orice funcție booleană poate fi realizată printr-o formulă folosind doar operațiile din $P_1$.

## Teorema 1 – Descompunerea funcției după un argument

### Enunț

Orice funcție booleană $f(\alpha_1, \alpha_2, \dots, \alpha_n)$ poate fi reprezentată sub forma:

$$
(\alpha_1 \land f(1, \alpha_2, \dots, \alpha_n)) \lor (\overline{\alpha_1} \land f(0, \alpha_2, \dots, \alpha_n)).
$$

### 1. Ideea de bază: împărțirea domeniului în două submulțimi

Funcția $f(\alpha_1, \alpha_2, \dots, \alpha_n)$ este definită pe toate tuplurile $(\alpha_1, \alpha_2, \dots, \alpha_n)$, unde fiecare $\alpha_i$ aparține mulțimii $\{0,1\}$. Totalul este de $2^n$ astfel de tupluri.

1. **Prima submulțime** conține toate tuplurile în care $\alpha_1 = 1$. Sunt $2^{n-1}$ asemenea tupluri, de forma:

   $$
   (1, \alpha_2, \alpha_3, \dots, \alpha_n).
   $$

2. **A doua submulțime** conține toate tuplurile în care $\alpha_1 = 0$. Tot $2^{n-1}$ sunt și acestea, de forma:
   $$
   (0, \alpha_2, \alpha_3, \dots, \alpha_n).
   $$

Scopul teoremei este să arate că, pentru fiecare tuplu din prima submulțime și respectiv pentru fiecare tuplu din a doua submulțime, valoarea lui $f$ poate fi reprodusă exact de expresia

$$
(\alpha_1 \land f(1, \alpha_2, \dots, \alpha_n)) \lor (\overline{\alpha_1} \land f(0, \alpha_2, \dots, \alpha_n)).
$$

### 2. Scheletul demonstrației

Pentru demonstrare, se verifică **separat** ce se întâmplă atunci când $\alpha_1 = 1$ și atunci când $\alpha_1 = 0$.

1. **Cazul $\alpha_1 = 1$**

   - În expresia propusă: $(\alpha_1 \land f(1, \alpha_2, \dots, \alpha_n)) \lor (\overline{\alpha_1} \land f(0, \alpha_2, \dots, \alpha_n))$,  
     dacă $\alpha_1 = 1$, atunci:
     $$
     \alpha_1 \land f(1, \alpha_2, \dots, \alpha_n) = 1 \land f(1, \alpha_2, \dots, \alpha_n) = f(1, \alpha_2, \dots, \alpha_n),
     $$
     și
     $$
     \overline{\alpha_1} = \overline{1} = 0,
     $$
     deci
     $$
     (\overline{\alpha_1} \land f(0, \alpha_2, \dots, \alpha_n)) = 0 \land \dots = 0.
     $$
     Prin urmare, când $\alpha_1 = 1$, întreaga expresie devine:
     $$
     f(1, \alpha_2, \dots, \alpha_n).
     $$
     Iar acesta este exact valoarea reală a lui $f$ atunci când $\alpha_1=1$.

2. **Cazul $\alpha_1 = 0$**
   - Analog, dacă $\alpha_1 = 0$, atunci:
     $$
     \alpha_1 \land f(1, \alpha_2, \dots, \alpha_n) = 0 \land \dots = 0,
     $$
     și
     $$
     \overline{\alpha_1} = \overline{0} = 1,
     $$
     deci
     $$
     (\overline{\alpha_1} \land f(0, \alpha_2, \dots, \alpha_n)) = 1 \land f(0, \alpha_2, \dots, \alpha_n) = f(0, \alpha_2, \dots, \alpha_n).
     $$
     Iar aceasta coincide exact cu valoarea reală a lui $f$ în cazul $\alpha_1 = 0$.

Cum am acoperit ambele situații posibile pentru $\alpha_1$ (fie 0, fie 1), reiese că valoarea expresiei propuse coincide întotdeauna cu valoarea funcției $f$.

### 3. Exemplu concret (cu două variabile)

Pentru a înțelege mai clar, să luăm un exemplu simplu cu $n=2$. Avem funcția $f(\alpha_1, \alpha_2)$. Arătăm că:

$$
f(\alpha_1, \alpha_2) = (\alpha_1 \land f(1, \alpha_2)) \lor (\overline{\alpha_1} \land f(0, \alpha_2)).
$$

#### 3.1. Enumerarea tuturor valorilor

- Cazul $\alpha_1 = 0$: atunci funcția este $f(0, \alpha_2)$. Aici, $\alpha_2$ poate fi 0 sau 1.
- Cazul $\alpha_1 = 1$: atunci funcția este $f(1, \alpha_2)$. La fel, $\alpha_2$ poate fi 0 sau 1.

Sunt 4 combinații posibile pentru $(\alpha_1, \alpha_2)$: $(0,0), (0,1), (1,0), (1,1)$.

#### 3.2. Verificăm expresia

**Expresia** $(\alpha_1 \land f(1, \alpha_2)) \lor (\overline{\alpha_1} \land f(0, \alpha_2))$ generează:

1. **Dacă** $\alpha_1 = 0$:

   - $\alpha_1 \land f(1, \alpha_2) = 0 \land f(1, \alpha_2) = 0$.
   - $\overline{\alpha_1} = \overline{0} = 1$, deci $\overline{\alpha_1} \land f(0, \alpha_2) = f(0, \alpha_2)$.
   - Rezultat: **valoarea** e $f(0, \alpha_2)$.

2. **Dacă** $\alpha_1 = 1$:
   - $\alpha_1 \land f(1, \alpha_2) = 1 \land f(1, \alpha_2) = f(1, \alpha_2)$.
   - $\overline{\alpha_1} = \overline{1} = 0$, deci $\overline{\alpha_1} \land f(0, \alpha_2) = 0$.
   - Rezultat: **valoarea** e $f(1, \alpha_2)$.

Observăm că în oricare din cele 4 combinații, obținem exact aceleași valori ca și funcția $f$ însăși. Prin urmare, identitatea este demonstrată pentru $n=2$, iar procedeul se generalizează identic pentru orice $n$.

### 4. Concluzie

Am separat toate tuplurile posibile în două submulțimi:

- cele cu $\alpha_1=1$,
- cele cu $\alpha_1=0$.

În consecință, valoarea funcției în oricare dintre aceste tupluri este reprodusă fidel de formula:

$$
(\alpha_1 \land f(1, \alpha_2, \dots, \alpha_n)) \lor (\overline{\alpha_1} \land f(0, \alpha_2, \dots, \alpha_n)).
$$

Aceasta finalizează demonstrația teoremei.

## Sistemul de notații

$$
x_i^\sigma =
\begin{equation*}
    \begin{cases}
      x_i \text{, dacă } \sigma = 1\\
      \overline{x_i} \text{, dacă } \sigma = 0
    \end{cases}
\end{equation*}
\newline
\text{unde } x_i \text{ este o variabilă booleană și } \sigma \in \{0,1\}.
\newline \newline
$$

$$
\sum_{i=1}^{n} x_i = x_1 \oplus x_2 \oplus \ldots \oplus x_n.
$$

$$
\bigvee_{i=1}^{n} x_i = x_1 \lor x_2 \lor \ldots \lor x_n.
$$

$$
\bigwedge_{i=1}^{n} x_i = x_1 \land x_2 \land \ldots \land x_n.
$$

Aceste notații permit scrierea compactă a formelor normale disjunctive/conjunctive.

## Forma normală disjunctivă perfectă

$$
\bigvee_{\sigma_1, \sigma_2} {x_1^{\sigma_1} \land x_2^{\sigma_2}}
$$

Combinații de valori pentru $\sigma_1$ și $\sigma_2$:

| $\sigma_1$ | $\sigma_2$ |
| ---------- | ---------- |
| 0          | 0          |
| 0          | 1          |
| 1          | 0          |
| 1          | 1          |

Deci

$$
\bigvee_{\sigma_1, \sigma_2} {x_1^{\sigma_1} \land x_2^{\sigma_2}}
= \newline =
(x_1^0 \land x_2^0) \lor (x_1^0 \land x_2^1) \lor (x_1^1 \land x_2^0) \lor (x_1^1 \land x_2^1)
= \newline =
(\overline{x_1} \land \overline{x_2}) \lor (\overline{x_1} \land x_2) \lor (x_1 \land \overline{x_2}) \lor (x_1 \land x_2)
$$

## Teorema 2 – Reprezentarea funcției prin disjuncție după mai mulți argumente

### Enunț

Fiecare funcție din algebra propozițională $f(\alpha_1, \dots, \alpha_n)$ poate fi reprezentată în următoarea formă (pentru $1 \le m \le n$):

$$
\bigvee_{\substack{\sigma_1, \dots, \sigma_m \\ \sigma_i \in \{0,1\}}}
\Bigl(
\alpha_1^{\sigma_1} \land \alpha_2^{\sigma_2} \land \dots \land \alpha_m^{\sigma_m} \land f(\sigma_1, \sigma_2, \dots, \sigma_m,\;\alpha_{m+1}, \dots, \alpha_n)
\Bigr),
$$

unde $\alpha_i^{0} = \overline{\alpha_i}$ și $\alpha_i^{1} = \alpha_i$, iar $f(\sigma_1, \sigma_2, \dots, \sigma_m,\;\alpha_{m+1}, \dots, \alpha_n)$ indică faptul că în funcția $f$ primii $m$ parametri sunt fixați la valorile $\sigma_1, \sigma_2, \dots, \sigma_m$.

### Demonstrație (prin inducție matematică)

#### Pasul de bază: $m = 1$

Când $m=1$, avem doar un singur argument $\alpha_1$ care se fixează la 0 sau 1. Conform **Teoremei 1** (descompunerea funcției după un argument), putem scrie:

$$
f(\alpha_1, \alpha_2, \dots, \alpha_n)
= \newline =
(\alpha_1 \land f(1, \alpha_2, \dots, \alpha_n))
\;\lor\;
(\overline{\alpha_1} \land f(0, \alpha_2, \dots, \alpha_n))
= \newline =
(\alpha_1^1 \land f(1, \alpha_2, \dots, \alpha_n))
\;\lor\;
(\alpha_1^0 \land f(0, \alpha_2, \dots, \alpha_n))
= \newline =
\bigvee_{\sigma_1 \in \{0,1\}}
\Bigl(
\alpha_1^{\sigma_1} \land f(\sigma_1, \alpha_2, \dots, \alpha_n)
\Bigr).
$$

#### Ipoteza de inducție: $m = i$

Presupunem că teorema este adevărată pentru $m = i$, adică:

$$
f(\alpha_1, \dots, \alpha_n)
=
\bigvee_{\substack{\sigma_1, \dots, \sigma_i}}
\Bigl(
\alpha_1^{\sigma_1} \land \dots \land \alpha_i^{\sigma_i} \land f(\sigma_1, \dots, \sigma_i,\;\alpha_{i+1}, \dots, \alpha_n)
\Bigr).
$$

#### Pasul inductiv: demonstrăm pentru $m = i + 1$

Vrem să arătăm că relația este valabilă și când disjuncția se extinde și peste $\alpha_{i+1}$. Pornim de la forma ipotezei de inducție:

$$
\bigvee_{\substack{\sigma_1, \dots, \sigma_i}}
\Bigl(
\alpha_1^{\sigma_1} \land \dots \land \alpha_i^{\sigma_i} \land f(\sigma_1, \dots, \sigma_i,\;\alpha_{i+1}, \dots, \alpha_n)
\Bigr).
$$

Aplicăm **Teorema 1** pentru variabila $\alpha_{i+1}$ din interiorul funcției $f(\sigma_1, \dots, \sigma_i,\;\alpha_{i+1}, \dots, \alpha_n)$, obținând:

$$
f(\sigma_1, \dots, \sigma_i,\;\alpha_{i+1}, \dots, \alpha_n)
=
(\alpha_{i+1} \land f(\sigma_1, \dots, \sigma_i,\;1,\;\alpha_{i+2}, \dots, \alpha_n))
\;\lor\;
(\overline{\alpha_{i+1}} \land f(\sigma_1, \dots, \sigma_i,\;0,\;\alpha_{i+2}, \dots, \alpha_n)).
$$

Substituind această descompunere în expresia de mai sus, obținem o disjuncție mai mare (iarăși față de $\sigma_1, \dots, \sigma_i$ și acum și față de $\alpha_{i+1}$), care se poate regrupa sub forma:

$$
\bigvee_{\substack{\sigma_1, \dots, \sigma_i}}
\Bigl[
\alpha_1^{\sigma_1} \land \dots \land \alpha_i^{\sigma_i} \land
\bigl(
(\alpha_{i+1} \land f(\sigma_1, \dots, \sigma_i,\;1,\;\alpha_{i+2}, \dots, \alpha_n))
\;\lor\;
(\overline{\alpha_{i+1}} \land f(\sigma_1, \dots, \sigma_i,\;0,\;\alpha_{i+2}, \dots, \alpha_n))
\bigr)
\Bigr].
$$

Această disjuncție se poate rescrie echivalent drept:

$$
\bigvee_{\substack{\sigma_1, \dots, \sigma_i,\,\sigma_{i+1}}}
\Bigl(
\alpha_1^{\sigma_1} \land \dots \land \alpha_i^{\sigma_i} \land \alpha_{i+1}^{\sigma_{i+1}} \land f(\sigma_1, \dots, \sigma_i,\;\sigma_{i+1},\;\alpha_{i+2}, \dots, \alpha_n)
\Bigr),
$$

unde $\alpha_{i+1}^{\sigma_{i+1}}$ devine fie $\alpha_{i+1}$ (când $\sigma_{i+1} = 1$), fie $\overline{\alpha_{i+1}}$ (când $\sigma_{i+1} = 0$), iar în interiorul lui $f$ fixăm argumentul $\alpha_{i+1}$ la 1 sau la 0 în funcție de $\sigma_{i+1}$.  
Astfel, teorema este demonstrată pentru $m = i + 1$. Prin principiul inducției, ea este adevărată pentru orice $m \le n$.

### Observație finală

Rezultatul **Teoremei 2** generalizează metoda pas cu pas a **Teoremei 1** la mai multe variabile deodată, permițând astfel scrierea oricărei funcții booleene într-o formă de disjuncție „mare”, unde fiecare termen fixează un subset de variabile și aplică funcția $f$ cu aceste valori stabilite. Acest lucru este util în construcția explicită a funcțiilor booleene, în special când se urmărește o formă canonică sau se proiectează circuite logice pas cu pas.

#### Exemplu (pentru $m=2$)

Ca ilustrare simplă, dacă avem $f(\alpha_1, \alpha_2, \alpha_3)$ și vrem să aplicăm teorema pentru $m=2$, vom avea:

$$
\bigvee_{\sigma_1, \sigma_2 \in \{0,1\}}
\Bigl(
\alpha_1^{\sigma_1} \land \alpha_2^{\sigma_2} \land f(\sigma_1, \sigma_2,\;\alpha_3)
\Bigr).
$$

Termenii explicit sunt:

- $\overline{\alpha_1} \land \overline{\alpha_2} \land f(0,0,\;\alpha_3)$,
- $\overline{\alpha_1} \land \alpha_2 \land f(0,1,\;\alpha_3)$,
- $\alpha_1 \land \overline{\alpha_2} \land f(1,0,\;\alpha_3)$,
- $\alpha_1 \land \alpha_2 \land f(1,1,\;\alpha_3)$.

Fiecare termen corespunde unor valori fixe pentru primele două variabile, iar $\alpha_3$ rămâne liberă în funcția $f$. Acesta ilustrează exact idea disjuncției extinse din **Teorema 2**.

## Observații suplimentare și generalizări

### 1. Disjuncții și conjuncții – dualitatea formelor

Am văzut că **Teorema 2** descrie o formă bazată pe o **disjuncție** mare (o sumă logică). **În mod analog**, se poate proceda cu o **conjuncție** mare (un produs logic) pentru a obține forme conjunctive. Principiul este același, dar rolurile operațiilor și valorile pentru variabile se inversează.

> **Observație:**  
> Dacă în disjuncție fixăm variabilele la 1 pentru a alege calea adevărată, în conjuncție putem fixa variabilele la 0 pentru a alege calea falsă (și invers), obținând astfel o formă duală.  
> În loc de $\alpha_i^1 = \alpha_i$ și $\alpha_i^0 = \overline{\alpha_i}$, putem folosi $\alpha_i^0 = \alpha_i$ și $\alpha_i^1 = \overline{\alpha_i}$ pentru a construi un produs logic mare, totul fiind un **exercițiu de dualitate**.

### 2. Cazul special: $m = n$

Dacă în **Teorema 2** luăm $m = n$, atunci disjuncția (sau conjuncția) „mare” fixează toate cele $n$ variabile la 0 sau 1, după cum urmează:

$$
\bigvee_{\substack{\sigma_1, \dots, \sigma_n}}
\Bigl(
\alpha_1^{\sigma_1} \land \alpha_2^{\sigma_2} \land \dots \land \alpha_n^{\sigma_n}
\land f(\sigma_1, \dots, \sigma_n)
\Bigr).
$$

Dar în interiorul lui $f(\sigma_1, \dots, \sigma_n)$, **toate** argumentele sunt deja stabilite. Prin urmare, $f(\sigma_1, \dots, \sigma_n)$ poate fi doar 0 sau 1:

- **Dacă** $f(\sigma_1, \dots, \sigma_n) = 0$, termenul dispare (0 în disjuncție).
- **Dacă** $f(\sigma_1, \dots, \sigma_n) = 1$, termenul rămâne (fiind un produs logic al literalilor corespunzători $\sigma_1, \dots, \sigma_n$).

Astfel, fiecare **tuplu** $(\sigma_1, \dots, \sigma_n)$ pentru care $f=1$ își păstrează **literalii** în disjuncția finală, iar celelalte tupluri (pentru care $f=0$) nu contribuie nimic. Acesta este modul clasic de a construi **forma normală disjunctivă** (FND) completă, pornind direct din **tabelul de adevăr**.

#### Exemplu:

Suma după 2:

<FormulaRenderer expression="A xor B" />

- Pentru funcția $f(\alpha_1, \alpha_2) = \alpha_1 \oplus \alpha_2$ în două variabile, $f(\alpha_1, \alpha_2)$ este 1 exact în cazurile $(\alpha_1=0, \alpha_2=1)$ și $(\alpha_1=1, \alpha_2=0)$.
  - Când $(\alpha_1, \alpha_2) = (0,1)$, fixăm $\alpha_1^0 = \overline{\alpha_1}$ și $\alpha_2^1 = \alpha_2$.
  - Când $(\alpha_1, \alpha_2) = (1,0)$, fixăm $\alpha_1^1 = \alpha_1$ și $\alpha_2^0 = \overline{\alpha_2}$.

Rezultă:

$$
f(\alpha_1, \alpha_2) = (\overline{\alpha_1} \land \alpha_2) \;\lor\; (\alpha_1 \land \overline{\alpha_2}),
$$

care este exact $\oplus$. Observăm că în această formă, $f$ nu mai are un apel recursiv în interior, deoarece toate variabilele sunt deja determinate în fiecare termen (0 sau 1).

### 3. Analog pentru forma conjunctivă

Așa cum există o **formă normală disjunctivă (FND)**, există și o **formă normală conjunctivă (FNC)**. Ideea este complet duală:

- În loc de disjuncție mare (suma logică de produse), se ia o conjuncție mare (produs logic de sume).
- În loc de $\sigma_i = 1$ pentru a selecta variabila inițială $\alpha_i$, se poate lua $\sigma_i = 0$ pentru a selecta complementul $\overline{\alpha_i}$, ș.a.m.d.

Practic, **fiecare** funcție se poate scrie și ca un **produs** de **sume logice** (o conjuncție de disjuncții), cu condiția să rearanjăm termenii corespunzători $(\sigma_1, \dots, \sigma_n)$ în funcție de valorile la care funcția devine 0, exact cum la FND ne bazam pe situațiile când funcția devine 1.

#### Exemplu:

Suma după 2:

<FormulaRenderer expression="A xor B" />

- Pentru funcția $f(\alpha_1, \alpha_2) = \alpha_1 \oplus \alpha_2$ în două variabile, $f(\alpha_1, \alpha_2)$ este 0 exact în cazurile $(\alpha_1=0, \alpha_2=0)$ și $(\alpha_1=1, \alpha_2=1)$.
  - Când $(\alpha_1, \alpha_2) = (0,0)$, fixăm $\alpha_1^0 = \alpha_1$ și $\alpha_2^0 = \alpha_2$.
  - Când $(\alpha_1, \alpha_2) = (1,1)$, fixăm $\alpha_1^1 = \overline{\alpha_1}$ și $\alpha_2^1 = \overline{\alpha_2}$.

Rezultă:

$$
f(\alpha_1, \alpha_2) = (\alpha_1 \lor \alpha_2) \;\land\; (\overline{\alpha_1} \lor \overline{\alpha_2}),
$$

## Teorema 3 – Completitudinea lui $P_1 = \{\land, \lor, \lnot\}$

### Enunț

Orice funcție din algebra propozițională poate fi **realizată** (construită) printr-o **formulă** care folosește exclusiv operațiile **and**, **or**, **not** (i.e. $\land, \lor, \lnot$).

### Demonstrație

1. **Cazul când $f(\alpha_1,\dots,\alpha_n)$ este identic 0**  
   Dacă funcția este mereu 0 (adică iese fals pentru orice tuplu de valori), atunci $f$ poate fi scrisă trivial ca:

   $$
   f(\alpha_1,\dots,\alpha_n) \;=\; (x \land \overline{x})
   $$

   pentru orice variabilă $x$. Observăm că $(x \land \overline{x})$ este întotdeauna fals, iar $f$ rămâne 0 independent de valori.

2. **Cazul când $f(\alpha_1,\dots,\alpha_n)$ nu este identic 0**  
   Există **cel puțin** un tuplu $(\alpha_1,\dots,\alpha_n)$ pentru care $f=1$. Din **Teorema 2** știm că putem scrie funcția sub forma unei disjuncții mari, în care fiecare termen fixeză unele variabile la 0 sau 1 și _invocă_ $f(\dots)$ pe restul. Continuând acest proces (sau luând direct $m=n$), obținem o formă finală (FND) în care **fiecare** termen conține doar literalii (variabile sau negarea lor) și niciun apel recursiv la $f$.  
   Concret, dacă $f(\alpha_1,\dots,\alpha_n)=1$ pentru câteva tupluri, fiecare tuplu contribuie câte un **produs** de literalI (de tipul $\alpha_i$ sau $\overline{\alpha_i}$). Toate aceste produse se unesc prin $\lor$ (disjuncție), astfel formând o **formulă** care folosește doar $\land, \lor, \lnot$.

Prin urmare, **în oricare situație**, $f(\alpha_1,\dots,\alpha_n)$ se poate exprima ca o **formulă** în **baza** $P_1=\{\land,\lor,\lnot\}$. Aceasta confirmă completitudinea operațiilor logice de bază.
