import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'casoEstudiantes',
    password: 'root',
    port: 5432
});

await pool.connect();

const res = await pool.query('SELECT * FROM curso');
console.log(res.rows);
await pool.end();