
function Retornarverdad() {
    return true
}

function Saludos() {
    return setTimeout (() =>{
        console.log('hola soy una promesa')
    }, 5000)
}

function* generador(){
    let id = 0
    while(true) {
        id ++
        yield id
        if(id >= 10){
            return id
        }
    }
}