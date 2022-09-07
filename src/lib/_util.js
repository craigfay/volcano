
export const chromaticScale = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']

export function pitchUp(note, semitones) {
  let idx = chromaticScale.findIndex(n => n == note)
  if (idx == -1) { throw new Error('Invalid Note') }
  let newIdx = (idx + semitones) % chromaticScale.length
  if (newIdx < 0) { newIdx += chromaticScale.length }
  return chromaticScale[newIdx]
}

export function pitchDown(note, semitones) {
  return pitchUp(note, 0 - semitones)
}

export const chordQualities = [
  { longName: 'Major 7', shortName: 'maj7', intervals: [0, 4, 7, 11] },
  { longName: 'Minor 7', shortName: 'min7', intervals: [0, 3, 7, 10] },
  { longName: 'Major 6', shortName: 'maj6', intervals: [0, 4, 7, 9] },
  { longName: 'Minor 6', shortName: 'maj6', intervals: [0, 3, 7, 9] },
  { longName: 'Dominant 7', shortName: 'dom7', intervals: [0, 4, 7, 10] },
  { longName: 'Half Diminished', shortName: 'half-dim', intervals: [0, 3, 6, 10] },
  { longName: 'Diminished', shortName: 'dim', intervals: [0, 3, 6, 9] },
]

export function applyInversion(intervals = [], n = 1) {
  let result = [...intervals]
  for (let i = 0; i < n; i++) {
    const [first, ...rest] = result
    result = [...rest, first]
  }
  return result
}