/**
 * Faça um Programa para uma loja de tintas. O programa deverá 
 * pedir o tamanho em metros quadrados da área a ser pintada. 
 * Considere que a cobertura da tinta é de 1 litro para cada 6 metros
 * quadrados e que a tinta é vendida em latas de 18 litros, 
 * que custam R$ 80,00 ou em galões de 3,6 litros, 
 * que custam R$ 25,00.
 */
function loja(area) {
  var litros = area / 6,
      qtsLatas = Math.round(litros / 18),
      totalLata = Math.round(qtsLatas * 80),
      qtsGalao = Math.round(litros / 3.6),
      totalGalao = Math.round(qtsGalao * 25);
      
  return 'Quantidade de Latas necessaria: ' + qtsLatas + '\n Valor total de latas: R$ ' + totalLata + '\n Quantidade de Galão necessaria: ' + qtsGalao + '\n Valor total de galões: R$ ' + totalGalao;
}
