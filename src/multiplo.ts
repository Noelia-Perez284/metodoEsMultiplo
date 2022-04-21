// • Cree un método esMultiplo con 2 parámetros que devuelva el
// valor lógico verdadero o falso según si el primer número que
// se indique como parámetro es múltiplo del segundo
// • Recuerde que un numero es múltiplo de otro si al dividirlo su
// resto es cero
// • Recuerde que la operación mod permite saber si el resto de
// una división es cero

let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inputNumero1 = <HTMLInputElement>document.getElementById("numero1");
let inputNumero2 = <HTMLInputElement>document.getElementById("numero2");
//let sumaEntreNumeros = <HTMLElement>document.getElementById("multiplos");

function esMultiplo(dividendo: number, divisor: number) {
  let resto = dividendo % divisor;
  let resultado = resto === 0;
  return resultado;
}

btnEnviar.addEventListener("click", () => {
  let numero1 = Number(inputNumero1.value);
  let numero2 = Number(inputNumero2.value);
  let resultado2: boolean;
  resultado2 = esMultiplo(numero1, numero2);
  console.log(resultado2);
});
