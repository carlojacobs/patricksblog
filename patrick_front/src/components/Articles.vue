<template>
<section class="section">
  <div class="container">
    <h2 class="title is-2">Dit heb ik tot nu toe geschreven</h2>
    <hr>
    <div class="tabs is-medium is-boxed">
		  <ul>
		  	<div v-for="(category, index) in categories" :key="index"><li :class="{'is-active': (activeCategory == category.key)}" v-on:click="switchCategory(category.key)"><a>{{category.title}}</a></li></div>
		  </ul>
		</div>
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
import { apiUrl } from '../variables.js';
import axios from 'axios';

export default {
  name: 'Articles',
  data() {
    return {
      categories: [
        {title: "Algemeen", key: "algemeen"},
        {title: "Politiek", key: "politiek"},
        {title: "Religie", key: "religie"},
      ],
      articles: [],
      activeCategory: 'algemeen'
    }
  },
  methods: {
    navigateToArticle(id) {
      this.$router.push('/article/' + id);
    },
    switchCategory(newCategory) {
			this.activeCategory = newCategory;
			this.loadArticles();
    },
    loadArticles() {
      var url = apiUrl + '/tag/' + this.activeCategory;
      axios.get(url).then(res => {
        this.articles = res.data;
      }).catch(err => {
        console.log(err);
      });
    }
	},
  created() {
    this.loadArticles();
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
