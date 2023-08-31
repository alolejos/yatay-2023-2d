<script setup>
  import {ref} from 'vue'
  let variable = 'Variable del Componente'
  let sumar = (a, b) => a + b
  function editar(id){
    alert('El id editado es: '+ id)
  }
  function borrar(id){
    alert('El id borrado es: '+ id)
  }
  function agregar(){
    listadoProductos.value.push({id: 6, nombre: "NuevoProducto", precio: 10000})
    console.log(listadoProductos);
  }
  let usuario = ref({
    nombre: 'Roxana',
    apellido: 'Pereyra'
  })
  console.log(usuario.value.nombre);
  let rojo = 'red'
  let negro = 'black'
  let estado = ref(true)
  const listadoProductos = ref([{id: 1, nombre: "Agua", precio: 250}, {id: 2, nombre: "Arroz", precio: 250},{id: 3, nombre: "Queso", precio: 250},{id: 4, nombre: "Aceite", precio: 2000}, {id: 5, nombre: "Carne", precio: 4000}])
</script>

<template>
  <h1>HAY UNA PAGINA</h1>

  <table class="table table-striped">
    <th>
      <td v-bind:class="rojo">Nombre</td>      
      <td :class="negro">Precio</td>
    </th>   
    <tr v-for="producto in listadoProductos">
      <td>{{ producto.nombre }}</td>
      <td>{{ producto.precio }}</td>
      <td><button class="btn btn-success" v-on:click="editar(producto.id)">Editar</button></td>
      <td><button class="btn btn-danger" @click="borrar(producto.id)">Borrar</button></td>
    </tr>
  </table>
  <br>
  <button @click="agregar">Agregar</button>

  <div v-if="estado">ESTADO TRUE</div>
  <div v-else="estado">ESTADO FALSE</div>
  <button @click="estado = false">Estado False</button><button @click="estado = true">Estado true</button>

  <button @click="usuario.nombre = 'Jenifer'">Estado False</button>

  <input type="text" v-model="usuario.nombre">
  <h1>{{ usuario.nombre }}</h1>
</template>

<style scoped>

</style>
