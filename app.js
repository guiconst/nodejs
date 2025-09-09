const os = require('os');
const process = require('process');

const nomeSistemaOperacional = os.platform();

let nomeSistema = '';
if (nomeSistemaOperacional === 'win32') {
  nomeSistema = 'Windows';
} else if (nomeSistemaOperacional === 'darwin') {
  nomeSistema = 'MacOS';
} else if (nomeSistemaOperacional === 'linux') {
  nomeSistema = 'Linux';
} else {
  nomeSistema = 'Sistema Desconhecido';
}

const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2);
const numeroCPUs = os.cpus().length;
const tempoLigadoSegundos = os.uptime();

const horas = Math.floor((tempoLigadoSegundos % 86400) / 3600);
const minutos = Math.floor((tempoLigadoSegundos % 3600) / 60);

const nomeUsuario = os.userInfo().username;

const arqui = os.arch();
const nomehost = os.hostname();
const diretorhome = os.homedir();

console.log('🖥️ === INFORMAÇÕES DO SISTEMA === \n');
console.log(`💻 Sistema Operacional: ${nomeSistema}`);
console.log(`🧠 Memória RAM Total: ${memoriaTotal} GB`);
console.log(`⚡ Processadores (CPUs): ${numeroCPUs}`);
console.log(`⏰ Tempo ligado: ${horas} horas, ${minutos} minutos`);
console.log(`👤 Usuário: ${nomeUsuario} `);
console.log(`⚙️ Arquitetura do processador: ${arqui}`);
console.log('🟢 Versão do Node.js:', process.version);
console.log(`🆔 Nome do computador: ${nomehost}`);
console.log(`💾 Diretório home do usuário: ${diretorhome} \n`);
console.log('================================== ');
console.log('\n✅ Análise concluída com sucesso!');

