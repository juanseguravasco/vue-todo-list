<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Inicio</router-link>
        |
        <router-link to="/add">Añadir Tarea</router-link>
        |
        <router-link to="/about">Acerca de</router-link>
        |
      </nav>
    </header>
    <h1>Gestión de las cosas a hacer este año:</h1>
    <router-view></router-view>
  </div>
</template>

<style scoped>
button {
  margin-left: 10px;
}
</style>
