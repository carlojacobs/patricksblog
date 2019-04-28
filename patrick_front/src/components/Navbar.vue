<template>
<nav class="navbar is-info" role="navigation" aria-label="main navigation">
	<div class="container">
		<div class="navbar-brand">
			<a class="navbar-item navbar-brand-patrick">Patrick Jacobs</a>

			<a role="button" class="navbar-burger burger" :class="{'is-active': isActive}" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" v-on:click="toggleNav">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
			<div class="navbar-start">
				<router-link to="/" class="navbar-item">Home</router-link>
			</div>
		</div>
	</div>
</nav>
</template>

<script>
	export default {
		name: 'Navbar',
		data() {
			return {
				isActive: false
			}
		},
		methods: {
			toggleNav() {
				this.isActive = !this.isActive;
			}
		}
	}
</script>

<style>
.navbar-brand-patrick {
	font-size: 1.5rem;
	font-family: 'Kaushan Script', cursive;
}
</style>
