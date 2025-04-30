import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://db_0jtm_user:2zvA4DBfnPdCNT4zKFvlcdKbSuPZp4Yy@dpg-d08s9pqdbo4c73e8mdtg-a.singapore-postgres.render.com/db_0jtm',
  // user: 'postgres',
  // host: 'localhost',
  // database: 'portfolio',
  // password: '1234',
  // port: 5432,
  ssl: {
    rejectUnauthorized: false, // Needed for Render
  }
});

export default pool;
