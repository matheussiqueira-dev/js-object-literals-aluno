# Objetos Literais em JavaScript

Projeto educacional que demonstra o uso de objetos literais em JavaScript, abordando conceitos fundamentais como propriedades, métodos, desestruturação e spread operator.

## Sumario

- [Sobre o Projeto](#sobre-o-projeto)
- [Conceitos Abordados](#conceitos-abordados)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Exemplo de Saida](#exemplo-de-saida)
- [Tecnologias](#tecnologias)
- [Autor](#autor)
- [Licenca](#licenca)

## Sobre o Projeto

Este projeto foi desenvolvido para exemplificar a criacao e manipulacao de objetos literais em JavaScript, utilizando um caso pratico de um objeto `aluno` que contem propriedades e metodos para gerenciamento de notas academicas.

O exemplo demonstra boas praticas de programacao em JavaScript moderno (ES6+), incluindo:

- Criacao de objetos com sintaxe literal
- Definicao de metodos dentro de objetos
- Uso do operador `this` para acesso ao contexto
- Desestruturacao de objetos
- Spread operator para manipulacao imutavel de arrays

## Conceitos Abordados

### Objetos Literais

Objetos literais sao estruturas de dados que agrupam propriedades (dados) e metodos (funcoes) relacionados em uma unica entidade. Sao definidos utilizando a notacao de chaves `{}`.

```javascript
const aluno = {
    nome: "Maria Silva",
    notas: [8.5, 9.0, 7.5, 8.0],
    calcularMedia() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
};
```

### Desestruturacao

A desestruturacao permite extrair valores de objetos e atribui-los a variaveis de forma concisa.

```javascript
const { nome } = aluno;
console.log(nome); // "Maria Silva"
```

### Spread Operator

O spread operator (`...`) permite espalhar os elementos de um array, possibilitando a criacao de copias e adicao de novos elementos de forma imutavel.

```javascript
const notasAtualizadas = [...aluno.notas, 9.5];
```

## Estrutura do Projeto

```
js-object-literals-aluno/
├── src/
│   └── objetos-literais.js
├── README.md
└── LICENSE
```

## Como Executar

### Pre-requisitos

- Node.js (versao 14 ou superior)

### Execucao

1. Clone o repositorio:

```bash
git clone https://github.com/matheussiqueira-dev/js-object-literals-aluno.git
```

2. Acesse o diretorio do projeto:

```bash
cd js-object-literals-aluno
```

3. Execute o arquivo principal:

```bash
node src/objetos-literais.js
```

## Exemplo de Saida

```
=== OBJETO ALUNO ===
{
  nome: 'Maria Silva',
  notas: [ 8.5, 9, 7.5, 8 ],
  calcularMedia: [Function: calcularMedia]
}

Media do aluno: 8.25

=== DESESTRUTURACAO ===
Nome extraido via desestruturacao: Maria Silva
Nome renomeado: Maria Silva
Notas originais: [8.5, 9, 7.5, 8]

=== SPREAD OPERATOR ===
Notas originais: [8.5, 9, 7.5, 8]
Nova nota adicionada: 9.5
Notas atualizadas: [8.5, 9, 7.5, 8, 9.5]

=== APOS ATUALIZACAO ===
Notas do aluno: [8.5, 9, 7.5, 8, 9.5]
Nova media: 8.50

=== OBJETO EXPANDIDO COM SPREAD ===
{
  nome: 'Maria Silva',
  notas: [ 8.5, 9, 7.5, 8, 9.5, 10 ],
  curso: 'Engenharia de Software',
  calcularMedia: [Function: calcularMedia]
}
Media atualizada: 8.75
```

## Tecnologias

- JavaScript (ES6+)
- Node.js

## Autor

**Matheus Siqueira**

- GitHub: [@matheussiqueira-dev](https://github.com/matheussiqueira-dev)

## Licenca

Este projeto esta licenciado sob a licenca MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
