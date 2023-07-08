import pkg from 'pg';
const { Pool } = pkg;

const connectionString = 'postgresql://postgres:root@localhost:5432/casoEstudiantes';

const pool = new Pool({
    connectionString
});

await pool.connect();

/* UPDATE curso
SET fecha_termno = '05-01-2024'
WHERE codigo_curso = '0074'; */

const text = "UPDATE curso SET fecha_termno = '05-01-2024' WHERE codigo_curso = '0070'";
const values = ['0074', '08-07-2023', '08-12-2023', 303, 'A5'];

const res = await pool.query(text);
console.log(res.rows);
await pool.end();