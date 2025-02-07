export enum GraphType {
  Simple = 'simple',
  Directed = 'directed',
}

export type GraphNode = {
  id: string
  label: string
}

export type GraphEdge = {
  source: string
  target: string
}

export type Graph = {
  type: GraphType.Simple | GraphType.Directed
  nodes: GraphNode[]
  edges: GraphEdge[]
}

export type GraphEdgePossibility = GraphEdge & {
  isPresent: boolean
}

export type Tab<TabId extends PropertyKey> = {
  id: TabId
  label: string
}

export type BiDimensionalCoordinates = {
  x: number
  y: number
}

export type DraggingState = {
  cursorOffset: BiDimensionalCoordinates
  node: GraphNode
}
