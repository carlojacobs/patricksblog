<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Bewerk post</h1>
      <hr>
      <form class="form-horizontal" >
        <fieldset>
        <div class="field">
          <label class="label" for="title">Titel</label>
          <div class="control">
            <input id="title" name="title" type="text" placeholder="Titel..." class="input " v-model="article.title">
          </div>
        </div>
        <div class="field">
          <label class="label" for="subtitle">Subtitel</label>
          <div class="control">
            <input id="subtitle" name="subtitle" type="text" placeholder="Subtitel..." class="input" v-model="article.subtitle">
          </div>
        </div>
        <div class="field">
          <label class="label" for="body">Body</label>
          <div class="control">                     
            <markdownEditor v-model="article.body" :configs="{spellChecker: false}"></markdownEditor>
          </div>
        </div>
        <div class="field">
          <label class="label" for="tag">Categorie</label>
          <div class="control">
            <div class="select">
              <select id="tag" name="tag" v-model="article.tag">
                <option>algemeen</option>
                <option>politiek</option>
                <option>religie</option>
              </select>
          </div>
          </div>
        </div>
        <div class="field">
          <label class="label" for=""></label>
          <div class="control">
            <input class="button is-info" value="Update" v-on:click="update" type="button"></input>
          </div>
        </div>
        </fieldset>
        </form>
    </div>
  </section>
</template>

<script>
import markdownEditor from 'vue-simplemde/src/markdown-editor';
import '../../node_modules/simplemde/dist/simplemde.min.css';
import { apiUrl, globalPassword } from '../variables.js';
import axios from 'axios';

export default {
  name: 'Edit',
  data() {
    return {
      article: {
        title: "",
        subtitle: "",
        body: "",
        tag: "",
        author: "",
        date: ""
      }
    }
  },
  created() {
    if (!this.checkIfAuth()) {
      this.$router.push('/');
    }
  },
  components: {
    markdownEditor
  },
  methods: {
    setData(article) {
      this.article = article;
      this.article.tag = article.tags[0];
    },
    checkIfAuth() {
      return this.$store.getters.AUTH;
    },
    update() {
      var article = this.article;
      let current_datetime = new Date();
      let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();
      article.date = formatted_date;
      article.tags = [article.tag];
      var url = apiUrl + '/articles/update';
      axios.post(url, {
        article: article,
        password: globalPassword,
        id: article._id
      }).then(res => {
        if (res.data) {
          this.$router.push('/');
        }
      }).catch(err => {
        console.log(err);
      })
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