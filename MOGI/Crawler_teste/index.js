const axios = require('axios')
const cheerio = require('cheerio')

const fetchData = async (url) => {
    const result = await axios.get(url)
    return result.data
}

const main = async () => {
    const content = await fetchData("http://www.cmmc.com.br/projetos/plo.php")
    const $ = cheerio.load(content)
    //const link = $('a').text() "localiza o texto na tabela"
    //console.log(link) "Exibe o texto na tela"
    let dados = []

    $('.tabelaPadrao').each((i, e) => {
        const texto = $(e).find('.tabelaPadrao tr td a').text(); //"Exibe todo o texto da tabela"
        const link = $(e).find('.tabelaPadrao tr td a').attr("href");
        const data = { texto ,link };
        dados.push(data);
        //console.log(`Posição ${i} = ${$(e).text()}`) //"Organiza o texto em posições"
        
    })
    console.log(dados);
}

main()