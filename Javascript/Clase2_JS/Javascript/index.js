
    console.log("Ingresó al JS")


    //variables debilmente tipadas
    var edad = 32
    console.log("Edad: " + edad)
    //edad = prompt("Ingrese edad")
    //console.log ("Edad: " + edad)

    let pi = 3.14
    console.log(pi)
    pi = "Roberto"
    console.log(pi)

    //operaciones
    let a=3
    let b=4
    console.log(a+b)

    let nombre = "Juan"
    let apellido = "Suarez"
    console.log(nombre+apellido)
    //Lo concatena
    console.log(a+apellido)

    //concatenacion
    console.log("Bienvenido " + nombre + " " + apellido + " a nuestra página")
    console.log(`Bienvenido ${nombre} ${apellido} a nuestra página`) // simbolo " ` "

    //operaciones aritméticas
    
    console.log(`suma: ${a+b}`)
    console.log(`resta: ${a-b}`)
    console.log(`multiplicación: ${a*b}`)
    console.log(`división: ${a/b}`)

    //comparacion
    let n=5
    let x=6
    let y=5
    console.log(n==x)
    console.log(n==y)
    console.log(n>x)
    console.log(n<x)
    console.log(y<n)
    console.log(y<=n)
    let yy="5"
    console.log(n===yy)

    let llueve=true
    console.log(llueve==1)
    console.log(llueve===1)

    //operadores lógicos

    let usu
    let pass

   // usu=prompt("Ingrese su usuario")
   // pass=prompt("Ingrese su password")

    if (usu=="san@gmail.com" && pass=="123") {
        console.log("Bienvenido a la página")
    } else {
        console.log("Usuario o contraseña incorrecta")
    }

    let estaLloviendo
    let hayPronosticoLluvia
    estaLloviendo = false
    hayPronosticoLluvia = true
    
    if (estaLloviendo | hayPronosticoLluvia) {
        console.log("Llevar paraguas")
    } else {
        console.log("No llevar paraguas")
    }
    
    //not
    if (!estaLloviendo) {
        console.log("Negar")
    }


    //estructuras de control
    if (true) {
        //ejecuta
    }

    if (true) {
        //ejecuta
    } else {
        //ejeculta si es falso
    }


    edad = 12
    if (edad <= 18) {
        console.log("Niño o joven")
    } else if(edad > 18 && edad < 60){
        console.log("Adulto")
    } else {
        console.log("Anciano")
    }
    

    let nroMes = 2
    switch (nroMes) {
        case 1:
            console.log("Enero")
            break;

        case 2:
            console.log("Febrero")
            break;

        case 3:
            console.log("Marzo")
            break;
                
        default: console.log("No existe")
            break;
    }

    for (let i = 0; //inicializa i=0
         i < 4; //corta cuando esto da false
          i++) //incrementa 1
          {
        console.log(i)
        
    }

    //var let constantes

    if (true) {
        var v = 3
        let t = 4
    }

    console.log(v) //Sigue definida a pesar de salir del if, alcance global
    console.log(t) //No está definida, alcance local
    