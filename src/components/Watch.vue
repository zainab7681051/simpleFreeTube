<script>
    import { callApi } from "../controllers/api/index.api.js";
    import ErrorBox from "./ErrorBox.vue";
    import DisplayVids from "./DisplayVids.vue";
    export default {
        data() {
            return {
                result: "",
                call: new callApi(),
                url: "",
                isExtended: false,
                isLoading:true,
                imgLoadedCount:0, 
                error: { msg: null, code: null }
            };
        },
        components: { ErrorBox, DisplayVids },
        async mounted() {
            await this.fetchVideoData();
        },
        watch: {
            '$route.params.id': async function () {
                this.isExtended = false
                this.imgLoadedCount=0 
                this.isLoading=true
                await this.fetchVideoData();
            }
        },
        methods: {
            async fetchVideoData() {
                this.error = { msg: null, code: null }
                this.result = await this.call.getById(this.$route.params.id);
                if (this.result.error) {
                    this.error.msg = "fetching video was unseccessful. this video may not be available. try checking on youtube.";
                    this.error.code = 404;
                    return this.error;
                }
                this.url = "https://www.youtube.com/embed/" + (await this.result.videoId);
                return this.result;
            },
            iFrameError() {
                return this.error = {
                    msg: "something went wrong. could not fetch this video.",
                    code: 404
                }
            },
            onImageLoad() {
                ++this.imgLoadedCount;
                if (this.imgLoadedCount >= this.result.recommendedVideos.length) {
                    this.isLoading = false;
                }
            }
        }
    };
</script>

<template>
    <error-box v-if="error.msg" :ErrorProp="error" @on-error-box-close="() => error = { msg: null, code: null }" />
        <div class="wrapper" v-else>
            <div class="video-container">
                <div v-if="isLoading" class="skeleton"></div>
                <div v-show="!isLoading" class="yt-frame">
                    <iframe @error="iFrameError" :src="url" :title="result.title" frameborder="0"
                                                                                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                                                     allowfullscreen></iframe>
                </div>
                <div v-show="!isLoading" class="info">
                    <div class="title">{{ result.title }}</div>
                    <div :class="{ 'description': true, 'shrinked': !isExtended }">{{ result.description }}</div>
                    <div @click="isExtended = !isExtended" :class="{ 'more': !isExtended, 'less': isExtended }"></div>
                </div>
            </div>
            <div class="recommended-videos">
                <div v-if="isLoading" class="skeleton"></div>
                <display-vids v-show="!isLoading" @img-loaded="onImageLoad"
                                                           :VidData="result.recommendedVideos" /></div>
        </div>
</template>

<style scoped>
.wrapper {
    overflow-x: hidden;
}

.video-container {
    display: block;
    margin: auto;
    width: 100%;
    height: auto;
}

  .yt-frame {
      display: block;
      width: 100%;
      height: 60vh;
  }

  .yt-frame iframe {
      display: block;
      margin: auto;
      width: 100%;
      height: 100%;
  }

  .info {
      display: block;
      margin: 1rem auto;
      font-family: "Roboto", "Arial", sans-serif;
      width: 90%;
      color: var(--white);
  }

  .info .title {
      font-size: 1.2em;
  }

  .info .description {
      font-size: .8em;
      margin-top: 1rem;
      background: #292828;
      padding: 1rem;
      border-radius: 2px;
      border-top: solid 2px var(--orange);
      border-bottom: solid 2px var(--orange);
      height: auto;
      white-space: break-spaces;
      transition: height .4s ease-in-out;
  }

  .info .description.shrinked {
      height: 7vh;
      overflow: hidden;
  }

  .more,
  .less {
      display: block;
      margin-top: .5rem;
      text-align: center;
      font-size: .9em;
  }

  .more::after {
      content: 'more...'
  }

  .less::after {
      content: 'less'
  }

  .recommended-videos {
      display: block;
      margin: 1rem auto;
      width: 90%;
      height: auto;
  }
  .skeleton {
      height: 60vh;
      animation: skeleton-loading 1s linear infinite alternate;
  }
  
  @media (min-width: 1024px) {
   .wrapper {
          display: grid;
          grid-template-areas: "video recs";
          grid-template-columns: 2fr 1fr;
      }

      .video-container {
          margin: 0rem auto;
          grid-area: video;
      }

      .recommended-videos {
          margin: 0rem auto;
          width: 100%;
          grid-area: recs;
      }
      .skeleton{
          height: 90vh
      }
      .video-container .skeleton {
          margin-right: 1rem;
      }

      /* using deep selector to select vid class inside display-vids component */
      ::v-deep .vids-container .vid {
          width: 90% !important;
          margin: auto;
          margin-top: 1rem;
      }
  }
@keyframes skeleton-loading {
  0% {
    background-color: #181818;
  }

  100% {
    background-color: var(--darkgrey);
  }
}

</style>
