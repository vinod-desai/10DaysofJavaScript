/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  let rev = s;
  try {
    rev = s
      .split("")
      .reverse()
      .join("");
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log(rev);
  }
}
