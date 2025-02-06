<script setup lang="ts">
import GraphVisualization from './components/GraphVisualization.vue'
import { GraphType } from './components/types'

const grafVid = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
    { id: '6', label: '6' },
  ],
  edges: [],
}

const grafTrivial = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
  ],
  edges: [],
}

const grafComplet3 = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '2', target: '3' },
  ],
}

const grafComplet5 = {
  type: GraphType.Simple,
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
    { source: '1', target: '4' },
    { source: '1', target: '5' },
    { source: '2', target: '3' },
    { source: '2', target: '4' },
    { source: '2', target: '5' },
    { source: '3', target: '4' },
    { source: '3', target: '5' },
    { source: '4', target: '5' },
  ],
}

const grafBipartit = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
  ],
  edges: [
    { source: '1', target: '4' },
    { source: '2', target: '3' },
    { source: '2', target: '5' },
  ],
}

const grafBipartit3_3 = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
    { id: '6', label: '6' },
  ],
  edges: [
    { source: '1', target: '4' },
    { source: '1', target: '5' },
    { source: '1', target: '6' },
    { source: '2', target: '4' },
    { source: '2', target: '5' },
    { source: '2', target: '6' },
    { source: '3', target: '4' },
    { source: '3', target: '5' },
    { source: '3', target: '6' },
  ],
}

const grafBipartit1_3 = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '4' },
  ],
}

const grafCompl1 = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '1', target: '4' },
    { source: '1', target: '5' },
    { source: '2', target: '3' },
    { source: '3', target: '4' },
    { source: '4', target: '5' },
  ],
}

const grafCompl2 = {
  type: GraphType.Simple,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
  ],
  edges: [
    { source: '1', target: '3' },
    { source: '1', target: '5' },
    { source: '2', target: '3' },
    { source: '2', target: '4' },
    { source: '3', target: '5' },
    { source: '4', target: '5' },
  ],
}
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
