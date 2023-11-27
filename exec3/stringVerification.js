const correctInputString = '{() [] }';
const incorrectInputString = '{()]';

function checkStringSyntax(string) {
  // conceito de pilha
  const stack = [];
  // simbolos de abertura 
  const openingSymbols = ['{', '[', '('];
  // simbolos de fechamento
  const closingSymbols = ['}', ']', ')'];
  // "casais" de simbolos
  const symbolMap = { '}': '{', ']': '[', ')': '(' };

  for (let i = 0; i < string.length; i++) {
    const currentString = string[i];

    // se a string estiver dentro do "openingSymbols", ele é um simbolo de abertura e então ele coloca dentro da pilha
    if (openingSymbols.includes(currentString)) {
      stack.push(currentString);
      continue;
    } 
    
    // se a string estiver dentro do "closingSymbols", ele é um simbolo de fechamento e então começaremos a verificar
    if (closingSymbols.includes(currentString)) {
      // stack.pop irá retornar o último simbolo que foi removido
      // então, comparamos >>
      const lastOpeningSymbol = stack.pop();

      // se o ultimo simbolo retirado da pilha for diferente do simbolo da pilha que definimos no symbolMap, por exemplo '{ + ]', ele retorna false e é inválido, porém se bater e estiver de acordo, ele continua, e assim por diante, onde no final não pode sobrar nada na pilha
      if (lastOpeningSymbol !== symbolMap[currentString]) {
        return false; 
      }
    }
  }

  return stack.length === 0; 
}

console.log('Test case:', correctInputString, checkStringSyntax(correctInputString));
console.log('Test case:', incorrectInputString, checkStringSyntax(incorrectInputString));
