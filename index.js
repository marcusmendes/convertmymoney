const express = require('express')
const app = express()
const path = require('path')
const convert = require('./lib/convert')
const apiBCB = require('./lib/apibcb')

// configura a view egine para utilizar o ejs
app.set('view engine', 'ejs')

// configura a pasta views
app.set('views', path.join(__dirname, 'views'))

// configura a pasta para os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    const cotacao = await apiBCB.getCotacao()
    res.render('home', {
        cotacao
    })
})

app.get('/cotacao', (req, res) => {
    const {cotacao, quantidade} = req.query

    if (cotacao && quantidade) {
        const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        })
    } else {
        res.render('cotacao', {
            error: 'Valores inválidos!'
        })
    }
})

app.listen(3000, (err) => {
    if (err) {
        console.log('Não foi possivel iniciar o servidor.')
    } else {
        console.log('ConvertMyMoney está online.')
    }
})