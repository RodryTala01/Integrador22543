    
    //codigo Javascript / Ejemplo de lógica con js
   // var ok = confirm("Es mayor de edad?")

  //  if (ok) { //html dinamico
  //      document.write("<div style='background-color: lightblue;'>Bienvenido a la página</div>")
   // } else { //html dinamico
     //   document.write("<div style='background-color: red;'>Usted es menor de edad, NO PUEDE INGRESAR.</div>")
   // }

   var edad = prompt("Ingrese su edad");
   console.log("edad: " + edad)

   if (edad >= 18) {
    console.warn("entro al true")
    document.write("<div style='background-color: lightblue;'>Bienvenido a la página</div>")
   } else {
    console.error("entro al else")
    document.write("<div style='background-color: red;'>Usted es menor de edad, NO PUEDE INGRESAR.</div>")
   }