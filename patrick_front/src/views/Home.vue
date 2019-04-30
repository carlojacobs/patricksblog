<template>
	<div>
		<Header/>
    <Articles :articles="articles"/>
    <Footer/>
	</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Articles from '@/components/Articles.vue'
import Footer from '@/components/Footer.vue'
import { apiUrl } from '../variables.js';
import axios from 'axios';

export default {
  name: 'home',
  components: {
    Header,
    Articles,
    Footer
  },
  data() {
    return {
      articles: []
    }
  },
  methods: {
    setData(articles) {
      this.articles = articles;
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

<style media="screen">
  .footer {
    position: absolute;
    width: 100%;
    margin-top: 24px !important;
  }
</style>
