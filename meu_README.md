# Desafio Abrigo de Animais - Solução Aprimorada

## Visão Geral

Este repositório contém a resolução do desafio "Abrigo de Animais". A solução inicial fornecida foi significativamente refatorada e aprimorada com foco em boas práticas de desenvolvimento, como código limpo, separação de responsabilidades e uma suíte de testes robusta.

O objetivo foi não apenas entregar uma solução que funciona, mas também criar um código de fácil manutenção e entendimento.

## Estrutura do Projeto

```
/
├── src/
│   ├── abrigo-animais.js          # Ponto de entrada e orquestrador da lógica
│   ├── abrigo-animais.test.js     # Testes automatizados com Jest (expandido)
│   ├── dados.js                   # Módulo centralizado para os dados estáticos (animais, brinquedos)
│   ├── servico-adocao.js          # Módulo com as regras de negócio e a lógica principal
│   └── validacoes.js              # Módulo dedicado à validação das entradas
│
├── testeAqui.js                   # Executor de testes manual, rápido e customizado via Node.js
├── package.json
└── README.md                      # Este arquivo
```

## Melhorias Implementadas

1. **Refatoração e Separação de Responsabilidades:** O monolítico `abrigo-animais.js` foi dividido em módulos com responsabilidades únicas (dados, validação, serviço), tornando o código mais fácil de entender, manter e depurar.

2. **Cobertura de Testes Abrangente:** O arquivo de testes original (`abrigo-animais.test.js`) foi expandido para cobrir **todas as regras de negócio** descritas no desafio, incluindo:

   - Casos de erro para entradas inválidas (brinquedos/animais duplicados ou inexistentes).
   - A regra especial de adoção do **Loco** (sucesso e falha).
   - A regra de **limite de 3 adoções** por pessoa.

3. **Executor de Testes Manual (`testeAqui.js`):** Foi criado o script `testeAqui.js`, um executor de testes leve e independente que roda diretamente com Node.js. Ele serve para:

   - Executar todos os cenários de teste (sucesso e falha) sem a necessidade do Jest.
   - Fornecer um relatório claro diretamente no terminal, ideal para verificações rápidas.
   - Demonstrar a lógica funcionando de forma isolada.

4. **Código Limpo e Otimizado:** Foram aplicados princípios de código limpo, como criação de funções puras nos módulos.

## Como Executar

### Pré-requisitos

- Node.js
- npm

### 1. Instalação

Na raiz do projeto, instale as dependências de desenvolvimento (Jest):

```bash
npm install
```

### 2. Rodando os Testes Automatizados (Jest)

Este comando executa a suíte de testes completa e oficial do Jest, incluindo o relatório de cobertura de código.

```bash
npm test
```

**Saída Esperada:** Um relatório indicando que todos os 9 testes em `abrigo-animais.test.js` passaram com sucesso.

### 3. Rodando o Executor de Testes Manual

Este script customizado oferece uma visualização rápida de todos os cenários, incluindo testes de falha propositais para validar o executor.

```bash
node testeAqui.js
```

**Saída Esperada:** Um relatório passo a passo no terminal, com cores indicando o status de cada um dos 11 testes (9 de sucesso e 2 de falha esperada), finalizando com um resumo.
