
const datosPersonales ={
    nombre: "samuel",
    apellido: "camacho torres",
    edad: 23,
    altura: 170,
    Desarrollador: true
}

let edadX = datosPersonales.edad
const array2 = [datosPersonales]

const amigos =[
    {
    nombre: "jose",
    apellido: "ramirez ruiz",
    edad: 23,
    altura: 175,
    Desarrollador: true
    },
    {
        nombre: "mariana",
        apellido: "lopez amaury",
        edad: 22,
        altura: 180,
        Desarrollador: true
    }
]
amigos.sort((a,b) => a.edad - b.edad)