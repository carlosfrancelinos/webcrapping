const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
    uri: 'http://globoesporte.globo.com/futebol/brasileirao-serie-a',
    transform: function (body) {
        return cheerio.load(body);
    }
}

rp(options)
    .then(($) => {
        $(".glb-grid main .large-uncollapse .tabela-body script").each((i, item) => {
            //console.log(JSON.stringify($(item).html()))
            console.log($(item).contents().filter(function(){
                return this.nodeType !== 1;
            }).filter("contentResource").html())
        })
        //console.log($(".glb-grid main .large-uncollapse .tabela-body script").html())
        //$(".glb-grid main .large-uncollapse .tabela-body script").html()
    })
    .catch((err) => {
        console.log(err);
    })