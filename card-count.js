let count = 0;

function cc (card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    // unchaged
  } else if (
    card === 10 ||
  card === "J" ||
  card === "K" ||
  card === "Q" ||
  card === "A") {
    count--;
  }
  let decision;
  if (count > 0) {
    decision = "Bet";
  } else {
    decision = "Hold";
  }

  return count + " " + decision;
}

console.log(cc(2));
console.log(cc(6));
console.log(cc(10));
console.log (cc("A"));

