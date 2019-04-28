<template>
  <div id="app">
  	<Navbar/>
    <router-view/>
		<Footer/>
  </div>
</template>

<script>
	// Import components
	import Navbar from '@/components/Navbar';

	// Import css
	import '../node_modules/bulma/css/bulma.min.css';

	export default {
		name: 'app',
		components: {
			Navbar
		}
	}
</script>