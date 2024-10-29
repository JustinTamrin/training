<script lang="ts">
	import '../../app.css';

	// let name = '';
	// let subject = '';
	// let message = '';

	// async function submitForm() {
	// 	const response = await fetch('../api/items', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({ name, subject, message })
	// 	});
	// 	if (response.ok) {
	// 		console.log('Form submitted successfully');
	// 		window.location.reload();
	// 	} else {
	// 		console.error('Error submitting form', response.statusText);
	// 	}
	// }

	interface Data {
		name: string;
		subject: string;
		message: string;
		id: number;
	}

	let name = '';
	let subject = '';
	let message = '';
	let data: Data[] = [];

	async function submitForm() {
		const response = await fetch('../api/items', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, subject, message })
		});

		try {
			if (response.ok) console.log('Insert successfully');
		} catch (error) {
			console.error('Cannot submit form');
		}
	}

	async function getData() {
		const response = await fetch('../api/items', {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		});
		data = await response.json();
		return data;
	}
</script>

<h1>This is my form</h1>
<form class="form" onsubmit={submitForm}>
	<input type="text" placeholder="Your name" bind:value={name} />
	<input type="text" placeholder="Subject" bind:value={subject} />
	<textarea placeholder="Your Message" bind:value={message}></textarea>
	<button type="submit">Submit</button>
</form>

<div>
	<button onclick={getData}> Get data </button>
	<div>
		{#each data as item}
			<div>Name: {item.name}</div>
			<div>Message: {item.message}</div>
		{/each}
	</div>
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
