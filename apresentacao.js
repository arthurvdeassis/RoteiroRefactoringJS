module.exports = function gerarFaturaStr(fatura, calc) {
    let faturaStr = `Fatura ${fatura.cliente}\n`;
    for (let apre of fatura.apresentacoes) {
        faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${require('./util')(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
    }
    faturaStr += `Valor total: ${require('./util')(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
    return faturaStr;
};
