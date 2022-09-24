
// Defining commonly used animation parameters

const flySpeed = 250;
const flyDist = 150;

export const flyIn = {
  left: { x: -flyDist, duration: flySpeed, delay: flySpeed },
  right: { x: flyDist, duration: flySpeed, delay: flySpeed },
  top: { y: -flyDist, duration: flySpeed, delay: flySpeed },
  bottom: { y: flyDist, duration: flySpeed, delay: flySpeed },
}

export const delayedFlyIn = {
  left: (delay) => ({ x: -flyDist, duration: flySpeed, delay }),
  right: (delay) => ({ x: flyDist, duration: flySpeed, delay }),
  top: (delay) => ({ y: -flyDist, duration: flySpeed, delay }),
  bottom: (delay) => ({ y: flyDist, duration: flySpeed, delay }),
}

export const flyOut = {
  left: { x: -flyDist, duration: flySpeed },
  right: { x: flyDist, duration: flySpeed },
}

export const fadeParams = { duration: 400 };
export const fadeParamsDelayed = { duration: 400, delay: 400 };
export const flipParams = { delay: 200, duration: 400 }
