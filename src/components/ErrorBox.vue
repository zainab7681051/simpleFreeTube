<script>
export default {
    props: { ErrorProp: { msg: null, code: null } },
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
        <div v-if="ErrorProp.code === 404" class="body-text yt-link">
            <a :href="`https://youtube.com/watch?v=${$route.params.id}`">go to youtube</a>
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
    padding: 1rem;
    background: #292828;
}

.header-text {
    font-family: monospace;
    text-align: center;
    font-size: 2em;
    color: #e4eeec
}

.header-text i {
    margin-right: 1rem;
    font-size: 1.3em;
    color: var(--dark-red);
}

.status-code {
    margin-left: 1rem;
    font-size: 1.2em;
    color: var(--orange)
}

.body-text {
    text-transform: capitalize;
    font-size: 1em;
    color: #e4eeec
}

.custom-button {
    margin: 2rem auto 0rem;
}

.body-text.yt-link {
    margin-top: 1rem;
    color: var(--grey);
}

.body-text.yt-link a {
    position: relative;
    color: var(--grey);
    text-decoration: none;
    transition: color 0.3s ease;
}

.body-text.yt-link a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: var(--blue);
    transition: width 0.3s ease;
}

.body-text.yt-link a:hover::after {
    width: 100%;
}

@media (min-width: 600px) {
    .header-text {
        font-size: 2.5em;
    }

    .header-text i {
        font-size: 1.3em
    }

    .body-text {
        font-size: 1.4em;
    }
}

@media (min-width: 1200px) {
    .header-text {
        font-size: 3em;
    }

    .header-text i {
        font-size: 1.6em
    }

    .body-text {
        font-size: 1.7em;
    }
}
</style>