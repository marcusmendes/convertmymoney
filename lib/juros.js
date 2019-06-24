const jurosSimples = (capital, juros, tempo) => capital * juros * tempo
const montanteSimples = ({ jurosSimples }) => (capital, juros, tempo) => capital + jurosSimples(capital, juros, tempo)
const montanteJurosCompostos = (capital, juros, tempo) => capital * Math.pow((1 + juros), tempo)
const jurosCompostos = ({ montanteJurosCompostos }) => (capital, juros, tempo) => montanteJurosCompostos(capital, juros, tempo) - capital

module.exports = {
    jurosSimples,
    montanteSimples: montanteSimples({ jurosSimples }),
    montanteJurosCompostos,
    jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
    pure: {
        montanteSimples,
        jurosCompostos
    }
}
