# Algoritmica Grafurilor - Cheat Sheet

## 1. Noțiuni de Bază (din "1. Introducere. Notiuni de baza.pdf")

### Definiția Grafului

- **Graf Neorientat (Graf):** O pereche de mulțimi $G=(X,U)$, unde $X$ este o mulțime nevidă de vârfuri (noduri), iar $U$ este o mulțime de perechi neordonate de elemente din $X$, numite muchii.
  - Ordinul grafului: $|X|=n$.
  - Muchie: $u_j = (x_i, x_k)$. $x_i, x_k$ sunt extremitățile muchiei.
- **Vârfuri Adiacente:** Două vârfuri $x_i, x_k$ sunt adiacente dacă $(x_i, x_k) \in U$. Notație: $x_i \sim x_k$.
- **Muchii Adiacente:** Două muchii sunt adiacente dacă au o extremitate comună.
- **Incidență:** Un vârf $x_i$ și o muchie $u_j$ sunt incidente dacă $x_i$ este o extremitate a lui $u_j$.
- **Vecinătatea unui Vârf $N_G(x)$:** Mulțimea tuturor vârfurilor adiacente cu $x$. $N_G(x) = \{y \in X | y \sim x\}$.
- **Gradul unui Vârf $\text{deg}(x)$:** Numărul de muchii incidente cu vârful $x$. $\text{deg}(x) = |N_G(x)|$.
  - **Vârf Izolat:** Vârf cu gradul 0.
  - **Vârf Terminal (Frunză):** Vârf cu gradul 1.
  - **Grad Maxim $\Delta(G)$:** $\max_{x \in X} \text{deg}(x)$.
  - **Grad Minim $\delta(G)$:** $\min_{x \in X} \text{deg}(x)$.

### Lema Gradelor (Handshaking Lemma)

Pentru un graf $G=(X,U)$ cu $n$ vârfuri și $m$ muchii:

$$\sum_{x \in X} \text{deg}(x) = 2m$$

**Corolar:** În orice graf, numărul vârfurilor cu grad impar este par.

### Tipuri de Grafuri Neorientate

- **Graf Vid ($O_n$):** Graf fără muchii ($U = \emptyset$).
- **Graf Trivial ($K_1$ sau $O_1$):** Graf cu un singur vârf și nicio muchie.
- **Graf Complet ($K_n$):** Graf în care oricare două vârfuri distincte sunt adiacente.
- **Graf Bipartit:** Mulțimea vârfurilor $X$ poate fi partiționată în două submulțimi disjuncte $X_1$ și $X_2$ ($X = X_1 \cup X_2, X_1 \cap X_2 = \emptyset$) astfel încât fiecare muchie conectează un vârf din $X_1$ cu un vârf din $X_2$. Notație: $G=(X_1, X_2, U)$.
  - **Graf Bipartit Complet ($K_{p,q}$):** Graf bipartit în care fiecare vârf din $X_1$ (cu $|X_1|=p$) este adiacent cu toate vârfurile din $X_2$ (cu $|X_2|=q$). Număr de muchii: $m = p \cdot q$.
  - **Graf Stea ($K_{1,q}$):** Un graf bipartit complet $K_{1,q}$.
- **Graf Complementar ($\overline{G}$):** Graf cu aceeași mulțime de vârfuri $X$ ca și $G$, în care două vârfuri sunt adiacente dacă și numai dacă nu sunt adiacente în $G$.
- **Graf al Muchiilor ( $L(G)$ ):** Vârfurile lui $L(G)$ corespund muchiilor lui $G$. Două vârfuri în $L(G)$ sunt adiacente dacă muchiile corespunzătoare în $G$ sunt adiacente.
- **Grafuri Izomorfe ($G \cong H$):** Există o bijecție $\phi: X_G \to X_H$ între mulțimile de vârfuri astfel încât $(u,v)$ este muchie în $G$ dacă și numai dacă $(\phi(u), \phi(v))$ este muchie în $H$. Grafurile izomorfe au aceeași structură.
- **Multigraf:** Un graf în care pot exista mai multe muchii între aceeași pereche de vârfuri (muchii paralele/multiple).
- **Pseudograf:** Un multigraf care poate conține și bucle (muchii care conectează un vârf cu el însuși).
  - _Notă: Cursul definește graful simplu (fără bucle și muchii multiple) ca "graf"._

### Subgrafuri

- **Subgraf:** Un graf $H=(Y,V)$ este subgraf al lui $G=(X,U)$ dacă $Y \subseteq X$ și $V \subseteq U$.
- **Subgraf Parțial:** Un subgraf $H=(Y,V)$ al lui $G=(X,U)$ unde $Y=X$.
- **Subgraf Generat (Indus) de $Y \subset X$:** Un subgraf $H=(Y,V)$ unde $V$ conține _toate_ muchiile din $U$ care au ambele extremități în $Y$.

### Grafuri Orientate (Digrafuri)

- **Graf Orientat:** O pereche $G=(X,A)$, unde $X$ este mulțimea vârfurilor, iar $A$ este o mulțime de perechi _ordonate_ de elemente din $X$, numite arce.
  - Arc $a=(x,y)$: $x$ este extremitatea inițială, $y$ este extremitatea finală. $(x,y) \neq (y,x)$.
- **Graf Simetric:** Dacă pentru orice arc $(x,y) \in A$, există și arcul $(y,x) \in A$.
- **Graf Antisimetric:** Dacă pentru orice pereche de vârfuri distincte $x,y$, poate exista cel mult unul dintre arcele $(x,y)$ sau $(y,x)$.
- **Turnir:** Un graf antisimetric cu un număr maxim de arce.

### Matrice Asociate Grafurilor Neorientate Simple

Fie $G=(X,U)$ un graf cu $n$ vârfuri $x_1, ..., x_n$ și $m$ muchii $u_1, ..., u_m$.

- **Matricea de Adiacență $A(G)$ (n x n):**

  $$
  A_{ij} = \begin{cases} 1, & \text{dacă vârfurile } x_i \text{ și } x_j \text{ sunt adiacente} \\ 0, & \text{în caz contrar} \end{cases}
  $$

  - Proprietăți: binară, simetrică, $A_{ii}=0$, suma pe linia $i$ (sau coloana $i$) este $\text{deg}(x_i)$.

- **Matricea de Incidență $I(G)$ (n x m):**

  $$
  I_{kl} = \begin{cases} 1, & \text{dacă vârful } x_k \text{ este incident muchiei } u_l \\ 0, & \text{în caz contrar} \end{cases}
  $$

  - Proprietăți: binară, fiecare coloană conține exact două valori de '1', suma pe linia $k$ este $\text{deg}(x_k)$.

- **Matricea lui Kirchhoff (Matricea Laplaciană) $B(G)$ (n x n):**

  $$
  B_{ij} = \begin{cases} \text{deg}(x_i), & \text{dacă } i=j \\ -1, & \text{dacă } i \neq j \text{ și } (x_i, x_j) \in U \\ 0, & \text{în caz contrar} \end{cases}
  $$

  - Proprietăți: simetrică, suma elementelor pe orice linie/coloană este 0.

## 2. Lanțuri, Cicluri, Componente Conexe (din "2. Lanturi, cicluri, componente. Caracteristici metrice (1).pdf")

### Lanțuri și Cicluri

- **Lanț:** O succesiune de vârfuri $(x_1, x_2, ..., x_k)$ unde orice două vârfuri consecutive sunt unite de o muchie, iar **toate muchiile sunt distincte**. Lungimea este numărul de muchii din lanț.
- **Lanț Elementar:** Un lanț în care oricare 2 vârfuri ale sale sunt distincte.
- **Ciclu:** Un lanț $(x_1, x_2, ..., x_k)$ cu proprietatea că $x_1 = x_k$.
- **Ciclu Elementar:** Un ciclu în care oricare două vârfuri, cu excepția extremităților, sunt distincte.

### Conexitate

- **Graf Conex:** Un graf în care există un lanț ce unește oricare două vârfuri.
- **Componentă Conexă:** Un subgraf maximal conex al unui graf. $k$ = numărul de componente conexe.
- **Punct de Articulație (Cut Vertex):** Un vârf a cărui eliminare crește numărul de componente conexe.
- **Muchie-Punte (Bridge):** O muchie a cărei eliminare crește numărul de componente conexe. O muchie este punte dacă și numai dacă nu aparține niciunui ciclu.

**Teoremă:** Pentru orice graf $G$ cu $n$ vârfuri, $m$ muchii și $k$ componente conexe:
$$n-k \le m \le C_{n-k+1}^{2} \quad \left(\text{sau } \frac{(n-k+1)(n-k)}{2}\right)$$

### Caracteristici Metrice (pentru grafuri conexe)

- **Distanța $d(x,y)$:** Lungimea celui mai scurt lanț între vârfurile $x$ și $y$.
  - $d(x,y) \ge 0$, $d(x,y) = 0 \iff x=y$, $d(x,y) = d(y,x)$, $d(x,z) + d(z,y) \ge d(x,y)$.
- **Excentricitatea $e(x)$:** Distanța maximă de la $x$ la orice alt vârf din graf. $e(x) = \max_{y \in X} d(x,y)$.
- **Raza $r(G)$:** Excentricitatea minimă a unui vârf din graf. $r(G) = \min_{x \in X} e(x)$.
- **Diametrul $D(G)$:** Excentricitatea maximă a unui vârf din graf. $D(G) = \max_{x \in X} e(x)$.
- **Centrul Grafului:** Mulțimea vârfurilor $x$ pentru care $e(x) = r(G)$.
- **Vârf Periferic:** Un vârf $x$ pentru care $e(x) = D(G)$.

## 3. Mulțimi Stabile și Acoperiri (din "3. Multimi stabile in graf.pdf")

### Mulțimi Stabile Interior (Independente)

- **Mulțime Stabilă Interior (Independent Set):** O submulțime de vârfuri $A \subseteq X$ astfel încât nu conține două vârfuri adiacente.
- **Mulțime Stabilă Interior Maximală:** O mulțime stabilă interior $A$ care nu este conținută strict într-o altă mulțime stabilă interior.
- **Mulțime Stabilă Interior Maximă:** O mulțime stabilă interior cu cel mai mare cardinal posibil.
- **Număr de Stabilitate Internă $\alpha_{0}(G)$:** Cardinalul unei mulțimi stabile interior maxime.

### Mulțimi Stabile Exterior (Dominante)

- **Mulțime Stabilă Exterior (Dominating Set):** O submulțime de vârfuri $A \subseteq X$ astfel încât fiecare vârf $y \in X \setminus A$ este adiacent cu cel puțin un vârf $x \in A$.
- **Mulțime Stabilă Exterior Minimală:** O mulțime stabilă exterior $A$ astfel încât nicio submulțime proprie a lui $A$ nu este stabilă exterior.
- **Mulțime Stabilă Exterior Minimă:** O mulțime stabilă exterior cu cel mai mic cardinal posibil.

### Nucleu

- **Nucleu:** O submulțime de vârfuri care este simultan stabilă interior și stabilă exterior.

### Acoperiri de Vârfuri (Vertex Cover)

- **Acoperire de Vârfuri:** O submulțime de vârfuri $A \subseteq X$ astfel încât fiecare muchie din $G$ este incidentă cu cel puțin un vârf din $A$.
- **Acoperire de Vârfuri Minimă:** O acoperire de vârfuri cu un număr minim de elemente.
- **Număr de Acoperire cu Vârfuri $\beta_{0}(G)$:** Cardinalul unei acoperiri de vârfuri minime.
- **Teorema:** Pentru orice graf, $\alpha_{0}(G) + \beta_{0}(G) = n$.

### Clică (Clique)

- **Clică:** O submulțime de vârfuri $A \subseteq X$ în care oricare două vârfuri sunt adiacente.
- **Clică Maximă:** O clică cu cel mai mare cardinal.
- **Numărul de Clică (Densitatea) $\phi(G)$:** Cardinalul unei clici maxime.
- **Relație:** O mulțime este o clică în $G$ dacă și numai dacă este o mulțime stabilă interior în $\overline{G}$. Deci, $\phi(G) = \alpha_{0}(\overline{G})$.

### Cuplaje (Matching / Independent Edge Set)

- **Cuplaj:** O submulțime de muchii în care oricare două muchii nu sunt adiacente.
- **Cuplaj Maxim:** Un cuplaj cu cel mai mare cardinal posibil.
- **Număr de Cuplaj $\alpha_{1}(G)$:** Cardinalul unui cuplaj maxim.
- **Relație:** Un cuplaj în $G$ este o mulțime stabilă interior în graful muchiilor $L(G)$. Deci, $\alpha_{1}(G) = \alpha_{0}(L(G))$.

### Acoperiri de Muchii (Edge Cover)

- **Acoperire de Muchii:** O submulțime de muchii astfel încât fiecare vârf din $G$ este incident cel puțin unei muchii din submulțime.
- **Acoperire de Muchii Minimă:** O acoperire de muchii cu cel mai mic cardinal posibil.
- **Număr de Acoperire cu Muchii $\beta_{1}(G)$:** Cardinalul unei acoperiri de muchii minime.
- **Cuplaj Perfect:** Un cuplaj care este și o acoperire de muchii.
- **Teorema lui Gallai:** Pentru orice graf $G$ fără vârfuri izolate, $\alpha_{1}(G) + \beta_{1}(G) = n$.

## 4. Arbori (din "4. Arbori.pdf")

### Definiție

- **Arbore:** Un graf **conex** și **fără cicluri**.
- **Pădure:** Un graf fără cicluri.

### Proprietăți Echivalente ale unui Arbore

Pentru un graf $G=(X,U)$ cu $n$ vârfuri și $m$ muchii, următoarele afirmații sunt echivalente:

1.  $G$ este arbore.
2.  $G$ este conex și $m = n-1$.
3.  $G$ este aciclic și $m = n-1$.
4.  Pentru oricare două vârfuri distincte din $G$, există un singur lanț ce le unește.
5.  $G$ este maximal aciclic (adăugarea oricărei muchii noi creează un ciclu).

**Corolar:** Orice arbore cu $n \ge 2$ vârfuri are cel puțin două vârfuri terminale.
**Centrul unui Arbore:** Centrul oricărui arbore constă dintr-un singur vârf sau din două vârfuri adiacente.

### Arbori Parțiali de Cost Minim (APM)

- **Graf Ponderat:** Un graf $(G, \omega)$ unde $\omega: U \to \mathbb{R}^+$ este o funcție care asociază fiecărei muchii un cost (pondere).
- **Arbore Parțial (Spanning Tree):** Un subgraf parțial al lui $G$ care este arbore.
- **Arbore Parțial de Cost Minim (APM / MST):** Un arbore parțial pentru care suma costurilor muchiilor este minimă.

### Algoritmi pentru APM

- **Algoritmul lui Kruskal:**
  1.  Se construiește o pădure $T$ cu $n$ vârfuri și 0 muchii.
  2.  Se alege muchia de pondere minimă care nu formează un ciclu cu muchiile deja existente în $T$ și se adaugă la $T$.
  3.  Se repetă pasul 2 până când $T$ are $n-1$ muchii.
- **Algoritmul lui Prim:**
  1.  Se alege un vârf arbitrar și se formează arborele $T_0$ cu acest vârf.
  2.  Se construiește arborele $T_{i+1}$ adăugând la $T_i$ muchia de pondere minimă care are exact o extremitate în $T_i$.
  3.  Se repetă pasul 2 până când $T$ are $n-1$ muchii.

## 5. Grafuri Plane și Planare (din "5. Grafuri plane şi planare.pdf")

### Definiții

- **Graf Plan:** Un graf ale cărui vârfuri sunt puncte pe plan, iar muchiile sunt curbe care nu se intersectează decât în vârfuri.
- **Graf Planar:** Un graf izomorf unui graf plan.
- **Fațetă:** O regiune a planului mărginită de muchiile unui graf plan.

### Formula lui Euler pentru Grafuri Conexe Plane

Pentru un graf conex planar cu $n$ vârfuri, $m$ muchii și $f$ fețe:
$$n - m + f = 2$$
**Corolare (pentru grafuri simple planare):**

- Dacă $n \ge 3$: $m \le 3n - 6$.
- Dacă $n \ge 3$ și graful nu are cicluri de lungime 3: $m \le 2n - 4$ (derivat din $4f \le 2m$ ).
  - Aceste corolare demonstrează că $K_5$ și $K_{3,3}$ nu sunt planare.

### Triangulații

- **Triangulație:** Un graf plan în care fiecare fațetă este mărginită de un ciclu de lungime 3.
- **Graf Maximal Planar:** Un graf planar în care adăugarea oricărei muchii generează un graf neplanar.
- **Teoremă:** Un graf este maximal planar dacă și numai dacă este o triangulație.
- **Corolar:** Pentru un graf maximal planar, $m = 3n - 6$.

## 6. Colorarea Grafurilor (din "6. Colorarea grafurilor.pdf")

### Colorarea Vârfurilor

- **k-Colorare a Vârfurilor:** O aplicație $f: X \to \{1, 2, ..., k\}$.
- **Colorare Corectă:** O k-colorare în care vârfurile adiacente au culori diferite.
- **Număr Cromatic $\chi(G)$:** Cel mai mic $k$ pentru care graful $G$ este k-colorabil.
- **Exemple:** $\chi(K_n)=n$, $\chi(C_{2n})=2$, $\chi(C_{2n+1})=3$, $\chi(K_{n,m})=2$.
- **Teorema lui Brooks:** Dacă $G$ este graf conex, $G \neq K_n$ și $\Delta(G) \ge 3$, atunci $\chi(G) \le \Delta(G)$.

### Colorarea Muchiilor

- **Colorare Corectă a Muchiilor:** O colorare în care muchiile adiacente au culori distincte.
- **Indice Cromatic $\chi'(G)$:** Cel mai mic $k$ pentru care există o k-colorare corectă a muchiilor.
- **Relații:** $\chi'(G) = \chi(L(G))$, $\chi'(G) \ge \Delta(G)$.
- **Teorema lui Vizing:** $\Delta(G) \le \chi'(G) \le \Delta(G)+1$.

### Colorarea Grafurilor Planare

- **Graf Dual Geometric $G^*$:** Se plasează un vârf în fiecare față a unui graf plan $G$; două vârfuri din $G^*$ sunt unite dacă fețele corespunzătoare din $G$ sunt adiacente.
- **Teoremă:** O hartă $G$ este k-colorabilă (fețele) $\iff$ graful său dual $G^*$ are o k-colorare corectă a vârfurilor.
- **Teorema Celor Patru Culori:** Orice graf planar este 4-colorabil ($\chi(G) \le 4$).
- **Teorema lui Heawood (5 culori):** Orice graf planar este 5-colorabil.

## 7. Parcurgerea Grafurilor (din "7. Parcurgerea grafurilor.pdf")

### Cicluri și Grafuri Euleriene (Parcurgerea Muchiilor)

- **Ciclu Eulerian:** Un ciclu care parcurge fiecare muchie a grafului exact o singură dată.
- **Graf Eulerian:** Un graf care conține un ciclu eulerian.
- **Teorema lui Euler:** Un graf conex este eulerian dacă și numai dacă toate vârfurile sale au grad par.
- **Lanț Eulerian:** Un lanț care parcurge fiecare muchie exact o singură dată. Un graf conex are un lanț eulerian dacă și numai dacă are exact zero sau două vârfuri de grad impar.
- **Algoritmul lui Fleury:** Construiește un ciclu eulerian prin parcurgerea muchiilor, alegând o muchie-punte doar dacă nu există altă opțiune.

### Cicluri și Grafuri Hamiltoniene (Parcurgerea Vârfurilor)

- **Ciclu Hamiltonian:** Un ciclu care parcurge fiecare vârf al grafului exact o singură dată.
- **Graf Hamiltonian:** Un graf care conține un ciclu hamiltonian.
- _Problema determinării unui ciclu hamiltonian este NP-completă; nu există un criteriu simplu, doar condiții suficiente._

### Condiții Suficiente pentru Grafuri Hamiltoniene ($n \ge 3$)

- **Teorema lui Dirac (1952):** Dacă $\delta(G) \ge n/2$, atunci $G$ este hamiltonian.
- **Teorema lui Ore (1960):** Dacă pentru orice pereche de vârfuri neadiacente $u,v$, avem $\text{deg}(u) + \text{deg}(v) \ge n$, atunci $G$ este hamiltonian.
