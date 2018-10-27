<template>
    <div class="home">
        <img class="proscht-logo" src="@/assets/img/proscht-logo.svg">
        <v-btn class="button-start">Start</v-btn>
    </div>
</template>

<style scoped>
    
    .proscht-logo {
        width: 400px;
    }

    .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
    }

    .button-start {
        background-color: black !important;
        color: white;
        height: 150px;
        width: 800px;
        margin-top: 100px;
        font-size: 70px;
    }

</style>
