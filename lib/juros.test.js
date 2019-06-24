const calculoJuros = require('./juros')

test('jurosSimples', () => {
    const capital = 100
    const juros = 0.10
    const tempo = 1
    const jurosEsperados = 10
    const jurosSimples = calculoJuros.jurosSimples(capital, juros, tempo)

    expect(jurosSimples).toBe(jurosEsperados)
})

test('montanteSimples', () => {
    const capital = 100
    const juros = 0.10
    const tempo = 1
    const montanteEsperado = 110
    
    const jurosSimples = jest.fn()
    jurosSimples.mockImplementation(() => 10)

    const montanteSimples = calculoJuros.pure.montanteSimples({ jurosSimples })
    const montante = montanteSimples(capital, juros, tempo)
    
    expect(jurosSimples.mock.calls[0]).toEqual([capital, juros, tempo])
    expect(montante).toBe(montanteEsperado)
})

test('montanteJurosCompostos', () => {
    const capital = 1000
    const juros = 0.10
    const tempo = 1
    const jurosEsperados = 1100
    const jurosCompostos = calculoJuros.montanteJurosCompostos(capital, juros, tempo)

    expect(jurosCompostos).toBe(jurosEsperados)
})

test('jurosCompostos', () => {
    const capital = 1000
    const juros = 0.10
    const tempo = 1
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => 1100)

    const jurosCompostos = calculoJuros.pure.jurosCompostos({montanteJurosCompostos})
    const compostos = jurosCompostos(capital, juros, tempo)

    expect(montanteJurosCompostos.mock.calls[0]).toEqual([capital, juros, tempo])
    expect(compostos).toBe(100)
})