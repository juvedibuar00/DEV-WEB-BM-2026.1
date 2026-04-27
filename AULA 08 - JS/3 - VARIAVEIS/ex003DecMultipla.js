


// comente cada: console.log("=== TESTE 1 ===");
let a = 10, b = 20, c = 30;
console.log(a, b, c);

console.log("=== TESTE 2 ===");
let x, y, z;
x = 5; y = 15; z = 25;
console.log(x + y + z);

console.log("=== TESTE 3 ===");
let nome = "João", idade = 30, aprovado = true;
console.log(nome, idade, aprovado);

console.log("=== TESTE 4 ===");
let p = 10, s = 20, t;
t = p; p = s; s = t;
console.log("p=", p, "s=", s);

console.log("=== TESTE 5 ===");
const PI = 3.14, G = 9.8;
console.log("PI=", PI, "G=", G);

console.log("=== TESTE 6 ===");
let n1 = 15, n2 = 4;
console.log("Soma:", n1 + n2);
console.log("Produto:", n1 * n2);



















































// ============================================
// TESTE 1 - Declaração múltipla com valores
// ============================================

console.log("=== TESTE 1 ===");
// comando de saída - exibe um título/separador no console
// As aspas duplas indicam que é um texto (string)
// O console.log serve para mostrar informações no console do navegador

let a = 10, b = 20, c = 30;
// Declara três variáveis de UMA SÓ VEZ usando a palavra 'let'
// a recebe o valor 10
// b recebe o valor 20  
// c recebe o valor 30
// A vírgula separa as variáveis na mesma linha

console.log(a, b, c);
// Exibe os valores das três variáveis no console
// A saída será: 10 20 30
// As vírgulas dentro do console.log separam os itens a serem mostrados

// ============================================
// TESTE 2 - Declaração sem valores, depois atribuição
// ============================================

console.log("=== TESTE 2 ===");
// Título do segundo teste

let x, y, z;
// Declara três variáveis, mas NENHUMA tem valor ainda
// Neste momento, x, y e z valem 'undefined' (indefinido)

x = 5; y = 15; z = 25;
// Agora atribuímos valores às variáveis
// x recebe 5
// y recebe 15
// z recebe 25
// O ponto e vírgula separa cada comando na mesma linha

console.log(x + y + z);
// Exibe a SOMA dos três valores
// O computador faz a conta: 5 + 15 + 25 = 45
// Por ser SOMA (operação matemática), não precisa de vírgulas
// Saída: 45

// ============================================
// TESTE 3 - Tipos diferentes de dados
// ============================================

console.log("=== TESTE 3 ===");
// Título do terceiro teste

let nome = "João", idade = 30, aprovado = true;
// Declara três variáveis com tipos de dados DIFERENTES:
// nome = "João" → é string (texto) - por isso está entre aspas
// idade = 30 → é number (número) - sem aspas
// aprovado = true → é boolean (verdadeiro/falso) - sem aspas

console.log(nome, idade, aprovado);
// Exibe os três valores
// Por serem tipos diferentes, a vírgula separa cada um
// Saída: João 30 true

// ============================================
// TESTE 4 - Troca de valores (swap)
// ============================================

console.log("=== TESTE 4 ===");
// Título do quarto teste

let p = 10, s = 20, t;
// p = 10 (primeira variável)
// s = 20 (segunda variável)
// t = undefined (variável temporária, sem valor ainda)

t = p;
// A variável temporária t recebe o valor de p
// Agora: t = 10, p = 10, s = 20

p = s;
// p recebe o valor de s
// Agora: t = 10, p = 20, s = 20

s = t;
// s recebe o valor de t (que guardou o valor original de p)
// Agora: t = 10, p = 20, s = 10
// PRONTO! Os valores trocaram: p era 10, virou 20; s era 20, virou 10

console.log("p=", p, "s=", s);
// Exibe os novos valores
// "p=" é um texto fixo (entre aspas)
// p é a variável que agora vale 20
// "s=" é outro texto fixo
// s é a variável que agora vale 10
// Saída: p= 20 s= 10

// ============================================
// TESTE 5 - Const (valores que NÃO mudam)
// ============================================

console.log("=== TESTE 5 ===");
// Título do quinto teste

const PI = 3.14, G = 9.8;
// Declara duas CONSTANTES (valores que NÃO podem ser alterados)
// PI = 3.14 (valor do número pi, usado em matemática)
// G = 9.8 (aceleração da gravidade na Terra)
// const exige que valores sejam atribuídos na hora

console.log("PI=", PI, "G=", G);
// Exibe os valores das constantes
// "PI=" é texto fixo
// PI é a constante que vale 3.14
// "G=" é texto fixo
// G é a constante que vale 9.8
// Saída: PI= 3.14 G= 9.8

// ============================================
// TESTE 6 - Operações matemáticas
// ============================================

console.log("=== TESTE 6 ===");
// Título do sexto teste

let n1 = 15, n2 = 4;
// Declara duas variáveis já com valores
// n1 = 15 (primeiro número)
// n2 = 4 (segundo número)

console.log("Soma:", n1 + n2);
// Calcula e exibe a SOMA
// O computador faz 15 + 4 = 19
// "Soma:" é texto, depois mostra o resultado 19
// Saída: Soma: 19

console.log("Produto:", n1 * n2);
// Calcula e exibe a MULTIPLICAÇÃO (produto)
// O asterisco * é o operador de multiplicação
// O computador faz 15 × 4 = 60
// "Produto:" é texto, depois mostra o resultado 60
// Saída: Produto: 60