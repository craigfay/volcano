
export type Element =
  | Rect

export type Rect = {
  addTo: string,
  width: number,
  height: number,
  stroke: number,
  color: string,
}

export interface Options {
  shouldRotate?: boolean,
}

export interface Figure3D {
  create(options: Options): Figure3D,
}