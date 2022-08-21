<template>
    <nav>
        <router-link to="/">HOME</router-link> |
        <router-link to="/apparaten">APPARATEN</router-link> | 
        <router-link to="/mijn-reservatie">MIJN RESERVATIE</router-link>
    </nav>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
nav {
  padding: 30px;
}

nav a {
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
}
nav a:hover {
    text-decoration: underline;
}
nav a.router-link-exact-active {
  color: #e4e0d3;
}
</style>