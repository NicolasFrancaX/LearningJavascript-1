// Reverso do número. Faça uma função que retorne o reverso de um número
// inteiro informado. Por exemplo: 127 -> 721.

function reverso(number) {
  return number
          .toString()
          .split('')
            .reverse()
          .join('');
}
