// import pkg from 'pg';
// const { Pool } = pkg;
// const pool = new Pool({
// 	user: 'postgres',
// 	host: 'localhost',
// 	database: 'justin-svelte-db',
// 	password: 'Incredible$$123',
// 	port: 5432
// });

// export default pool;

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'justin-svelte-db',
	port: 5432,
	password: 'Incredible$$123'
});

export default pool;
