<script>

import {mapState, mapActions} from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapState(["name_product"])
    },
    methods: {
        ...mapActions(["update","search"])
    }
}


</script>


<template>
    <header class="container">
        <h1 class="logo">LOGO</h1>

        <input @input="(e) => update(e.target?.value)" class="search" placeholder="Digite o nome do produto">

        <button class="buttom-search" type="submit" v-on:click="search()"></button>
    </header>

    <div class="view-name-product">
        <h3>Pesquisa para: {{name_product}}</h3>
    </div>
    

</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    width: auto;
    height: 100px;
    background-color: #F6F6F6;
}


.logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Noto Sans",Calibri,Arial,sans-serif;

    margin-left: 85px;

    color: black;
}

.search {
    width: 200px;
    height: 25px;

    margin-left: 85px;

    border: 1px solid #ccc;
    box-sizing: border-box;
    border-color: gray;
}

.buttom-search {
    width: 32px;
    height: 25px;
    margin: 0;

    padding: 2px;

    border: 1px solid #ccc;
    box-sizing: border-box;
    background-color: #D9D9D9;

    background: url("../assets/search-icon.svg") no-repeat center;
    background-size: 18px 18px
}

.view-name-product {
    display: flex;
    justify-content: space-between;
    justify-items: center;

    margin-top: 22px;
    margin-left: 85px;

    width: auto;
    height: auto;
}
</style>