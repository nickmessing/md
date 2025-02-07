<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useElementSize} from '@vueuse/core'
import GraphVisualization from './components/GraphVisualization.vue'
import { GraphType } from './components/types'
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
  multigraf,
  pseudoGraf,
} from './tipuri.ts'

const fullWidth = useTemplateRef<HTMLDivElement>('full-width')

const { width } = useElementSize(fullWidth)
</script>

# Tipuri de grafuri

<div ref="full-width" class="w-full" />

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
  <GraphVisualization
    v-if="width"
    :graph="grafBipartit"
    :defaultSize="{
      height: 200,
      width
    }"
    :defaultNodePositions="[
      { x: 292, y: 40 },
      { x: 359, y: 38 },
      { x: 295, y: 139 },
      { x: 357, y: 140 },
      { x: 417, y: 143 }
    ]"
  />
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
  <GraphVisualization
    v-if="width"
    :graph="grafIzomorf1"
    :defaultSize="{
      height: 200,
      width
    }"
    :defaultNodePositions="[
      { x: 287.5987642209948, y: 52.586146806623624 },
      { x: 345.33173456218475, y: 36.28140381158778 },
      { x: 402.35465340884076, y: 54.92177011320642 },
      { x: 285.6794900510336, y: 144.92347181617967 },
      { x: 400.39661438524973, y: 147.53335545507963 },
      { x: 342.6387433716951, y: 163.75385199732304 }
    ]"
  />
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
  <GraphVisualization
    v-if="width"
    :graph="grafIzomorf2"
    :defaultSize="{
      height: 200,
      width
    }"
    :defaultNodePositions="[
      { x: 364.4414946113241, y: 100.41886295679576 },
      { x: 254.15817391032888, y: 68.93165569587678 },
      { x: 360.60755658046384, y: 40.546324743982865 },
      { x: 472.18414053313643, y: 100.98447098571827 },
      { x: 359.36497536871724, y: 160.1987718790276 },
      { x: 253.24365899602978, y: 128.91991373859844 }
    ]"
  />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafIzomorf2))}`">Editor</a></p>

## Graf orientat

Perechea de mulțimi $G=(X, A)$, unde $X$ este o mulțime nevidă de elemente distincte, iar $A$ este formată din perechi **ordonate** de elemente din $X$, se numește graf orientat.

Mulțimea $A$ se numește mulțimea arcelor grafului $G$.

Pentru arcul $(x, y)$, vârful $x$ este extremitate inițială, iar $y$ este extremitate finală.

În graful orientat, perechile de vârfuri $(x_i, x_j)$ și $(x_j, x_i)$ reprezintă arce diferite. Graful orientat, care $\forall x_i, x_j \in X$ conține în același timp arcele $(x_i, x_j)$ și $(x_j, x_i)$ pentru $i \neq j$ se numește **simetric**. În caz contrar - **antisimetric**.

Graful antisimetric cu un număr maxim de arce se numeşte **turnir**.

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
  <GraphVisualization
    v-if="width"
    :graph="grafOrientat1"
    :defaultSize="{
      height: 200,
      width
    }"
    :defaultNodePositions="[
      { x: 256.84783746245233, y: 50.05448116125311 },
      { x: 382.7389019303396, y: 21.375916834188075 },
      { x: 331.4641384145417, y: 116.55666117977609 },
      { x: 314.0844303525652, y: 173.97680281537765 },
      { x: 434.86486365070175, y: 138.03634657200593 }
    ]"
  />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafOrientat1))}`">Editor</a></p>

$$
\textbf{Graf simetric}
\newline
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
  <GraphVisualization
    v-if="width"
    :graph="grafOrientat2"
    :defaultSize="{
      height: 200,
      width
    }"
    :defaultNodePositions="[
      { x: 241.3344725415201, y: 37.35463408731846 },
      { x: 239.05451453246278, y: 157.39443041786907 },
      { x: 344.01704633781884, y: 99.34625497982151 },
      { x: 449.8808265594981, y: 42.958731610981495 },
      { x: 445.71313853081955, y: 162.94594980876596 }
    ]"
  />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(grafOrientat2))}`">Editor</a></p>

$$
\textbf{Graf antisimetric, turnir}
\newline
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

## Multigraf

Multigraful este graful în care există cel puțin o pereche de vârfuri distincte $x_i, x_j$, care reprezintă mai mult decât o muchie a grafului. În acest caz se spune că vârfurile $x_i, x_j$ sunt unite cu ajutorul a $k \geq 2$ muchii.

### Exemplu:

$$
G(X, U):
\newline
X = \{1, 2, 3, 4, 5\}
\newline
U = \{ \newline
(1, 2), (1, 2), (1, 4), (2, 5), \newline
(3, 4), (3, 5), (3, 5), (3, 5) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization
    v-if="width"
    :graph="multigraf"
    :defaultSize="{
      height: 200,
      width
    }"
    :defaultNodePositions="[
      { x: 295.7338628087382, y: 37.67893938312949 },
      { x: 414.4293875660266, y: 54.06284920584302 },
      { x: 342.2262408638906, y: 102.04564221790058 },
      { x: 226.59360552233352, y: 135.41943657511547 },
      { x: 441.0169032390118, y: 170.79313261800965 }
    ]"
  />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(multigraf))}`">Editor</a></p>

## Pseudograf

Pseudograful este multigraful care conține cel puțin o muchie, extremitățile căreia coincid (**buclă**).

### Exemplu:

$$
G(X, U):
\newline
X = \{1, 2, 3, 4\}
\newline
U = \{ \newline
(1, 1), (1, 2), (2, 3), \newline
(2, 4),(2, 4), (3, 3) \newline
\}
$$

<div class="h-[200px]">
  <GraphVisualization :graph="pseudoGraf" />
</div>

<p><a :href="`./editor.html?graph=${encodeURIComponent(JSON.stringify(pseudoGraf))}`">Editor</a></p>
