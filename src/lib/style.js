import colors from 'tailwindcss/colors';

export let colorName = 'indigo';
export let color = colors[colorName];

export let styleAttr = obj => Object.entries(obj)
  .map(([k, v]) => `${k}:${v}`)
  .join(';');