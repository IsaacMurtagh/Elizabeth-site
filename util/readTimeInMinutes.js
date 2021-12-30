
const wpm = 225;

export default function readTimeInMinutes(s) {
  const numWords = s.split(' ').length;
  return Math.ceil(numWords / wpm);
}