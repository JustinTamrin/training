// import pool from '$lib/db';
// import type { RequestHandler } from '@sveltejs/kit';

import type { RequestEvent } from './$types';
import pool from '$lib/db';
import type { RequestHandler } from '@sveltejs/kit';

// export const POST: RequestHandler = async ({ request }) => {
// 	const { name, subject, message } = await request.json();
// 	const query = `INSERT INTO "form-details"(name, subject, message) VALUES ($1, $2, $3);`;
// 	const values = [name, subject, message];

// 	try {
// 		const result = await pool.query(query, values);
// 		console.log('Insert is successful:', result);
// 		return new Response(JSON.stringify(result), { status: 201 });
// 	} catch (error) {
// 		console.log('something is wrong: ', error);
// 		return new Response(JSON.stringify({ error: 'Failed to insert data' }), { status: 500 });
// 	}
// };

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
		return new Response(JSON.stringify({ error }));
	}
};

export const GET: RequestHandler = async ({ request }) => {
	const query = `SELECT name, subject, message FROM "form-details";`;

	try {
		const result = await pool.query(query);
		console.log('Get is successful:', result);
		return new Response(JSON.stringify(result.rows), { status: 200 });
	} catch (error) {
		console.error('Cannot fetch data:', error);
		return new Response(JSON.stringify({ error }));
	}
};
