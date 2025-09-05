function verificarAptidao(brinquedosPessoa, brinquedosAnimal, nomeAnimal) {
  if (nomeAnimal === "Loco") {
    const setBrinquedosPessoa = new Set(brinquedosPessoa);
    return brinquedosAnimal.every((brinquedo) =>
      setBrinquedosPessoa.has(brinquedo)
    );
  }

  let indiceBrinquedoAnimal = 0;
  for (const brinquedoPessoa of brinquedosPessoa) {
    if (
      indiceBrinquedoAnimal < brinquedosAnimal.length &&
      brinquedoPessoa === brinquedosAnimal[indiceBrinquedoAnimal]
    ) {
      indiceBrinquedoAnimal++;
    }
  }
  return indiceBrinquedoAnimal === brinquedosAnimal.length;
}

export function processarAdocoes(
  listasDeBrinquedos,
  listaAnimais,
  animaisDisponiveis
) {
  const [listaBrinquedosPessoa1, listaBrinquedosPessoa2] = listasDeBrinquedos;

  let adocoesPessoa1 = 0;
  let adocoesPessoa2 = 0;
  const resultados = {};

  for (const nomeAnimal of listaAnimais) {
    const animal = animaisDisponiveis[nomeAnimal];
    const pessoa1Apta = verificarAptidao(
      listaBrinquedosPessoa1,
      animal.brinquedos,
      nomeAnimal
    );
    const pessoa2Apta = verificarAptidao(
      listaBrinquedosPessoa2,
      animal.brinquedos,
      nomeAnimal
    );

    if (pessoa1Apta && pessoa2Apta) {
      resultados[nomeAnimal] = "abrigo";
    } else if (pessoa1Apta && adocoesPessoa1 < 3) {
      resultados[nomeAnimal] = "pessoa 1";
      adocoesPessoa1++;
    } else if (pessoa2Apta && adocoesPessoa2 < 3) {
      resultados[nomeAnimal] = "pessoa 2";
      adocoesPessoa2++;
    } else {
      resultados[nomeAnimal] = "abrigo";
    }
  }

  // Regra especial pós-processamento do Loco
  if (resultados["Loco"] && resultados["Loco"] !== "abrigo") {
    const adotanteLoco = resultados["Loco"];
    const totalAdocoesDoAdotante =
      adotanteLoco === "pessoa 1" ? adocoesPessoa1 : adocoesPessoa2;
    if (totalAdocoesDoAdotante <= 1) {
      resultados["Loco"] = "abrigo";
    }
  }

  return resultados;
}
