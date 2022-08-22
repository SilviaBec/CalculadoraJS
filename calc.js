//2.
//Para almacenar la información que irá en mi output screen calculator. Creó una clase calucladora
class Calculadora {
    //Ahora hacemos un constructor (Funcion/metodo especial que se invoca para crear objetos de esa clase)
    //que va a tomar el operando anterior y actual
    constructor(operandoAnteriorTextElement, operandoActualTextElement){
        //Establecemos variables de esta clase, basicamente para meter esos elementos de texto
        //en la clase calculadora
        this.operandoAnteriorTextElement = operandoAnteriorTextElement
        this.operandoActualTextElement = operandoActualTextElement
        this.limpiar()
    }
    //3.Ahora creamos funciones para cada operación, borrar, clear all etc


    limpiar(){
        this.operacionActual =''
        this.operacionAnterior =''
        this.operacion = undefined

    }

    borrar(){

    }

    //Esta funcion hace que el numero al que le damos click pase a la pantalla (num) que numero seleccionaremos?
    anadirNum(num){
        //Para que no me deje poner varios puntos seguidos en la pantalla sino solo uno
        if(num==='.' && this.operacionActual.includes('.')) return
        //Se pasa a string para que concatene y los numeros no se sumen sino que se añadan a la fila en la pantalla
        this.operacionActual = this.operacionActual.toString()+num.toString()
    }
    ///(operacion) * - ó el + ¿Que operación seleccionaremos?
    elegirOp(operacion){
        this.operacion =operacion
        this.operacionAnterior = this.operacionActual
        this.operacionActual=''
    }

    ejecutar(){

    }

    actualizarPantalla(){
        this.operandoActualTextElement.innerText = this.operacionActual
    }
}



//1. 
//QuerySelectorAll va a seleccionar todos los elementos que 
//hagan match con determinado String. En este caso "data-numero" del doc html
const botonesNumero = document.querySelectorAll('[data-numero]')
const botonesOperacion = document.querySelectorAll('[data-operacion]')

//QuerySelector selecciona a single element.
//Si le pasamos varios elementos queryselector selecciona el primero
const botonIgual = document.querySelector('[data-igual]')
const botonBorrar = document.querySelector('[data-borrar]')
const botonAC = document.querySelector('[data-borrar-todo]')
const operandoAnteriorTextElement = document.querySelector('[data-anterior]')
const operandoActualTextElement = document.querySelector('[data-actual]')


const calculadora = new Calculadora(operandoAnteriorTextElement, operandoActualTextElement)

botonesNumero.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.anadirNum(button.innerText)
        calculadora.actualizarPantalla()
    })
})


botonesOperacion.forEach(button => {
    button.addEventListener('click', () => {
        calculadora.elegirOp(button.innerText)
        calculadora.actualizarPantalla()
    })
})



