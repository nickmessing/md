import { Graph, GraphType } from './components/types'

export const grafVid: Graph = {
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

export const grafTrivial: Graph = {
  type: GraphType.Simple,
  nodes: [{ id: '1', label: '1' }],
  edges: [],
}

export const grafComplet3: Graph = {
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

export const grafComplet5: Graph = {
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

export const grafBipartit: Graph = {
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

export const grafBipartit3_3: Graph = {
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

export const grafBipartit1_3: Graph = {
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

export const grafCompl1: Graph = {
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

export const grafCompl2: Graph = {
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
    { source: '2', target: '4' },
    { source: '2', target: '5' },
    { source: '3', target: '5' },
  ],
}

export const grafMuc1: Graph = {
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
    { source: '2', target: '3' },
    { source: '3', target: '4' },
  ],
}

export const grafMuc2: Graph = {
  type: GraphType.Simple,
  nodes: [
    { id: 'a', label: '1,3' },
    { id: 'b', label: '2,3' },
    { id: 'c', label: '3,4' },
    { id: 'd', label: '1,2' },
    { id: 'e', label: '1,4' },
  ],
  edges: [
    { source: 'a', target: 'b' },
    { source: 'a', target: 'c' },
    { source: 'a', target: 'd' },
    { source: 'a', target: 'e' },
    { source: 'b', target: 'c' },
    { source: 'b', target: 'd' },
    { source: 'c', target: 'e' },
    { source: 'd', target: 'e' },
  ],
}

export const grafIzomorf1: Graph = {
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

export const grafIzomorf2: Graph = {
  type: GraphType.Simple,
  nodes: [
    { id: 'a', label: 'a' },
    { id: 'b', label: 'b' },
    { id: 'c', label: 'c' },
    { id: 'd', label: 'd' },
    { id: 'e', label: 'e' },
    { id: 'f', label: 'f' },
  ],
  edges: [
    { source: 'a', target: 'b' },
    { source: 'a', target: 'd' },
    { source: 'a', target: 'f' },
    { source: 'c', target: 'b' },
    { source: 'c', target: 'd' },
    { source: 'c', target: 'f' },
    { source: 'e', target: 'b' },
    { source: 'e', target: 'd' },
    { source: 'e', target: 'f' },
  ],
}

export const grafOrientat1: Graph = {
  type: GraphType.Directed,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
  ],
  edges: [
    { source: '1', target: '3' },
    { source: '2', target: '1' },
    { source: '2', target: '5' },
    { source: '3', target: '2' },
    { source: '3', target: '5' },
    { source: '4', target: '1' },
    { source: '4', target: '5' },
    { source: '5', target: '4' },
  ],
}

export const grafOrientat2: Graph = {
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
}

export const grafOrientat3: Graph = {
  type: GraphType.Directed,
  nodes: [
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
  ],
  edges: [
    { source: '1', target: '2' },
    { source: '3', target: '1' },
    { source: '3', target: '2' },
    { source: '3', target: '4' },
    { source: '4', target: '1' },
    { source: '4', target: '2' },
  ],
}
