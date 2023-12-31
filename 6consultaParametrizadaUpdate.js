import pkg from 'pg';
const { Pool } = pkg;

const connectionString = 'postgresql://postgres:root@localhost:5432/casoEstudiantes';

const pool = new Pool({
    connectionString
});

await pool.connect();

const text = "UPDATE curso SET fecha_termno = $1 WHERE codigo_curso = $2 RETURNING *";
const values = ['08-07-2024', '0071'];

const res = await pool.query(text, values);
console.log(res.rows);
await pool.end();