<script setup lang="ts">
import { GraphType } from './components/types'
import GraphVisualization from './components/GraphVisualization.vue'

const graf = {
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
    { source: '2', target: '3' },
    { source: '2', target: '4' },
    { source: '3', target: '4' },
  ],
}
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
  <GraphVisualization :graph="graf" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(graf))}`">Editor</a></p>

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
