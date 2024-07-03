<script>
export default {
    props: { ErrorProp: { msg: "", code: 0 } },
    methods: {
        CloseErrorBox() {
            this.$emit('onErrorBoxClose');
            if (this.ErrorProp.code === 404) {
                ///go back from the watch page to search results page after encountering a 404 
                return this.$router.go(-1);
            }
            else if (this.ErrorProp.code >= 500) {
                //reload the current page when API fails to response with the correct data  
                this.$router.go(0);
            }
        }
    }
}
</script>

<template>
    <div class="box">
        <div class="header-text"><i class="bi bi-exclamation-triangle-fill"></i>Error</div>
        <div class="body-text">status Code:<code class="status-code">{{ ErrorProp.code }}</code><br>{{ ErrorProp.msg }}
        </div>
        <div v-if="ErrorProp.code === 404" class="yt-link">go to
            <a :href="`https://youtube.com/watch?v=${$router.param}`">youtube</a>
        </div>
        <button class="custom-button" @click="CloseErrorBox">close</button>
    </div>
</template>

<style scoped>
.box {
    display: block;
    margin: 3rem auto;
    border-bottom-style: solid;
    border-top-style: solid;
    border-color: var(--dark-red);
    padding: 2rem;
    background: #292828;
}

.header-text {
    font-family: monospace;
    text-align: center;
    font-size: 2.5em;
    color: #e4eeec
}

.header-text i {
    margin-right: 1rem;
    font-size: 1.3em;
    color: var(--dark-red);
}

.status-code {
    margin-left: 1rem;
    font-size: 1.3em;
    color: var(--orange)
}

.body-text {
    text-align: center;
    font-size: 1.4em;
    color: #e4eeec
}

.custom-button {
    margin: 2rem auto 0rem;
}
</style>