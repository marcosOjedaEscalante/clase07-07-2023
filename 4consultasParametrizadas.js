import pkg from 'pg';
const { Pool } = pkg;

const connectionString = 'postgresql://postgres:root@localhost:5432/casoEstudiantes';

const pool = new Pool({
    connectionString
});

await pool.connect();

const text = 'SELECT * FROM curso WHERE codigo_plan_formativo = $1';
const values = ['A2'];

const res = await pool.query(text, values);
console.log(res.rows);
await pool.end();