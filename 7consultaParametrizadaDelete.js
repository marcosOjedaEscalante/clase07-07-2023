import pkg from 'pg';
const { Pool } = pkg;

const connectionString = 'postgresql://postgres:root@localhost:5432/casoEstudiantes';

const pool = new Pool({
    connectionString
});

await pool.connect();

const text = "DELETE FROM curso WHERE codigo_curso = $1 RETURNING *";
const values = ['0074'];

const res = await pool.query(text, values);
console.log(res.rows);
await pool.end();