function calculateTotal(prices) {
  let total = 0;
  //error happens as its goes till at index=3 where its undefined and add NaN to total creating a blunder
  for (let i = 0; i <= prices.length; i++) {
    total += prices[i];
  }
  return total;
}
console.log(calculateTotal([10, 20, 30]));