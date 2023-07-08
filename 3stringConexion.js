import pkg from 'pg';
const { Pool } = pkg;

const connectionString = 'postgresql://postgres:root@localhost:5432/casoEstudiantes';

const pool = new Pool({
    connectionString
});

await pool.connect();

const res = await pool.query('SELECT * FROM curso where');
console.log(res.rows);
await pool.end();