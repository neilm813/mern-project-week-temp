// Utils are just small helper functions that you may want to use in multiple places that are not something more specific, like components, hooks

// Gets a random integer between two numbers
export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min;
}
