function turing(calculo) {
  let results = [];

  for (let i = 0; i < calculo.length; i++) {
    try {
      let result = eval(calculo[i]);
      results.push(result);
    } catch (error) {
      results.push(NaN);
    }
  }
  return results;
}

let calculo = ["99 + 89", "8 * 3", "10 / 2", "7 - 4"];
let resultado = turing(calculo);
console.log(resultado);
