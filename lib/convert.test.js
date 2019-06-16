const convert = require('./convert')

test('converts cotação 4 e quantidade 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})

test('converts cotação 0 e quantidade 4', () => {
    expect(convert.convert(0,4)).toBe(0)
})

test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})

test('toMoney converts string', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})