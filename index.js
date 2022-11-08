//npm i wikipedia
const wiki = require('wikipedia')
var buscaNaWike = "Naruto" // Local para colocar o que deseja pesquisar

function wikebusca(){
    (async () => {
        try {
            const idioma = await wiki.setLang('pt') //Seta idioma 
            const searchResults = await wiki.summary(buscaNaWike) //Faz a busca
            var result = searchResults.description //Resultado da pesquisa e definição de exibição que é '.description', '.extract' e entre outras formas 
            console.log(result) //Mostra a pesquisa
        } catch (error) {
            //Mostra o erro da wike
            console.log(error) 
        }
    })()
}
setTimeout(wikebusca, 2000)
