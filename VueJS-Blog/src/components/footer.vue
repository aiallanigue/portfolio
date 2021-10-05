<template>
<v-footer class="pa-3" fixed>
	<v-spacer></v-spacer>
	<div>© {{ new Date().getFullYear() }}</div>
</v-footer>	
</template>
<script>
  export default {
  }
</script>
<style>
.footer {
	bottom: -10px;
	height: 20px;
	background: #283048;  /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #859398, #283048);  /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #859398, #283048); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>
	