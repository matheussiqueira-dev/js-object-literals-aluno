/**
 * Objetos Literais em JavaScript
 * 
 * Objetos literais sao estruturas de dados que agrupam propriedades (dados)
 * e metodos (funcoes) relacionados em uma unica entidade. Sao definidos
 * usando a notacao de chaves {}.
 * 
 * @author Matheus Siqueira
 */

// ============================================
// CRIACAO DO OBJETO LITERAL "aluno"
// ============================================

const aluno = {
    // Propriedade: string
    nome: "Maria Silva",

    // Propriedade: array de numeros
    notas: [8.5, 9.0, 7.5, 8.0],

    // Metodo: calcula a media aritmetica das notas
    calcularMedia() {
        if (this.notas.length === 0) return 0;

        const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return soma / this.notas.length;
    }
};

console.log("=== OBJETO ALUNO ===");
console.log(aluno);
console.log(`\nMedia do aluno: ${aluno.calcularMedia().toFixed(2)}`);


// ============================================
// DESESTRUTURACAO (Destructuring)
// ============================================

/**
 * A desestruturacao permite extrair valores de objetos (ou arrays)
 * e atribui-los a variaveis de forma concisa.
 */

// Extraindo a propriedade 'nome' do objeto aluno
const { nome } = aluno;

console.log("\n=== DESESTRUTURACAO ===");
console.log(`Nome extraido via desestruturacao: ${nome}`);

// Tambem podemos desestruturar multiplas propriedades e renomear
const { nome: nomeAluno, notas: notasOriginais } = aluno;
console.log(`Nome renomeado: ${nomeAluno}`);
console.log(`Notas originais: [${notasOriginais.join(", ")}]`);


// ============================================
// SPREAD OPERATOR (...)
// ============================================

/**
 * O spread operator (...) permite "espalhar" os elementos de um array
 * ou propriedades de um objeto. E util para criar copias e adicionar
 * novos elementos de forma imutavel.
 */

const novaNota = 9.5;

// Criando um novo array com todas as notas originais + a nova nota
const notasAtualizadas = [...aluno.notas, novaNota];

console.log("\n=== SPREAD OPERATOR ===");
console.log(`Notas originais: [${aluno.notas.join(", ")}]`);
console.log(`Nova nota adicionada: ${novaNota}`);
console.log(`Notas atualizadas: [${notasAtualizadas.join(", ")}]`);

// Atualizando o objeto aluno com as novas notas
aluno.notas = notasAtualizadas;

console.log("\n=== APOS ATUALIZACAO ===");
console.log(`Notas do aluno: [${aluno.notas.join(", ")}]`);
console.log(`Nova media: ${aluno.calcularMedia().toFixed(2)}`);


// ============================================
// EXEMPLO AVANCADO: Criando copia do objeto com spread
// ============================================

/**
 * O spread tambem funciona com objetos, permitindo criar
 * copias superficiais e adicionar/sobrescrever propriedades.
 */

const alunoAtualizado = {
    ...aluno,
    curso: "Engenharia de Software",  // Nova propriedade
    notas: [...aluno.notas, 10.0]      // Adiciona mais uma nota
};

console.log("\n=== OBJETO EXPANDIDO COM SPREAD ===");
console.log(alunoAtualizado);
console.log(`Media atualizada: ${alunoAtualizado.calcularMedia().toFixed(2)}`);
