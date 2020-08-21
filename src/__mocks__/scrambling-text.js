export default function Scrambler() {
  return {
    scramble: (text, onScramble) => {
      onScramble(text);
    },
  };
}
