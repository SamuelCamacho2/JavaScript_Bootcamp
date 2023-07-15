
//lista de compras
const compras = ['huevos','cereal','pan','jamon','jugo de naranja','pollo']
compras.push('Aceite de girasol')
compras.pop()

// lista de peliculas 
const pelicula = [
    {titulo: 'volver al futuro 2',director: 'Robert Zemeckis',fecha: 1989},
    {titulo: 'interstellar',director: 'Christopher Nolan',fecha: 2014},
    {titulo: 'spider man',director: 'Sam Raimi',fecha: 2002}
]
const Pelicula2010 = pelicula.filter( valor => valor.fecha >= 2010)
const Directores = pelicula.map( valor => valor.director)
const Titulos = pelicula.map( valor => valor.titulo)

const NuevaLista = Directores.concat(Titulos)
const Lista2 = [...Directores, ...Titulos]



