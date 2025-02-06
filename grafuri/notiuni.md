<script setup lang="ts">
import GraphVisualization from './components/GraphVisualization.vue'
</script>

# Noțiuni

## Graf neorientat (sau graf) {#graf}

Perechea de mulțimi $G=(X, U)$, unde $X$ este o mulțime nevidă de elemente distincte, iar $U$ este formată din perechi neordonate de elemente din $X$, se numește graf neorientat sau graf.

## Mulțimea de vârfuri {#varfuri}

Mulțimea $X$ se numește mulțimea de vârfuri a grafului $G$ și elementele sale $x_1, x_2, \ldots, x_n$ se numesc vârfuri.

$$
X = \{x_1, x_2, \ldots, x_n\}
$$

## Mulțimea de muchii {#muchii}

Mulțimea $U$ se numește mulțimea de muchii a grafului $G$ și elementele sale $u_1, u_2, \ldots, u_m$ se numesc muchii.

$$
U = \{u_1, u_2, \ldots, u_m\}
$$

## Ordinul grafului {#ordin}

Numărul de vârfuri al grafului $G$ se numește ordinul grafului și se notează cu $|X|$.

## Extremități ale unei muchii {#extremitati}

Fie $u = (x, y)$ o muchie a grafului $G$. Atunci $x$ și $y$ se numesc extremități ale muchiei $u$.

### Notă

În cazul grafului neorientat, extremitățile unei muchii sunt indistincte, adică $(x, y) = (y, x)$.

## Vârfuri adiacente {#adiacente}

Două vârfuri $x$ și $y$ se numesc adiacente dacă există o muchie $(x, y)$ în graful $G$.

### Notație

$$
x \sim y
$$

## Muchii adiacente {#adiacente-muchii}

Două muchii se numesc adiacente dacă au cel puțin o extremitate comună.

### Notație

$$
x \sim y
$$

## Incidență {#incidenta}

Un vârf $x$ este incident cu o muchie $u$ dacă $x$ este o extremitate a muchiei $u$. În acest caz, spunem că muchia $u$ este incidentă cu vârful $x$.

<div class="h-[300px]">
  <GraphVisualization :graph="{
    nodes: [
      { id: '1', label: '1' },
      { id: '2', label: '2' },
      { id: '3', label: '3' },
      { id: '4', label: '4' },
      { id: '5', label: '5' },
    ],
    edges: [
      { source: '1', target: '3' },
      { source: '2', target: '3' },
      { source: '2', target: '4' },
      { source: '3', target: '4' },
    ],
  }" />
</div>

$$
\text{Muchii:} (1, 3); (2, 3); (2, 4); (3, 4)
\newline
1 \sim 3; 2 \sim 4; 4 \not\sim 5
\newline
(2, 3) \sim (2, 4)
$$

## Vecinătatea vârfului {#vecinatate}

Mulţimea tuturor vârfurilor grafului $G$ adiacente cu vârful $x$ se numeşte vecinatea vârfului $x$ şi se notează:

$$
N_g(x) = \{y \in X \mid x \sim y\}
$$

## Tipuri de grafuri

### Graf vid

Graf vid este graful fără de muchii. Se notează prin $O_n$.

<div class="h-[200px]">
  <GraphVisualization :graph="{
    nodes: [
      { id: '1', label: '1' },
      { id: '2', label: '2' },
      { id: '3', label: '3' },
      { id: '4', label: '4' },
      { id: '5', label: '5' },
      { id: '6', label: '6' },
    ],
    edges: [],
  }" />
</div>

### Graf trivial

Graf trivial este graful pentru care $U = \emptyset$ și $|X| = 1$. Se notează prin $O_1$.

<div class="h-[200px]">
  <GraphVisualization :graph="{
    nodes: [
      { id: '1', label: '1' },
    ],
    edges: [],
  }" />
</div>

### Graf complet

Graf complet este graful, oricare două vârfuri ale căruia sunt adiacente. Se notează prin $K_n$.

#### Exemple:

$$
K_3:
$$

<div class="h-[200px]">
  <GraphVisualization :graph="{
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
  }" />
</div>

$$
K_5:
$$

<div class="h-[200px]">
  <GraphVisualization :graph="{
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
  }" />
</div>

### Graf bipartit

Graful, mulțimea de vârfuri a căruia poate fi divizată în două submulțimi $X_1$ și $X_2$ astfel încât fiecare muchie are o extremitate în $X_1$, iar alta extremitate în $X_2$, se numește graf bipartit. Se notează graful bipartit prin $G=(X_1, X_2, U)$.

#### Exemple:

$$
G=(X_1, X_2, U)
\newline
X_1 = \{1, 2\}; X_2 = \{3, 4, 5\}
\newline
U = {(1, 4), (2, 3), (2, 5)}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="{
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
  }" />
</div>
