import type { RequestEvent } from './$types';
import pool from '$lib/db';
import type { RequestHandler } from '@sveltejs/kit';
import type { EventHandler } from 'svelte/elements';

export const POST: RequestHandler = async ({ request }) => {
	const { name, subject, message } = await request.json();
	const query = `INSERT INTO "form-details"(name, subject, message) VALUES ($1, $2, $3);`;

	const values = [name, subject, message];

	try {
		const result = await pool.query(query, values);
		console.log('Insert is successful:', result);
		return new Response(JSON.stringify(result), { status: 201 });
	} catch (error) {
		console.error('Something is wrong:', error);
		return new Response(JSON.stringify({ error: 'Something is wrong' }), { status: 500 });
	}
};

export const GET: RequestHandler = async ({ request }) => {
	const query = `SELECT name, message FROM "form-details";`;

	try {
		const response = await pool.query(query);
		console.log('Request successful: ', response);
		return new Response(JSON.stringify(response.rows), { status: 200 });
	} catch (error) {
		console.error('Something is wrong');
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
