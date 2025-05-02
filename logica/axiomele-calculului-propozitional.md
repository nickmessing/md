# Axiomele calculului propozițional

Axiomele sunt formule considerate adevărate prin definiție în [calculul propozițional](./calculul-propozitiilor.md). Ele formează punctul de plecare pentru deducerea altor formule adevărate (teoreme). Axiomele se împart în patru grupe, bazate pe conectorii logici pe care îi implică.

## Grupa I: Implicația

Axiomele din această grupă conțin doar conectorul de implicație ($\rightarrow$).

1.  <span id="axioma-i1">$A \rightarrow (B \rightarrow A)$</span>
2.  <span id="axioma-i2">$(A \rightarrow (B \rightarrow C)) \rightarrow ((A \rightarrow B) \rightarrow (A \rightarrow C))$</span>

## Grupa II: Implicația și Conjuncția

Aceste axiome introduc conjuncția ($\land$) alături de implicație.

1.  <span id="axioma-ii1">$(A \land B) \rightarrow A$</span>
2.  <span id="axioma-ii2">$(A \land B) \rightarrow B$</span>
3.  <span id="axioma-ii3">$(A \rightarrow B) \rightarrow ((A \rightarrow C) \rightarrow (A \rightarrow (B \land C)))$</span>

## Grupa III: Implicația și Disjuncția

Aceste axiome introduc disjuncția ($\lor$) alături de implicație.

1.  <span id="axioma-iii1">$A \rightarrow (A \lor B)$</span>
2.  <span id="axioma-iii2">$B \rightarrow (A \lor B)$</span>
3.  <span id="axioma-iii3">$(A \rightarrow C) \rightarrow ((B \rightarrow C) \rightarrow ((A \lor B) \rightarrow C))$</span>

## Grupa IV: Implicația și Negația

Aceste axiome introduc negația ($\lnot$) alături de implicație.

1.  <span id="axioma-iv1">$A \rightarrow \overline{\overline{A}}$</span>
2.  <span id="axioma-iv2">$\overline{\overline{A}} \rightarrow A$</span>
3.  <span id="axioma-iv3">$(A \rightarrow B) \rightarrow (\overline{B} \rightarrow \overline{A})$</span> (Legea contrapoziției)

Aceste axiome, împreună cu [regulile de deducție](./calculul-propozitiilor.md#regulile-de-bază-de-deducție) (Substituție și Modus Ponens), formează baza sistemului formal al calculului propozițional. Orice tautologie din algebra propozițională poate fi demonstrată ca teoremă în acest sistem.
