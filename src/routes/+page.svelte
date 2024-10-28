<script lang="ts">
	import '../app.css';
	let count = 0;

	function addCount() {
		count += 1;
	}
</script>

<div class="container">
	<h1
		class="mb-4 text-3xl font-extrabold text-white-900 dark:text-white md:text-5xl lg:text-6xl text-center mt-10"
	>
		<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
			>Justin's</span
		> Training
	</h1>
	<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center">
		Here at I focus on training my programming skills
	</p>

	<h1 class="text-center mt-10">Current count is {count}</h1>
	<button
		on:click={addCount}
		type="button"
		class="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		>Add Counter</button
	>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
