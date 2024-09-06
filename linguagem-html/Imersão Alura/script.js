function pesquisar() {

let section = document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") { 

        section.innerHTML = "<p> Digite alguma coisa </p> "

        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

console.log(section);

let resultados = "";
let título = "";
let descricao = "";
let tags = "";


for (let dado of dados) { 
    
    título = dado.título.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (título.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) )  {

        resultados += `

        <div class="item-resultado"> 
                <h2> 
                    <a href="#" target="_blank"> ${dado.título}</a> 
                </h2>
                <p class="descricao-meta"> 
                    ${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank"> Mais informações </a>

            </div>
    `
    }
}

    if (!resultados) {

        resultados = "<p> Nenhum resultado foi encontrado </p>"

    }


    section.innerHTML = resultados;

}