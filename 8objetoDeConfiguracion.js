import pkg from 'pg';
const { Pool } = pkg;

const connectionString = 'postgresql://postgres:root@localhost:5432/casoEstudiantes';

const pool = new Pool({
    connectionString
});

await pool.connect();

const query = {
    name: 'fetch-cursos',
    text: 'SELECT * FROM curso WHERE codigo_plan_formativo = $1',
    values: ['A2'],
    rowMode: 'array'
}

const res = await pool.query(query);
console.log(res.rows);
await pool.end();