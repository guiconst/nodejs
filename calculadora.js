const fs = require('fs');

console.log('=== CALCULADORA COMPLETA ===\n');

const args = process.argv.slice(2);
const expressaoOriginal = args.join(' ');

// Verificação básica
if (!expressaoOriginal) {
    console.log('X Ops! Você precisa digitar uma expressão matemática.');
    console.log('Exemplo: node calculadora.js "(2 + 3) * 4"');
    process.exit(1);
}

// Substitui ^ por ** para funcionar com potência
const expressaoFormatada = expressaoOriginal.replace(/\^/g, '**');

// Validação de caracteres permitidos
if (!/^[0-9+\-*/().\s*]+$/.test(expressaoFormatada)) {
    console.log('X Erro: A expressão contém caracteres inválidos.');
    console.log('Permitidos: números, + - * / ^ ( ) e espaços.');
    process.exit(1);
}

let resultado;
try {
    resultado = eval(expressaoFormatada);
} catch (err) {
    console.log(`X Erro ao avaliar a expressão: "${expressaoOriginal}"`);
    console.log('Verifique se os parênteses e operadores estão corretos.');
    process.exit(1);
}

// Exibe resultado
console.log(`Expressão: ${expressaoOriginal}`);
console.log(`Resultado: ${resultado}\n`);

// Observações extras
if (expressaoOriginal.includes('/') && resultado % 1 !== 0) {
    console.log(`Resultado detalhado: ${resultado.toFixed(6)}`);
}

if (resultado < 0) {
    console.log('Nota: O resultado é negativo.');
} else if (resultado === 0) {
    console.log('Nota: O resultado é zero.');
} else if (resultado > 1000) {
    console.log('Nota: Resultado grande!');
}

// Salva histórico
const linhaHistorico = `${new Date().toLocaleString()} → ${expressaoOriginal} = ${resultado}\n`;
fs.appendFileSync('historico.txt', linhaHistorico);

console.log('\n✅ Cálculo concluído com sucesso!');
console.log('📝 Histórico salvo em historico.txt');