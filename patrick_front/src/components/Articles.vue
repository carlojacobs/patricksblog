<template>
<section class="section">
  <div class="container">
    <h2 class="title is-2">Dit heb ik tot nu toe geschreven</h2>
    <hr>
    <div v-for="article in articles" :key="article._id" class="list-article">
      <div class="card" v-on:click="navigateToArticle(article._id)">
        <div class="card-content">
          <div class="content">
            <h3 class="title is-3">{{article.title}}</h3>
            <h4 class="subtitle is-4">{{article.subtitle}}</h4>
            <p>Door {{article.author}} op {{article.date}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Articles',
  props: ['articles'],
  methods: {
    navigateToArticle(id) {
      this.$router.push('/article/' + id);
    }
  }
}
</script>

<style>
.list-article {
  cursor: pointer;
}
.list-article:hover .title {
  text-decoration: underline !important;
}
</style>
