<script lang="ts">
	import '../../app.css';

	interface Data {
		name: string;
		subject: string;
		message: string;
	}

	let data: Data[] = [];
	let name = '';
	let subject = '';
	let message = '';

	async function submitForm() {
		const response = await fetch('../api/items', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, subject, message })
		});
		if (response.ok) {
			console.log('Form Successfully submitted: ', response);
			window.location.reload();
		} else {
			console.error('Something is wrong');
		}
	}

	async function getData() {
		const request = await fetch('../api/items');

		if (request.ok) {
			console.log('Get successful: ', request);
			data = await request.json();
		} else {
			console.log('Get is not successful: ', Error);
		}
	}
</script>

<h1>This is my form</h1>
<form class="form" onsubmit={submitForm}>
	<input type="text" placeholder="Your name" bind:value={name} />
	<input type="text" placeholder="Subject" bind:value={subject} />
	<textarea placeholder="Your Message" bind:value={message}></textarea>
	<button type="submit">Submit</button>
</form>

<div style="margin-top: 20px;">
	<button onclick={getData}> Get data </button>
</div>

<div style="color: white;">
	{#each data as item}
		<div>Name: {item.name}</div>
		<div>Subject: {item.message}</div>
	{/each}
</div>

<style>
	button {
		background-color: blue;
	}
	.form {
		margin-top: 20px;
		color: black;
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 25%;
	}
</style>
