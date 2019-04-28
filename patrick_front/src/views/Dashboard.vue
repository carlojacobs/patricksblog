<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Dashboad</h1>
      <hr>
      <router-link to="/new" class="button is-info is-medium">Nieuwe post</router-link>
      <br>
      <br>
      <form>
				<div class="field">
				  <div class="control">
				    <input class="input is-medium" type="text" v-model="searchQuery" placeholder="Filter op titel...">
				  </div>
				</div>
			</form>
      <br>
      <div v-for="article in filteredArticles" :key="article._id" class="list-article">
        <div class="card">
          <div class="card-content" v-on:click="navigateToArticle(article._id)">
            <div class="content">
              <h3 class="title is-3">{{article.title}}</h3>
              <h4 class="subtitle is-4">{{article.subtitle}}</h4>
              <p>Door {{article.author}} op {{article.date}}</p>
            </div>
          </div>
          <footer class="card-footer">
            <!-- <button href="#" class="card-footer-item">Bewerk</button> -->
            <a href="#" class="card-footer-item" v-on:click="editArticle(article._id)">Bewerk</a>
            <a href="#" class="card-footer-item" v-on:click="deleteArticle(article._id)">Verwijder</a>
          </footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { apiUrl, globalPassword } from '../variables.js';

export default {
  name: 'Dashboard',
  data() {
    return {
      articles: [],
      searchQuery: ''
    }
  },
  created() {
    if (!this.checkIfAuth()) {
      this.$router.push('/');
    }
  },
  computed: {
    filteredArticles: function() {
      return this.articles.filter((article) => {
        return article.title.toLowerCase().match(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    checkIfAuth() {
      return this.$store.getters.AUTH;
    },
    setData(articles) {
      this.articles = articles;
    },
    navigateToArticle(id) {
      this.$router.push('/article/' + id);
    },
    editArticle(id) {
      this.$router.push('/edit/' + id);
    },
    deleteArticle(id) {
      var passCandidate = window.prompt("Wachtoord: ");
      if (passCandidate == globalPassword) {
        var url = apiUrl + '/articles/delete';
        axios.post(url, {
          id: id,
          password: globalPassword
        }).then(res => {
          if (res.data) {
            window.alert("Verwijderd!");
            this.$router.push('/dashboard');
          }
        }).catch(err => {
          console.log(err);
        });
      } else {
        window.alert("Verkeerd wachtwoord!");
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get(apiUrl + '/articles/all').then(res => {
      next(vm => vm.setData(res.data));
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

