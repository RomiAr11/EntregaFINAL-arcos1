





function preguntaNombre() {

    Swal.fire({
        title: 'Enter your name',
        input: 'text',
        customClass: {
            validationMessage: 'my-validation-message'
        },
        preConfirm: (value) => {
            if (!value) {
                Swal.showValidationMessage(
                    '<i class="fa fa-info-circle"></i> Your name is required'
                )
            }
        }
    })
}


class materia {
    constructor(Nombre, Profesor, Dia, Promedio) {
        this.Nombre = Nombre,
            this.Profesor = Profesor,
            this.Dia = Dia,
            this.Promedio = Promedio
    }

    mostrarInfoMateria() {
        Swal.fire({
            title: 'Agregaste una materia',
            text: `Tu materia es ${this.Nombre} , con ${this.Profesor}, el dia ${this.Dia} y con un promedio de ${this.Promedio}`,
            icon: 'success',
            confirmButtonText: 'Listo'
        })
    }
}


const materia1 = new materia("Matematica", "Juana", "Martes", 10)

const materia2 = new materia("Plastica", "Pepito", "Jueves", 5)

const libreta = [materia1, materia2]
console.log(libreta)



function Promedio() {
    let CantidadNotas = parseInt(prompt("Ingrese la cantidad de notas"))
    let total = 0
    for (let i = 1; i <= CantidadNotas; i++) {
        let nota = parseInt(prompt("ingrese nota"))
        total = total + nota
        console.log(`el total es ${total}`)
    }
    let promedio = total / CantidadNotas
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Tu promedio es de ${promedio} `,
        showConfirmButton: false,
        timer: 1500
    })
}




function materias() {
    let PreguntaMateria = prompt("Ingrese nombre de la materia")
    let PreguntaProfesor = prompt("Ingrese nombre del/la profesor/a")
    let PreguntaDiaCursada = prompt("Que dias la cursas")
    let PreguntaPromedio = parseInt(prompt("Ingrese promedio"))
    console.log(`La materia ingresada es ${PreguntaMateria} dictada por el/la profesor/a ${PreguntaProfesor}, la cursas el dia ${PreguntaDiaCursada} y el promedio es ${PreguntaPromedio}`)



    const MateriaNueva = new materia(PreguntaMateria, PreguntaProfesor, PreguntaDiaCursada, PreguntaPromedio)


    //Agregarlo a la estanteria
    
    MateriaNueva.mostrarInfoMateria()
    let libreta= []
    const cargarlibretas = async ()=>{
        const response = await fetch("materias.json")
       const data = await response.json() 
       console.log (data)
    }
    libreta.push(MateriaNueva)
}



preguntaNombre()
Promedio()
materias()



//Find

function ProfesorBuscado() {
    prompt("Ingrese nombre del profesor")
    let ProfesorEncontrado = libreta.find((Profesor) => Profesor.Profesor == ProfesorBuscado)

    if (ProfesorEncontrado == undefined) {
        console.log(`No tenes clases con ${ProfesorBuscado}`)
    }
    else {
        console.log(ProfesorEncontrado)
    }
}



//Buscar

let TituloDOM = document.getElementById("Titulo")
console.log(TituloDOM)

function MateriaBuscada() {
    prompt(`Ingrese el nombre de la materia buscada`)
    let buscarMateria = libreta.filter((materia) => materia.Nombre.toLowerCase() == MateriaBuscada.toLocaleLowerCase())
    console.log(buscarMateria)
}

function menu() {
    let salirMenu = false
    do {
        salirMenu = preguntarOpcion(salirMenu)
    } while (!salirMenu)
}

function preguntarOpcion(salir) {
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Agregar materia
           2 - Buscar profesores
           0 - Salir del menu`))

    switch (opcionIngresada) {
        case 1:
            materias(libreta)
            break
        case 2:

            ProfesorBuscado(libreta)
            break
        case 0:
            console.log("gracias por utilizar nuestra app")
            salir = true
            return salir
            break
        default:
            console.log("Ingrese una opción correcta")
            break
    }
}





let botonsemantico = document.getElementById("Semantico")
botonsemantico.onclick = menu


localStorage.setItem("Buenos dias", "Tutor")

localStorage.setItem("Libreria", JSON.stringify(libreta))
console.log(libreta)

const eventoFuturo = (valor) => {
    return new Promise((resolve, reject) => {
        if (valor == true) {
            resolve("Somos campeones")
        } else {
            reject("No somos campeones :(")
        }

    })
}
console.log(eventoFuturo(true))



    


