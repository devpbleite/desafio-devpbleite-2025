export function validarBrinquedos(brinquedos, brinquedosValidos) {
  if (new Set(brinquedos).size !== brinquedos.length) {
    return "Brinquedo inválido";
  }
  for (const brinquedo of brinquedos) {
    if (!brinquedosValidos.has(brinquedo)) {
      return "Brinquedo inválido";
    }
  }
  return null;
}

export function validarAnimais(listaAnimais, animaisDisponiveis) {
  if (new Set(listaAnimais).size !== listaAnimais.length) {
    return "Animal inválido";
  }
  for (const animal of listaAnimais) {
    if (!animaisDisponiveis[animal]) {
      return "Animal inválido";
    }
  }
  return null;
}
