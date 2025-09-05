import { animais, brinquedosValidos } from "./dados.js";
import { validarBrinquedos, validarAnimais } from "./validacoes.js";
import { processarAdocoes } from "./servico-adocao.js";

class AbrigoAnimais {
  constructor() {}

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    // 1. Parse das entradas
    const listaBrinquedosPessoa1 = this._parseInput(brinquedosPessoa1, true);
    const listaBrinquedosPessoa2 = this._parseInput(brinquedosPessoa2, true);
    const listaOrdemAnimais = this._parseInput(ordemAnimais, false);

    // 2. Validação das entradas
    const erroBrinquedos =
      validarBrinquedos(listaBrinquedosPessoa1, brinquedosValidos) ||
      validarBrinquedos(listaBrinquedosPessoa2, brinquedosValidos);
    if (erroBrinquedos) {
      return { erro: erroBrinquedos };
    }

    const erroAnimais = validarAnimais(listaOrdemAnimais, animais);
    if (erroAnimais) {
      return { erro: erroAnimais };
    }

    // 3. Execução da lógica de negócio
    const resultados = processarAdocoes(
      [listaBrinquedosPessoa1, listaBrinquedosPessoa2],
      listaOrdemAnimais,
      animais
    );

    // 4. Formatação da saída
    const animaisOrdenados = Object.keys(resultados).sort();
    const listaFinal = animaisOrdenados.map(
      (nomeAnimal) => `${nomeAnimal} - ${resultados[nomeAnimal]}`
    );

    return { lista: listaFinal };
  }

  // Função utilitária para converter a string de entrada em um array.
  _parseInput(inputString, toUpper = false) {
    if (!inputString || typeof inputString !== "string") return [];
    return inputString.split(",").map((item) => {
      const trimmedItem = item.trim();
      return toUpper ? trimmedItem.toUpperCase() : trimmedItem;
    });
  }
}

export { AbrigoAnimais as AbrigoAnimais };
