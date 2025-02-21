// Seleccion de elementos

//Sintaxis
// -document.getElementById("id")
let ultimas_recetas = document.getElementById("ultimas-recetas")
console.log(ultimas_recetas)

titulo_recetas.innetHTML = "Ultimas recetas"

// -document.getElementsByClassName("class")
let recetas = document.getElementsByClassName("receta")
console.log(recetas)

for(let i=0; i<recetas.length; i++){
    recetas[i].innetHTML = "Ultimas recetas"
}
// -document.getElementsByTagName("tag")
let article = document.getElementsByTagName("article")
console.log(article)

for(let i=0; i<article.length; i++){
    const original = article[i].innetHTML
    article[i].innetHTML = "| " + original_html + " |"
}

// -document.querySelector("selector")
document.querySelector("h2#ultimas-recetas")
h2.innetHTML = "Recetas de la semana... (Otra vez)"


// -document.querySelectorAll("selector")
document.querySelector(".recetas, .restaurantes")
console.log(recetas_restaurantes)

// Manipulacion del DOM con JS

// Sintaxis
// - OuterHTML
// - InnerHTML
// - TextContent

//Ejemplos

// Queremos manipular <h2>Últimas recetas</h2>
/* let */ h2 = document.querySelector("h2#ultimas-recetas")
h2.innetHTML = "Recetas de la semana... (Otra vez)"
h2.outerHTML = "<h3>Recetas de la semana... (Otra vez)</h3>"