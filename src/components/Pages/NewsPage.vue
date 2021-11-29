<template>
  <section class="news-page">
    <div class="news-page__container">
      <PageNavigation v-bind:disablePage="'news'"/>
      <Spiner v-if="this.posts.length === 0"/>
      <div
        class="news-card"
        v-else
        v-for="(post, index) in this.posts" :key="index"
      >
        <img
          v-if="post.photo"
          v-bind:src="post.photo"
          alt="Image from post"
          class="news-card__photo"
        >
        <div class="news-card__text">
          <h3 class="news-card__title">
            {{ post.title }}
          </h3>
          <article
            class="news-card__description"
          >
            {{ post.description }}
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PageNavigation from '@/components/PageNavigation.vue';
import { getPosts } from '../../services/api.js';
import Spiner from '../Spiner.vue';

export default {
  data() {
    return {
      posts: []
    }
  },
  components: {
    PageNavigation,
    Spiner,
  },
  created() {
    getPosts()
      .then(response => {
        this.posts = response.data
      })
  },
  mounted() {
    console.log(this.posts);
  }
}
</script>

<style lang="scss">
  @import "../../assets/styles/_variables.scss";
  @import "../../assets/styles/_mixins.scss";

  $border-radius: 40px;

  .news-page {
    @include static-page;
  }

  .news-card {
    @include typical-card;

    &__photo {
      width: 70%;
      height: 80%;
      max-height: 400px;
      border-radius: 20px;
      margin-top: 20px;

      @media (max-width: $max-width-for-mobiles) {
        width: 85%;
        height: 60%;
      }
    }
  }
</style>
