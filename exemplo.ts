let nome: String = "Fulano"
let idade: number = 27
let altura: number = 1.82
let temGato: boolean = false

//criando arrays
let nomes: String[] = ['Vitor','João','Lucas']
//fazer array de numeros
let numeros: number[] = [10,100,120,130]
//array misturado
let coisas: any = ['Fulaninho',15,'Ciclano',20]

//função no TS
function firstLetterUpperCasa (nome: string, age: number){
    let firsLetter = nome.toUpperCase()
    return firsLetter+nome
}