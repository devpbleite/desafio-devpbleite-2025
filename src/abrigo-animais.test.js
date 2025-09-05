import { AbrigoAnimais } from "./abrigo-animais";

describe("Abrigo de Animais", () => {
  test("Deve rejeitar animal inválido", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "CAIXA,RATO",
      "RATO,BOLA",
      "Lulu"
    );
    expect(resultado.erro).toBe("Animal inválido");
    expect(resultado.lista).toBeFalsy();
  });

  test("Deve encontrar pessoa para um animal", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "RATO,BOLA",
      "RATO,NOVELO",
      "Rex,Fofo"
    );
    expect(resultado.lista[0]).toBe("Fofo - abrigo");
    expect(resultado.lista[1]).toBe("Rex - pessoa 1");
    expect(resultado.lista.length).toBe(2);
    expect(resultado.erro).toBeFalsy();
  });

  test("Deve encontrar pessoa para um animal intercalando brinquedos", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "BOLA,LASER",
      "BOLA,NOVELO,RATO,LASER",
      "Mimi,Fofo,Rex,Bola"
    );

    expect(resultado.lista[0]).toBe("Bola - abrigo");
    expect(resultado.lista[1]).toBe("Fofo - pessoa 2");
    expect(resultado.lista[2]).toBe("Mimi - abrigo");
    expect(resultado.lista[3]).toBe("Rex - abrigo");
    expect(resultado.lista.length).toBe(4);
    expect(resultado.erro).toBeFalsy();
  });

  test("Deve rejeitar lista de brinquedos duplicados", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "BOLA,RATO,BOLA",
      "",
      "Rex"
    );
    expect(resultado.erro).toBe("Brinquedo inválido");
    expect(resultado.lista).toBeFalsy();
  });

  test("Deve rejeitar brinquedo com nome inválido", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "BOLA,OSSO",
      "",
      "Rex"
    );
    expect(resultado.erro).toBe("Brinquedo inválido");
    expect(resultado.lista).toBeFalsy();
  });

  test("Deve rejeitar lista de animais duplicados", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "",
      "",
      "Rex,Fofo,Rex"
    );
    expect(resultado.erro).toBe("Animal inválido");
    expect(resultado.lista).toBeFalsy();
  });

  test("Deve permitir a adoção do Loco se houver outro animal de companhia", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "SKATE,RATO,BOLA",
      "",
      "Rex,Loco"
    );
    expect(resultado.lista).toContain("Loco - pessoa 1");
    expect(resultado.lista).toContain("Rex - pessoa 1");
    expect(resultado.lista.length).toBe(2);
  });

  test("Deve negar a adoção do Loco se ele for o único animal adotado", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "SKATE,RATO",
      "",
      "Loco,Mimi"
    );
    expect(resultado.lista).toContain("Loco - abrigo");
    expect(resultado.lista).toContain("Mimi - abrigo");
  });

  test("Deve negar a quarta adoção para a mesma pessoa", () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      "LASER,RATO,BOLA,CAIXA,NOVELO",
      "",
      "Bebe,Rex,Bola,Zero"
    );
    expect(resultado.lista).toContain("Bebe - pessoa 1");
    expect(resultado.lista).toContain("Bola - pessoa 1");
    expect(resultado.lista).toContain("Rex - pessoa 1");
    expect(resultado.lista).toContain("Zero - abrigo");
    expect(resultado.lista.length).toBe(4);
  });
});
