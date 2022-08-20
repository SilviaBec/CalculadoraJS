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

