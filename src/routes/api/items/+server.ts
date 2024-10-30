import pool from '$lib/db';
import type { RequestHandler } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';

interface FormData {
	name: string;
	subject: string;
	message: string;
}
const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
	const { name, subject, message } = (await request.json()) as FormData;

	try {
		const result = await prisma.form_details.create({
			data: {
				name: name,
				message: message,
				subject: subject
			}
		});
		console.log('Insert is successful:', result);
		return new Response(JSON.stringify(result), { status: 201 });
	} catch (error) {
		console.error('Something is wrong:', error);
		return new Response(JSON.stringify({ 'Something is wrong': error }), { status: 500 });
	} finally {
		await prisma.$disconnect();
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
