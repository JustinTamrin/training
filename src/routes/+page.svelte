<script lang="ts">
	import '../app.css';
	import Pokemon from './pokemon/+page.svelte';
</script>

<Pokemon>
	<span slot="first_heading">Hello</span>
	<span slot="second_heading">Hoi</span>
</Pokemon>

<h1 class="text-center">This is Homepage</h1>

<style>
</style>
