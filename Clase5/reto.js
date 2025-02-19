let marvel_movies = {

    "Iron Man": {
        year: 2008,
        characters: [
            {
                name : "Tony Stark",
                age : 40
            },
            {
                name : "Pepper Potts",
                age : 18
            }
        ]
    },
    "Captain America": {
        year: 2011,
        characters: [
            {
                name : "Steve Rogers",
                age : 94
            },
            {
                name : "Bucky Barnes",
                age : 32
            }
        ]
    }
}

// Edad de steve rogers
console.log(marvel_movies["Captain America"].characters[0].age)

// Nombre del 2do personaje de Iron Man
console.log(marvel_movies["Iron Man"].characters[1].name)

// Calcular promedio de edad de los actores de las peliculas de marvel
function promedio_personajes(movies) {
    let total = 0
    let movies_names = Object.keys(movies) // ["Iron Man", "Captain America"]
    for (let i = 0; i < movies_names.length; i++) {
        total += movies[movies_names[i]].characters[0].age
        total += movies[movies_names[i]].characters[1].age   
    }
    return total
}

console.log(promedio_personajes(marvel_movies))
