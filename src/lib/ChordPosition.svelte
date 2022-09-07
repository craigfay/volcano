
<script>
import { pitchUp, pitchDown } from './_util'

  export let tuning = ['e', 'a', 'd', 'g', 'b', 'e']
  export let intervals = [0, 4, 7, 11]
  export let root = 'f'

  // Layout will break if this number doesn't correspond
  // to a valid tailwind column number class
  export let maxFretRange = 6;

  export let lowestString = 0; 

  if (lowestString < 0 || lowestString > 2) {
    throw new Error('Invalid `lowestString` prop')
  }

  $: rootAfterInversion = pitchUp(root, intervals[0])

  // Finding root position
  $: rootPosition = (function() {
    const note = rootAfterInversion;
    let rp = { string: lowestString, fret: 0, note }
    while (pitchUp(tuning[rp.string], rp.fret) != note) {
      rp.fret += 1;
    }
    return rp
  })()

  // Finding relevant positions on higher strings
  $: targetNotes = intervals.map(i => pitchUp(root, i))


  function getNonRootPositions(rootPosition, targetNotes) {
    let positions = [];

    for (let i = 1; i < 4; i++) {
      let string = rootPosition.string + i;
      let fret = rootPosition.fret;
      let noteAtRootFret = pitchUp(tuning[string], fret)

      let positionsOnIthString = findTargetFretsOnString({
        targetNotes,
        noteAtRootFret,
        string,
      });

      positions = [...positions, ...positionsOnIthString]
    }

    return positions;
  }

  function findTargetFretsOnString({ targetNotes, string, noteAtRootFret }) {
    let positions = [];
    for (let i = 0; i < Math.floor(maxFretRange / 2); i++) {
      {
        // Checking higher frets
        let fret = rootPosition.fret + i;
        let note = pitchUp(noteAtRootFret, i);
        if (targetNotes.includes(note)) {
          positions.push({ string, fret, note })
        }
      }
      {
        // Checking lower frets
        if (i == 0) continue;
        let fret = rootPosition.fret - i;
        let note = pitchDown(noteAtRootFret, i);
        if (targetNotes.includes(note)) {
          positions.push({ string, fret, note })
        }
      }
    }

    return positions;
  }

  function coinFlip() {
    return Math.random() > 0.5
  }

  // Use randomness to find a combination of positions
  // in a list where all target notes are represented,
  // and no string is used more than once.
  function findBestPositions(positions, rootPosition, isOctave = false) {
    let bestSolution = [];
    let maybeSolution;

    for (let i = 0; i < 1000; i++) {
      maybeSolution = [];
      let haveUsedString = {};
      let notes = new Set();

      positions.forEach(position => {

        // Disallowing negative frets
        if (position.fret < 0) return;

        if (position.note == rootPosition.note) return;

        if (!haveUsedString[position.string] && coinFlip()) {
          haveUsedString[position.string] = true
          maybeSolution.push(position)
          notes.add(position.note)
        }
      })

      // Three is the number of non-root notes,
      // and ideally, we want all of them
      if (notes.size == 3) {
        return [rootPosition, ...maybeSolution]
      }

      if (notes.size > bestSolution.length) {
        bestSolution = maybeSolution
      }
    }

    if (!isOctave && bestSolution.length < 3) {
      const octavedRootPosition = { ...rootPosition, fret: rootPosition.fret + 12 }
      const octavedPositions = positions.map(p => ({ ...p, fret: p.fret + 12 }))
      const octavedSolution = findBestPositions(octavedPositions, octavedRootPosition, true)
      if (octavedSolution.length > bestSolution.length) return octavedSolution
    }

    return [rootPosition, ...bestSolution];

  }

  $: nonRootPositions = getNonRootPositions(rootPosition, targetNotes);
  $: allPositions = findBestPositions(nonRootPositions, rootPosition);

  // Find lowest fret for labeling purposes
  function getLowestFret(allPositions) {
    let lowestFret = Infinity
    allPositions.forEach(position => {
      lowestFret = Math.min(lowestFret, position.fret)
    })
    return lowestFret;
  }

  $: lowestFret = getLowestFret(allPositions)

  $: isPosition = function(string, fret) {
    return Boolean(allPositions.find(p => p.string == string && p.fret == fret))
  }

  $: getNote = function(string, fret) {
    return pitchUp(tuning[string], fret)
  }

  $: reversedStrings = tuning
    .map((note, idx) => [note, idx])
    .reverse()

</script>

<div>
  {#each reversedStrings as [_note, string]}
    <div class={`grid grid-cols-${maxFretRange} border w-full`}>
      {#each [...new Array(maxFretRange)] as _, idx}
        <div class="border-l py-1 flex justify-center" class:border-l-8={lowestFret != 1 && lowestFret + idx == 1}>

          <!-- Finger Position -->
          {#if isPosition(string, lowestFret + idx)}
            <div class="rounded-full bg-gray-600 text-white font-bold h-7 w-7 uppercase text-xs flex justify-center items-center">
              {getNote(string, lowestFret + idx)}
            </div>

          {:else if idx == 0}
            <!-- Placeholder to preserve spacing -->
            <div class="inline p-1 h-7 w-7"></div>
          {/if}

        </div>
      {/each}
    </div>
  {/each}

  <!-- Fret Labels -->
  <div class={`grid grid-cols-${maxFretRange} w-full`}>
    {#each [...new Array(maxFretRange)] as _, idx}
      <div class="flex justify-center font-bold text-gray-600 p-2">{lowestFret + idx}</div>
    {/each}
  </div>

</div>