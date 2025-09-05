export const animais = {
  Rex: { brinquedos: ["RATO", "BOLA"] },
  Mimi: { brinquedos: ["BOLA", "LASER"] },
  Fofo: { brinquedos: ["BOLA", "RATO", "LASER"] },
  Zero: { brinquedos: ["RATO", "BOLA"] },
  Bola: { brinquedos: ["CAIXA", "NOVELO"] },
  Bebe: { brinquedos: ["LASER", "RATO", "BOLA"] },
  Loco: { brinquedos: ["SKATE", "RATO"] },
};

export const brinquedosValidos = new Set([
  "RATO",
  "BOLA",
  "LASER",
  "CAIXA",
  "NOVELO",
  "SKATE",
]);
