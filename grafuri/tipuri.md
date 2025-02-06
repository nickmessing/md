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
