<script setup lang="ts">
import GraphVisualization from "./components/GraphVisualization.vue";
import { GraphType } from "./components/types";
import {
  grafVid,
  grafTrivial,
  grafComplet3,
  grafComplet5,
  grafBipartit,
  grafBipartit3_3,
  grafBipartit1_3,
  grafCompl1,
  grafCompl2,
  grafMuc1,
  grafMuc2,
  grafIzomorf1,
  grafIzomorf2,
  grafOrientat1,
  grafOrientat2,
  grafOrientat3,
} from "./tipuri.ts";
</script>

# Tipuri de grafuri

## Graf vid

Graf vid este graful fără de muchii. Se notează prin $O_n$.

<div class="h-[200px]">
  <GraphVisualization :graph="grafVid" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafVid))}`">Editor</a></p>

## Graf trivial

Graf trivial este graful pentru care $U = \emptyset$ și $|X| = 1$. Se notează prin $O_1$.

<div class="h-[200px]">
  <GraphVisualization :graph="grafTrivial" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafTrivial))}`">Editor</a></p>

## Graf complet

Graf complet este graful, oricare două vârfuri ale căruia sunt adiacente. Se notează prin $K_n$.

### Exemple:

$$
K_3:
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafComplet3" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafComplet3))}`">Editor</a></p>

$$
K_5:
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafComplet5" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafComplet5))}`">Editor</a></p>

## Graf bipartit

Graful, mulțimea de vârfuri a căruia poate fi divizată în două submulțimi $X_1$ și $X_2$ astfel încât fiecare muchie are o extremitate în $X_1$, iar alta extremitate în $X_2$, se numește graf bipartit. Se notează graful bipartit prin $G=(X_1, X_2, U)$.

### Exemple:

$$
G=(X_1, X_2, U)
\newline
X_1 = \{1, 2\}; X_2 = \{3, 4, 5\}
\newline
U = {(1, 4), (2, 3), (2, 5)}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafBipartit" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafBipartit))}`">Editor</a></p>

## Graf bipartit complet

Dacă în graful bipartit fiecare vârf din $X_1$ este adiacent cu toate vârfurile din $X_2$, atunci avem un graf bipartit complet. Notație $K_{p,q}$. $m(K_{p,q})=|X_1| \cdot |X_2|$.

### Exemple:

$$
K_{3,3}:
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafBipartit3_3" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafBipartit3_3))}`">Editor</a></p>

$$
K_{1,3}:
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafBipartit1_3" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafBipartit1_3))}`">Editor</a></p>

#### Notă

Grafurile $K_{1,n}$ se mai numesc stele.

<!-- Graf complementar al grafului G este graful, cu aceeaşi mulţime de
vârfui X, în care două vârfuri sunt adiacente dacă şi numai dacă ele nu
sunt adiacente în G. Se notează graful complementar prin . -->

## Grafuri complementare

Dacă $G=(X, U)$ este un graf, atunci graful complementar al lui $G$ este graful $G'=(X, U')$, unde $U' = \{(x, y) \in X \times X | (x, y) \notin U\}$. Se notează graful complementar al lui $G$ prin $\overline{G}$.

### Exemplu:

$$
G(X, U):
\newline
X = \{1, 2, 3, 4, 5\}
\newline
U = \{(1, 2), (1, 4), (1, 5), (2, 3), (3, 4), (4, 5)\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafCompl1" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafCompl1))}`">Editor</a></p>

$$
\overline{G}(X, U'):
\newline
U' = \{(1, 3), (2, 4), (2, 5), (3, 5)\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafCompl2" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafCompl2))}`">Editor</a></p>

## Grafuri al muchiilor

Dacă $G=(X, U)$ este un graf, atunci graful muchiilor lui $G$ este graful $L(G)=(U, U')$, unde $U'$ este mulțimea de vârfuri a grafului muchiilor. Două vârfuri din $U'$ sunt adiacente dacă și numai dacă muchiile corespunzătoare lor sunt adiacente în $G$. Se notează graful muchiilor lui $G$ prin $L(G)$.

### Exemplu:

$$
G(X, U):
\newline
X = \{1, 2, 3, 4\}
\newline
U = \{(1, 2), (1, 3), (1, 4), (2, 3), (3, 4)\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafMuc1" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafMuc1))}`">Editor</a></p>

$$
L(G)(U, U'):
\newline
U = \{(1, 2), (1, 3), (1, 4), (2, 3), (3, 4)\}
\newline
U' = \{ \newline
  ((1, 3), (2, 3)), \newline
  ((1, 3), (3, 4)), \newline
  ((1, 3), (1, 2)), \newline
  ((1, 3), (1, 4)), \newline
  ((2, 3), (3, 4)), \newline
  ((2, 3), (1, 2)), \newline
  ((3, 4), (1, 4)), \newline
  ((1, 2), (1, 4)) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafMuc2" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafMuc2))}`">Editor</a></p>

## Grafuri izomorfe

Fie $G=(X, U)$ și $H=(Y, V)$ două grafuri. O bijecție $\varphi: X \to Y$ se numește izomorfism al grafurilor $G$ și $H$ dacă pentru $\forall u, v \in X$ imaginile lor $\varphi(u), \varphi(v) \in Y$ sunt adiacente (în $H$) dacă și numai dacă vârfurile $u$ și $v$ sunt adiacente în $G$. Dacă există un asemenea izomorfism, se spune că grafurile $G$ și $H$ sunt izomorfe. Se notează $G \cong H$.

### Exemplu:

$$
G(X, U):
\newline
X = \{1, 2, 3, 4, 5, 6\}
\newline
U = \{ \newline
(1, 4), (1, 5), (1, 6), (2, 4), (2, 5), \newline
(2, 6), (3, 4), (3, 5), (3, 6) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafIzomorf1" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafIzomorf1))}`">Editor</a></p>

$$
H(Y, V):
\newline
Y = \{a, b, c, d, e, f\}
\newline
V = \{ \newline
(a, b), (a, c), (a, d), (b, c), (b, d), \newline
(b, e), (c, e), (d, e), (d, f) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafIzomorf2" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafIzomorf2))}`">Editor</a></p>

## Graf orientat

Perechea de mulțimi $G=(X, A)$, unde $X$ este o mulțime nevidă de elemente distincte, iar $A$ este formată din perechi **ordonate** de elemente din $X$, se numește graf orientat.

Mulțimea $A$ se numește mulțimea arcelor grafului $G$.

### Exemple:

$$
G(X, A):
\newline
X = \{1, 2, 3, 4, 5\}
\newline
A = \{ \newline
(1, 3), (2, 1), (2, 5), (3, 2), \newline
(3, 5), (4, 1), (4, 5), (5, 4) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafOrientat1" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafOrientat1))}`">Editor</a></p>

<!-- export const grafOrientat2: Graph = {
  type: GraphType.Directed,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '1' },
    { source: '2', target: '3' },
    { source: '3', target: '1' },
    { source: '3', target: '2' },
    { source: '3', target: '4' },
    { source: '3', target: '5' },
    { source: '4', target: '3' },
    { source: '4', target: '5' },
    { source: '5', target: '3' },
    { source: '5', target: '4' },
  ],
} -->

$$
G(X, A):
\newline
X = \{1, 2, 3, 4, 5\}
\newline
A = \{ \newline
(1, 2), (1, 3), (2, 1), (2, 3), \newline
(3, 1), (3, 2), (3, 4), (3, 5), \newline
(4, 3), (4, 5), (5, 3), (5, 4) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafOrientat2" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafOrientat2))}`">Editor</a></p>

$$
G(X, A):
\newline
X = \{1, 2, 3, 4\}
\newline
A = \{ \newline
(1, 2), (3, 1), (3, 2), \newline
(3, 4), (4, 1), (4, 2) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="grafOrientat3" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafOrientat3))}`">Editor</a></p>
