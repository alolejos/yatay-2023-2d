const miau = () => "Miau ";

const gatoProgramador = {
  nombre: "Mittens",
  edad: 2,
  habilidades: ["rascarse", "dormir en el teclado", "perseguir punteros láser"],
  programar() {
    return "Programando algo interesante... ";
  },
  revisarCodigo() {
    return "Revisando código miau-eticulosamente... ";
  },
  debuggear() {
    return "Buscando el bug... " + miau() + miau();
  },
};

console.log("Mi nombre es " + gatoProgramador.nombre);
console.log("Tengo " + gatoProgramador.edad + " años.");
console.log("Mis habilidades incluyen: " + gatoProgramador.habilidades.join(", "));
console.log(miau() + miau() + miau());
console.log(gatoProgramador.programar());
console.log(gatoProgramador.revisarCodigo());
console.log(gatoProgramador.debuggear());