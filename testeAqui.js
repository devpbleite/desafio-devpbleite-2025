import { AbrigoAnimais } from "./src/abrigo-animais.js";

// Cores para o console, para um output mais legível
const corVerde = "\x1b[32m";
const corVermelha = "\x1b[31m";
const resetCor = "\x1b[0m";

const casosDeTeste = [
  // --- Testes de Sucesso ---
  {
    descricao: "Deve rejeitar animal inválido",
    entradas: ["CAIXA,RATO", "RATO,BOLA", "Lulu"],
    esperado: { erro: "Animal inválido" },
  },
  {
    descricao: "Deve encontrar pessoa para um animal",
    entradas: ["RATO,BOLA", "RATO,NOVELO", "Rex,Fofo"],
    esperado: { lista: ["Fofo - abrigo", "Rex - pessoa 1"] },
  },
  {
    descricao: "Deve encontrar pessoa para um animal intercalando brinquedos",
    entradas: ["BOLA,LASER", "BOLA,NOVELO,RATO,LASER", "Mimi,Fofo,Rex,Bola"],
    esperado: {
      lista: [
        "Bola - abrigo",
        "Fofo - pessoa 2",
        "Mimi - abrigo",
        "Rex - abrigo",
      ],
    },
  },
  {
    descricao: "Deve rejeitar lista de brinquedos com duplicatas",
    entradas: ["BOLA,RATO,BOLA", "", "Rex"],
    esperado: { erro: "Brinquedo inválido" },
  },
  {
    descricao: "Deve rejeitar brinquedo com nome inválido",
    entradas: ["BOLA,OSSO", "", "Rex"],
    esperado: { erro: "Brinquedo inválido" },
  },
  {
    descricao: "Deve rejeitar lista de animais com duplicatas",
    entradas: ["", "", "Rex,Fofo,Rex"],
    esperado: { erro: "Animal inválido" },
  },
  {
    descricao:
      "Deve permitir a adoção do Loco se houver outro animal de companhia",
    entradas: ["SKATE,RATO,BOLA", "", "Rex,Loco"],
    esperado: { lista: ["Loco - pessoa 1", "Rex - pessoa 1"] },
  },
  {
    descricao: "Deve negar a adoção do Loco se ele for o único animal adotado",
    entradas: ["SKATE,RATO", "", "Loco,Mimi"],
    esperado: { lista: ["Loco - abrigo", "Mimi - abrigo"] },
  },
  {
    descricao: "Deve negar a quarta adoção para a mesma pessoa",
    entradas: ["LASER,RATO,BOLA,CAIXA,NOVELO", "", "Bebe,Rex,Bola,Zero"],
    esperado: {
      lista: [
        "Bebe - pessoa 1",
        "Bola - pessoa 1",
        "Rex - pessoa 1",
        "Zero - abrigo",
      ],
    },
  },

  // --- Testes de Falha Proposital ---

  {
    descricao: "(FALHA ESPERADA) Ordem da lista não alfabética",
    entradas: ["RATO,BOLA", "RATO,NOVELO", "Rex,Fofo"], // Mesma entrada do teste 2
    // Erro: O resultado esperado está na ordem de processamento, não alfabética.
    esperado: { lista: ["Rex - pessoa 1", "Fofo - abrigo"] },
  },
  {
    descricao: "(FALHA ESPERADA) Adoção do Loco sozinho",
    entradas: ["SKATE,RATO", "", "Loco,Mimi"], // Mesma entrada do teste 8
    // Erro: Esperamos que a adoção do Loco seja bem-sucedida, mas a regra a reverterá.
    esperado: { lista: ["Loco - pessoa 1", "Mimi - abrigo"] },
  },
];

function rodarTestes() {
  const abrigo = new AbrigoAnimais();
  let testesPassaram = 0;

  console.log("--- Iniciando suíte de testes manual ---\n");

  casosDeTeste.forEach((caso, index) => {
    console.log(`[Teste ${index + 1}] ${caso.descricao}`);

    const resultadoAtual = abrigo.encontraPessoas(...caso.entradas);

    const resultadoAtualStr = JSON.stringify(resultadoAtual);
    const resultadoEsperadoStr = JSON.stringify(caso.esperado);

    if (resultadoAtualStr === resultadoEsperadoStr) {
      console.log(`${corVerde}PASSOU${resetCor}\n`);
      testesPassaram++;
    } else {
      console.log(`${corVermelha}FALHOU${resetCor}`);
      console.log(`  - Esperado: ${resultadoEsperadoStr}`);
      console.log(`  - Recebido: ${resultadoAtualStr}\n`);
    }
  });

  console.log("--- Resumo Final ---");
  if (testesPassaram === casosDeTeste.length) {
    console.log(
      `${corVerde}Todos os ${casosDeTeste.length} testes passaram com sucesso!${resetCor}`
    );
  } else {
    console.log(
      `${corVermelha}${testesPassaram} de ${casosDeTeste.length} testes passaram.${resetCor}`
    );
  }
  console.log("--------------------\n");
}

rodarTestes();
