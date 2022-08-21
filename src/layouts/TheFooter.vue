<template>
    <div class="footer-container">
        <div class="footer-element">elem1</div>
        <div class="footer-element">elem2</div>
        <div class="footer-element">elem3</div>
        <div class="footer-element">
            <div>©2022-{{ new Date().getFullYear() }} Joren Bassleer</div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
.footer-container {
    display: flex;
    width: 100%;
    height: 150px;
    margin-top: auto;
    background: #282418;
}
.footer-element {
    margin: 15px 0;
    color: #e7e3d8;
    width: 25%;
}
</style>