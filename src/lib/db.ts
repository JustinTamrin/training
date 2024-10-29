// import pkg from 'pg';
// const { Pool } = pkg;
// const pool = new Pool({
// 	user: 'postgres',
// 	host: 'localhost',
// 	database: 'justin-svelte-db',
// 	password: 'Incredible$$123',
// 	port: 5432
// });

import pkg from 'pg';
const { Pool } = pkg;

// export default pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'justin-svelte-db',
	port: 5432,
	password: 'Incredible$$123'
});

export default pool;
