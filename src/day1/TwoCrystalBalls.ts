export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  for (let i = 0; i < breaks.length; i += jumpAmount) {
    let j;

    if (breaks[i]) {
      j = jumpAmount - i;
      
      while (!breaks[j]) {
        j++;
      }

      return j;
    }
  }

  return -1;
}