import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'casoEstudiantes',
    password: 'root',
    port: 5432
});

await client.connect();

const res = await client.query('SELECT * FROM curso');
console.log(res.rows);
await client.end();