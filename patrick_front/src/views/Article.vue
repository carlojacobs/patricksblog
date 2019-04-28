<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">{{article.title}}</h1>
      <h3 class="subtitle is-3">{{article.subtitle}}</h3>
      <p>Door {{article.author}} op {{article.date}}</p>
      <hr>
    </div>
    <div class="container article-container content body" v-html="article.body"></div>
  </section>
</template>

<script>
import { apiUrl } from '../variables.js';
import axios from 'axios';

export default {
  name: 'Article',
  data() {
    return {
      article: {
        title: String,
        subtitle: String,
        body: String,
        author: String,
        date: String
      }
    }
  },
  methods: {
    setData(article) {
      this.article = article;
    }
  },
  beforeRouteEnter(to, from, next) {
    const id = to.params.id;
    const url = apiUrl + '/articles/article/' + id
    axios.get(url).then(res => {
      next(vm => vm.setData(res.data));
    }).catch(err => {
      console.log(err);
    });
  }
}
</script>
