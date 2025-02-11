function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  let amount = principal * Math.pow(1 + (interestRate / compoundingFrequency), compoundingFrequency * timeInYears);
  
  // El interés compuesto es la diferencia entre el monto final y el principal
  let compoundInterest = amount - principal;
  
  return compoundInterest;
}

let output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543


//ngl chatgpt used here
