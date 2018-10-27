<template>
        <div>
            <v-btn class="btnClose" v-on:click="close">
                <v-icon dark left>arrow_back</v-icon>Back
            </v-btn>
            <h5 class="lbl text-xs-center">invite players with this link:</h5>
            <div class="linkBox">
                    <code> http://localhost:8080/gameID/928347 {{ gameLink }} </code>
                    <v-btn small class="btnCopy text-xs-center" v-on:click="copyGameLink">copy</v-btn>
            </div>
        </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btnClose{
        float: right;
    }
    .btnCopy{
        margin: 15px auto;
    }
    .lbl{
        padding-top: 25vh;
    }
    .linkBox{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    code{
        margin: 0 auto;
    }
</style>