
// Defining commonly used animation parameters

const flySpeed = 250;
const flyDist = 150;

export const flyIn = {
  left: { x: -flyDist, duration: flySpeed, delay: flySpeed },
  right: { x: flyDist, duration: flySpeed, delay: flySpeed },
}

export const flyOut = {
  left: { x: -flyDist, duration: flySpeed },
  right: { x: flyDist, duration: flySpeed },
}

export const fadeParams = { duration: 400 };
export const fadeParamsDelayed = { duration: 400, delay: 400 };
export const flipParams = { delay: 200, duration: 400 }
